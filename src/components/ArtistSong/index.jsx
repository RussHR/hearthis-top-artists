import React from 'react';
import PropTypes from 'prop-types';

import './artist_song.scss';

/**
 * Song info and button for playing in here.
 */
export default function ArtistSong({ song, onSelectSong }) {
    return (
        <li className="artistSong">
            <img src={song.artwork_url} className="artistSong__artwork" />
            <button onClick={() => onSelectSong(song)}>
                Play
            </button>
        </li>
    );
}

ArtistSong.propTypes = {
    song: PropTypes.shape({
        artwork_url: PropTypes.string.isRequired
    }),
    onSelectSong: PropTypes.func.isRequired
};