import React from 'react';
import PropTypes from 'prop-types';

import './artist_button.scss';

/**
 * List item button that contains basic artist info. Will open their page on click.
 */
export default function ArtistButton({ artist, onClick }) {
    return (
        <li>
            <button className="artistButton" onClick={onClick}>
                <span className="artistButton__avatarWrapper">
                    <img
                        className="artistButton__avatar"
                        src={artist.avatar_url}
                        alt={`Avatar of ${artist.username}.`}
                    />
                </span>
                <span>
                    <h3 className="artistButton__username">{artist.username}</h3>
                    {getThreeMostRecentGenresFromSongs(artist.songs)}
                </span>
            </button>
        </li>
    );
}

/**
 * Returns up to the three most recent genres from a list of songs.
 *
 * @param {array} songs - array of objects with a `genre` property
 * @returns {string} an array with new artists and updated artists
 */
const getThreeMostRecentGenresFromSongs = (songs) => {
    const genres = [];

    for (let i = 0; i < songs.length; i++) {
        const genre = songs[i]['genre'];

        if (genres.indexOf(genre) === -1) {
            genres.push(songs[i]['genre']);
        }

        if (genres.length >= 3) {
            return genres.join(', ');
        }
    }

    return genres.join(', ');
};

ArtistButton.propTypes = {
    /* Artist that the button is being rendered for */
    artist: PropTypes.shape({
        /* Image url for the artist's avatar */
        avatar_url: PropTypes.string.isRequired,
        /* Artist's username on hearthis.at */
        username: PropTypes.string.isRequired,
        /* Artist's songs/tracks */
        songs: PropTypes.arrayOf(PropTypes.shape({
            /* Genre of a given song */
            genre: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    /* Called when the button is clicked (opens the artist's page) */
    onClick: PropTypes.func.isRequired
};