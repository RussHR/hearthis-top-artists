/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import ArtistSong from './index';

describe('<ArtistSong />', () => {
    const mockSong = {
        artwork_url: 'https://images.hearthis.at/1/5/2/_/uploads/6311600/image_track/2012622/w500_q70_----152693.jpg',
        id: '7263111',
        description: 'Show info: datatransmission.co/radio/podc...-rosario-galati\n@rosariogalati\nListen to DT Radio',
        stream_url: 'https://hearthis.at/djandrycristian/daynight-series-episode-036-feature-rosario-galati/',
        title: 'Mock Song'
    };

    it('should render without any issues', () => {
        const wrapper = shallow(<ArtistSong song={mockSong} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });
});