import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { secondsToMinutesWithSeconds } from '../../helpers';

import './music_player.scss';

/**
 * Song info and button for playing in here.
 */
export default class MusicPlayer extends PureComponent {
    /**
     * Binds this.audio.
     */
    constructor(props) {
        super(props);

        this.audio = new Audio();
        this.togglePause = this.togglePause.bind(this);
        this.replaySong = this.replaySong.bind(this);
    }

    /**
     * Sets up the progress bar for playing songs.
     */
    componentDidMount() {
        this.durationMarkerEl.style.transform = `scale3d(0, 1, 1)`;

        this.audio.addEventListener('timeupdate', () => {
            // shift progress bar
            const scaleX = this.audio.currentTime / this.audio.duration;
            this.durationMarkerEl.style.transform = `scale3d(${scaleX}, 1, 1)`;

            // update progress against duration
            this.progressEl.innerText = secondsToMinutesWithSeconds(this.audio.currentTime);
        });

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
        if (this.props.song.stream_url === null) {
            return;
        }

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
        const artistName = get(song, ['user', 'username']);
        const duration = song.duration ? secondsToMinutesWithSeconds(song.duration) : '0:00';

        return (
            <section className="musicPlayer">
                <div className="musicPlayer__thumbnailWrapper">
                    {song.thumb && (
                        <img
                            className="musicPlayer__thumbnail"
                            src={song.thumb}
                            alt={`Thumbnail for the song ${song.title}`}
                        />
                    )}
                </div>

                <div className="musicPlayer__songDetailsAndProgress">
                    <div className="musicPlayer__songDetails">
                        {song.title}
                        <span className="musicPlayer__artistNameAndDuration">
                            <br />
                            {artistName}
                            <br />
                            <span ref={c => this.progressEl = c}>0:00</span> / {duration}
                        </span>
                    </div>

                    <div className="musicPlayer__durationBar">
                        <div className="musicPlayer__durationMarker" ref={c => this.durationMarkerEl = c} />
                    </div>
                </div>
                <div className="musicPlayer__audioControls">
                    <button onClick={this.togglePause} className="musicPlayer__audioControlsButton">
                        Play/
                        Pause
                    </button>
                    <button onClick={this.replaySong} className="musicPlayer__audioControlsButton">
                        Replay
                    </button>
                </div>
            </section>
        );
    }
}

MusicPlayer.propTypes = {
    /* song is only undefined when the app first loads */
    song: PropTypes.shape({
        /* Image url for the song's thumbnail */
        thumb: PropTypes.string,
        /* Title of the song */
        title: PropTypes.string.isRequired,
        /* Stream url of the song */
        stream_url: PropTypes.string,
        /* Duration of the song in seconds */
        duration: PropTypes.string,
        /* Artist of the song */
        user: PropTypes.shape({
            /* Username of the artist of the song */
            username: PropTypes.string
        })
    })
};

MusicPlayer.defaultProps = {
    song: {
        thumb: null,
        stream_url: null,
        title: 'Choose a song.'
    }
};