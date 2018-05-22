import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './music_player.scss';

/**
 * Song info and button for playing in here.
 */
export default class MusicPlayer extends PureComponent {
    /**
     * Binds this.audio, and attaches a listener to update duration bar.
     */
    constructor(props) {
        super(props);

        this.audio = new Audio();
        this.audio.addEventListener('timeupdate', () => {
            const scaleX = this.audio.currentTime / this.audio.duration;
            this.durationMarkerEl.style.transform = `scale3d(${scaleX}, 1, 1)`;
        });

        this.togglePause = this.togglePause.bind(this);
        this.replaySong = this.replaySong.bind(this);
    }

    /**
     * If a new song is passed to MusicPlayer, automatically start playing it.
     */
    componentDidUpdate({ song: oldSong }) {
        if (oldSong !== this.props.song) {
            this.audio.src = this.props.song.stream_url;
            this.audio.play();
        }
    }

    /**
     * Toggles pausing/playing of current song.
     *
     * @returns {undefined}
     */
    togglePause() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    /**
     * Starts the current song from the beginning.
     *
     * @returns {undefined}
     */
    replaySong() {
        this.audio.currentTime = 0;
    }

    render() {
        const { song } = this.props;

        return (
            <section className="musicPlayer">
                {song.title}
                <button onClick={this.togglePause}>
                    Play/Pause
                </button>
                <button onClick={this.replaySong}>
                    Replay Song
                </button>
                <div className="musicPlayer__durationBar">
                    <div className="musicPlayer__durationMarker" ref={c => this.durationMarkerEl = c} />
                </div>
            </section>
        );
    }
}

MusicPlayer.propTypes = {
    // song is only undefined when the app first loads
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