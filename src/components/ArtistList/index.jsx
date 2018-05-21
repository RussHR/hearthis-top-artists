import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import ArtistButton from '../ArtistButton';

import './artist_list.scss';

export default class ArtistList extends Component {
    /**
     * Attach the scroll listener after component mounts.
     */
    componentDidMount() {
        window.addEventListener('scroll', this.onScrollNearBottom());
    }

    /**
     * Returns a throttled function that calls onScrollNearBottom if ArtistList is scrolled near bottom.
     *
     * @returns {function}
     */
    onScrollNearBottom() {
        return throttle(() => {
            if ((this.artistButtons.getBoundingClientRect().bottom - 480) - window.innerHeight < 0) {
                this.props.onScrollNearBottom();
            }
        }, 100);
    }

    render() {
        const { artists, onClickArtist } = this.props;

        return (
            <main>
                <header>hearthis.at Top Artists</header>
                <ul className="artistList__artistButtons" ref={c => { this.artistButtons = c; }}>
                    {artists.map((artist, index) => (
                        <ArtistButton
                            key={artist.id}
                            artist={artist}
                            onClick={() => onClickArtist(index)}
                        />
                    ))}
                </ul>
            </main>
        );
    }
}

ArtistList.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
    onScrollNearBottom: PropTypes.func.isRequired,
    onClickArtist: PropTypes.func.isRequired
};