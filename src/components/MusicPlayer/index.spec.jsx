/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import MusicPlayer from './index';

describe('<MusicPlayer />', () => {
    const mockProps = {
        song: {
            artwork_url: 'https://images.hearthis.at/1/5/2/_/uploads/6311600/image_track/2012622/w500_q70_.jpg',
            id: '7263111',
            description: 'Show info: datatransmission.co/radio/podc...-rosario-galati\n@rosariogalati\nListen',
            stream_url: 'https://hearthis.at/djandrycristian/daynight-series-episode-036-feature-rosario-galati/',
            title: 'Mock Song'
        }
    };

    // need to set up jsdom with Audio support
    xit('should render without any issues', () => {
        const wrapper = shallow(<MusicPlayer {...mockProps} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });
});
