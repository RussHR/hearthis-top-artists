import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import ArtistButton from '../ArtistButton';

import './artist_list.scss';

/**
 * List of artists on the main page.
 */
export default class ArtistList extends Component {
    /**
     * Creates an onScrollNearBottom handler, which is a throttled function.
     */
    constructor(props) {
        super(props);

        this.checkIfMoreArtistsNeeded = this.checkIfMoreArtistsNeeded.bind(this);
        this.onScrollNearBottom = this.generateOnScrollNearBottomHandler();
    }

    /**
     * Attach the scroll listener after component mounts and checks if more artists must be fetched.
     */
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollNearBottom);
        this.checkIfMoreArtistsNeeded();
    }

    /**
     * Checks if we still need to load more artists despite an update.
     * Generally needed only when the initial fetches return a few artists.
     */
    componentDidUpdate() {
        this.checkIfMoreArtistsNeeded();
    }

    /**
     * Checks if the bottom of the artist buttons is within 480px of the bottom of the window.
     * Calls onScrollNearBottom (defined in constructor) if so.
     *
     * @returns {undefined}
     */
    checkIfMoreArtistsNeeded() {
        if (this.artistListEl && (this.artistListEl.getBoundingClientRect().bottom - 480) - window.innerHeight < 0) {
            this.props.onScrollNearBottom();
        }
    }

    /**
     * Returns a throttled function that calls checkIfMoreArtistsNeeded every 100 ms.
     *
     * @returns {function}
     */
    generateOnScrollNearBottomHandler() {
        return throttle(this.checkIfMoreArtistsNeeded, 100);
    }

    render() {
        const { artists, onClickArtist, fetchingMoreArtists } = this.props;

        return (
            <main>
                <header>
                    <h1 className="artistList__appTitle">
                        hearthis.at Top Artists
                    </h1>
                </header>
                <ul className="artistList__artistButtons" ref={c => { this.artistListEl = c; }}>
                    {artists.map((artist, index) => (
                        <ArtistButton
                            key={artist.id}
                            artist={artist}
                            onClick={() => onClickArtist(index)}
                        />
                    ))}
                    {fetchingMoreArtists && (
                        <li className="artistList__listAddition">
                            Loading more artists...
                        </li>
                    )}
                </ul>
            </main>
        );
    }
}

ArtistList.propTypes = {
    /* List of artist objects */
    artists: PropTypes.arrayOf(PropTypes.shape({
        /* unique hearthis.at id of artist  */
        id: PropTypes.string.isRequired
    })).isRequired,
    /* Function that is called when the user scrolls near the bottom of the artist list  */
    onScrollNearBottom: PropTypes.func.isRequired,
    /* Function that is called when the user clicks an artist button (opens the artist's page)  */
    onClickArtist: PropTypes.func.isRequired,
    /* True if more artists are currently being fetched */
    fetchingMoreArtists: PropTypes.bool.isRequired
};