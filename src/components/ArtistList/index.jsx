import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import ArtistButton from '../ArtistButton';

import './artist_list.scss';

export default class ArtistList extends Component {
    /**
     * Creates an onScrollNearBottom handler, which is a throttle function.
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
        if (this.artistButtons && (this.artistButtons.getBoundingClientRect().bottom - 480) - window.innerHeight < 0) {
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
        const { artists, onClickArtist } = this.props;

        return (
            <main>
                <header>hearthis.at Top Artists</header>
                <ul className="artistList__artistButtons" ref={c => { this.artistButtons = c; }}>
                    {artists.map((artist, index) => (
                        <ArtistButton
                            key={artist.id}
                            artist={artist}
                            onClick={() => onClickArtist(index)}
                        />
                    ))}
                </ul>
            </main>
        );
    }
}

ArtistList.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
    onScrollNearBottom: PropTypes.func.isRequired,
    onClickArtist: PropTypes.func.isRequired
};