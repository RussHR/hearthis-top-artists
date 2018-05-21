import React from 'react';

import './artist_song.scss';

export default function ArtistSong({ song }) {
    return (
        <li className="artistSong">
            <img src={song.artwork_url} className="artistSong__artwork" />
            <button>
                Play
            </button>
        </li>
    );
}