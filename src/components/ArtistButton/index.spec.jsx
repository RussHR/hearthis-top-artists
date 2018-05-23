/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import React from 'react';
import { fake } from 'sinon';

import ArtistButton from './index';

describe('<ArtistButton />', () => {
    const mockArtist = {
        avatar_url: "https://images.hearthis.at/1/0/0/_/cache/images/remote/w512_q70_----100c0.jpg",
        id: "7263111",
        permalink_url: "https://hearthis.at/dj.vren/",
        songs: [],
        uri: "https://api-v2.hearthis.at/dj.vren/",
        username: "DJ V-REN",
    };
    const onClick = fake();

    it('should render without any issues', () => {
        const wrapper = shallow(<ArtistButton artist={mockArtist} onClick={onClick} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });

    it('should call its onClick prop when clicked', () => {
        const wrapper = shallow(<ArtistButton artist={mockArtist} onClick={onClick} />);
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.be.true;
    });

    it('should render the artist avatar', () => {
        const wrapper = render(<ArtistButton artist={mockArtist} onClick={onClick} />);
        expect(wrapper.find('img').attr('src')).to.equal(mockArtist.avatar_url);
    });

    it('should render the artist username', () => {
        const wrapper = render(<ArtistButton artist={mockArtist} onClick={onClick} />);
        expect(wrapper.html()).to.contain(mockArtist.username);
    });
});