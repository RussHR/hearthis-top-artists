/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { fake } from 'sinon';
import ArtistSong from './index';

describe('<ArtistSong />', () => {
    const mockProps = {
        song: {
            artwork_url: 'https://images.hearthis.at/1/5/2/_/uploads/6311600/image_track/2012622/w500_q70_.jpg',
            id: '7263111',
            description: 'Show info: datatransmission.co/radio/podc...-rosario-galati\n@rosariogalati\nListen',
            stream_url: 'https://hearthis.at/djandrycristian/daynight-series-episode-036-feature-rosario-galati/',
            title: 'Mock Song'
        },
        onSelectSong: fake()
    };

    it('should render without any issues', () => {
        const wrapper = shallow(<ArtistSong {...mockProps} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });

    it('should calls its onSelectSong prop with song as the argument when play button clicked', () => {
        const wrapper = shallow(<ArtistSong {...mockProps} />);
        wrapper.find('button').simulate('click');
        expect(mockProps.onSelectSong.calledOnce).to.be.true;
        expect(mockProps.onSelectSong.calledWith(mockProps.song)).to.be.true;
    });
});