import React from 'react';
import PropTypes from 'prop-types';

import './artist_page.scss';

export default function ArtistPage({ onClose }) {
    return (
        <section className="artistPage">
            <div className="artistPage__overlay" onClick={onClose}>
            </div>
        </section>
    );
}

ArtistPage.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        permalink_url: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};