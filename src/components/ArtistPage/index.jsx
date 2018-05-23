import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import ArtistSong from '../ArtistSong';

import './artist_page.scss';

/**
 * Lists the songs of an artist.
 */
export default class ArtistPage extends Component {
    /**
     * Creates an onScrollNearBottom handler, which is a throttled function.
     */
    constructor(props) {
        super(props);

        this.checkIfMoreSongsNeeded = this.checkIfMoreSongsNeeded.bind(this);
        this.onScrollNearBottom = this.generateOnScrollNearBottomHandler();
    }

    /**
     * Attach the scroll listener after component mounts and checks if more songs must be fetched.
     */
    componentDidMount() {
        this.artistPageEl.addEventListener('scroll', this.onScrollNearBottom);
        this.checkIfMoreSongsNeeded();
    }

    /**
     * Checks if we still need to load more songs despite an update.
     * Generally needed only when initially showing the artist page or on very large screens.
     */
    componentDidUpdate() {
        this.checkIfMoreSongsNeeded();
    }

    /**
     * Detaches the scroll listener when component will unmount.
     */
    componentWillUnmount() {
        this.artistPageEl.removeEventListener('scroll', this.onScrollNearBottom);
    }

    /**
     * Checks if the bottom of the song list is within 480px of the bottom of the window.
     * Calls onScrollNearBottom (defined in constructor) if so.
     *
     * @returns {undefined}
     */
    checkIfMoreSongsNeeded() {
        if (this.artistSongsEl && (this.artistSongsEl.getBoundingClientRect().bottom - 480) - window.innerHeight < 0) {
            this.props.onScrollNearBottom();
        }
    }

    /**
     * Returns a throttled function that calls checkIfMoreSongsNeeded every 100 ms.
     *
     * @returns {function}
     */
    generateOnScrollNearBottomHandler() {
        return throttle(this.checkIfMoreSongsNeeded, 100);
    }

    render() {
        const { artist, onClose, onSelectSong, fetchingMoreSongsByArtist } = this.props;

        return (
            <section className="artistPage">
                <div className="artistPage__overlay" onClick={onClose} />
                <section className="artistPage__detailsAndSongs" ref={c => this.artistPageEl = c}>
                    <div className="artistPage__details">
                        <button className="artistPage__close" aria-label="close" onClick={onClose}>Close &#215;</button>
                        <img className="artistPage__avatar" src={artist.avatar_url} />
                        <h2 className="artistPage__username">{artist.username}</h2>
                        <a href={artist.permalink_url} target="_blank">{artist.permalink_url}</a>
                    </div>
                    <ul className="artistPage__songList" ref={c => this.artistSongsEl = c}>
                        {artist.songs.map(song => (
                            <ArtistSong
                                song={song}
                                key={song.id}
                                onSelectSong={onSelectSong}
                                artist={artist.username}
                            />
                        ))}
                        {artist.allSongsFetched && (
                            <li className="artistPage__listAddition">
                                These are all of the artist’s tracks!
                            </li>
                        )}
                        {fetchingMoreSongsByArtist && (
                            <li className="artistPage__listAddition">
                                Loading more tracks...
                            </li>
                        )}
                    </ul>
                </section>
            </section>
        );
    }
}

ArtistPage.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        /* Image url for artist's avatar */
        avatar_url: PropTypes.string.isRequired,
        /* Permalink url for artist's page on hearthis.at */
        permalink_url: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        songs: PropTypes.arrayOf(PropTypes.shape({
            artwork_url: PropTypes.string,
            id: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onScrollNearBottom: PropTypes.func.isRequired,
    onSelectSong: PropTypes.func.isRequired,
    /* True if the app is currently fetching more songs for the user */
    fetchingMoreSongsByArtist: PropTypes.bool.isRequired
};