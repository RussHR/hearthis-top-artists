import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './artist_list.scss';

export default function ArtistList({ artists }) {
    return (
        <main>
            <header>hearthis.at Top Artists</header>
            <ul className="artistList__artistButtons">
                {artists.map((artist) => (
                    <li key={artist.id}>
                        <button className="artistList__artistButton">
                            {artist.username}
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

ArtistList.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.object).isRequired
};