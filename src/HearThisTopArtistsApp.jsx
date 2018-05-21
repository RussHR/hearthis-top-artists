import React, { Component } from 'react';
import request from 'superagent';

import { useTrackstoAddArtists } from './stateUpdaters';

/**
 * Main app. All hearthis API logic is here.
 */
export default class HearThisTopArtistsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: []
        };
    }

    componentDidMount() {
        this.fetchTopArtists();
    }

    /**
     * Fetches top artists. On success, adds new artists via tracks in the response.
     *
     * @returns {undefined}
     */
    fetchTopArtists() {
        request.get("https://api-v2.hearthis.at/feed/?page=1&count=20")
            .then(res => {
                this.addArtistsToState(res.body);
            })
            .catch(err => {
                // implement error catching here
            });
    }

    /**
     * Updates this.state.artists when supplied with new tracks
     *
     * @param {array} tracks - objects with data for the top tracks
     * @returns {undefined}
     */
    addArtistsToState(tracks) {
        this.setState(({ artists }) => {
            return { artists: useTrackstoAddArtists(artists, tracks) };
        });
    }

    render() {
        return <div>HearThisTopArtistsApp</div>;
    }
}