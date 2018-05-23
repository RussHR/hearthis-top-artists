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
                    Example Genre, Example Genre, Example Genre
                </span>
            </button>
        </li>
    );
}

ArtistButton.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        permalink_url: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};