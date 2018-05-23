import React from 'react';
import PropTypes from 'prop-types';

import { secondsToMinutesWithSeconds } from '../../helpers';

import './artist_song.scss';

/**
 * Song info and button for playing in here.
 */
export default function ArtistSong({ song, onSelectSong, artist }) {
    const altText = `Thumbnail image for the track ${song.title} by the artist ${artist}.`;
    return (
        <li className="artistSong">
            <span className="artistSong__artworkAndPlayButtonWrapper">
                <span className="artistSong__artworkWrapper">
                    <img src={song.thumb} className="artistSong__artwork" alt={altText} />
                </span>
                <button className="artistSong_playButton" onClick={() => onSelectSong(song)}>
                    &#9654; Play
                </button>
            </span>
            <span>
                <h3 className="artistSong_title">{song.title}</h3>
                {secondsToMinutesWithSeconds(song.duration)}
                <br />
                {song.genre}
                <br />
                <a
                    href={song.permalink_url}
                    target="_blank"
                    className="artistSong_permalinkUrl"
                >
                    {song.permalink_url}
                </a>
            </span>
        </li>
    );
}

ArtistSong.propTypes = {
    /* Current artist's song */
    song: PropTypes.shape({
        /* Image url for the song's thumbnail */
        thumb: PropTypes.string.isRequired,
        /* Title of the song */
        title: PropTypes.string.isRequired,
        /* Genre of the song */
        genre: PropTypes.string.isRequired
    }),
    /* Function called when the play button is clicked (starts playing the song) */
    onSelectSong: PropTypes.func.isRequired,
    /* Username of the artist of the song, used for the alt text */
    artist: PropTypes.string.isRequired
};