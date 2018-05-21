import React, { Component } from 'react';
import request from 'superagent';

import ArtistList from './components/ArtistList';

import { useTrackstoAddArtists } from './stateUpdaters';

/**
 * Main app. All hearthis API logic is here.
 */
export default class HearThisTopArtistsApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: [],
            artistPage: 1,
            fetchingMoreArtists: false,
            activeArtistIndex: null
        };

        this.fetchTopArtists = this.fetchTopArtists.bind(this);
        this.setActiveArtist = this.setActiveArtist.bind(this);
    }

    /**
     * Fetch initial tracks right after component mounts.
     */
    componentDidMount() {
        this.fetchTopArtists();
    }

    /**
     * Fetches top artists. On success, adds new artists via tracks in the response.
     *
     * @returns {undefined}
     */
    fetchTopArtists() {
        // we only want to fetching more artists if we aren't already fetching more
        if (!this.state.fetchingMoreArtists) {
            this.setState(() => ({ fetchingMoreArtists: true }), () => {
                request.get(`https://api-v2.hearthis.at/feed/?page=${this.state.artistPage}&count=20`)
                    .then(res => {
                        this.addArtistsToState(res.body);
                    })
                    .catch(err => {
                        // implement error catching here
                    })
                    .finally(() => {
                        this.setState(({ artistPage }) => {
                            return {
                                artistPage: artistPage + 1,
                                fetchingMoreArtists: false
                            };
                        });
                    });
            });
        }
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

    /**
     * Sets an active artist and lists their tracks.
     *
     * @param {number|null} index - index of the artists in the state to set active
     * @returns {undefined}
     */
    setActiveArtist(activeArtistIndex) {
        this.setState(() => ({ activeArtistIndex }));
    }

    render() {
        return (
            <ArtistList
                artists={this.state.artists}
                onScrollNearBottom={this.fetchTopArtists}
                onClickArtist={this.setActiveArtist}
            />
        );
    }
}