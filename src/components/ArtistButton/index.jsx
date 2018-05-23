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
    artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};