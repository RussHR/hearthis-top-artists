import React from 'react';
import PropTypes from 'prop-types';

import './music_player.scss';

/**
 * Song info and button for playing in here.
 */
export default function MusicPlayer({ song }) {
    return (
        <section className="musicPlayer">
            {song.stream_url}
        </section>
    );
}

MusicPlayer.propTypes = {
    song: PropTypes.shape({
        artwork_url: PropTypes.string,
        stream_url: PropTypes.string,
        title: PropTypes.string.isRequired
    })
};

MusicPlayer.defaultProps = {
    song: {
        artwork_url: null,
        stream_url: null,
        title: 'Choose a song.'
    }
};