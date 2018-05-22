import React from 'react';
import PropTypes from 'prop-types';

import './artist_button.scss';

/**
 * List item button that contains basic artist info. Will open their page on click.
 */
export default function ArtistButton({ artist, onClick }) {
    return (
        <li>
            <button className="artistList__artistButton" onClick={onClick}>
                {artist.username}
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