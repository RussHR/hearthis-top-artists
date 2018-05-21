import React from 'react';
import PropTypes from 'prop-types';

import ArtistSong from '../ArtistSong';

import './artist_page.scss';

export default function ArtistPage({ artist, onClose }) {
    return (
        <section className="artistPage">
            <div className="artistPage__overlay" onClick={onClose} />
            <section className="artistPage__detailsAndSongs">
                <div></div>
                <ul className="artistPage__songList">
                    {artist.songs.map(song => <ArtistSong song={song} key={song.id} />)}
                </ul>
            </section>
        </section>
    );
}

ArtistPage.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        permalink_url: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        songs: PropTypes.arrayOf(PropTypes.shape({
            artwork_url: PropTypes.string,
            id: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};