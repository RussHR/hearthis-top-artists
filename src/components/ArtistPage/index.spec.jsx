/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import { fake } from 'sinon';

import ArtistPage from './index';

describe('<ArtistPage />', () => {
    const mockArtist = {
        avatar_url: "https://images.hearthis.at/1/0/0/_/cache/images/remote/w512_q70_----100c0.jpg",
        id: "7263111",
        permalink_url: "https://hearthis.at/dj.vren/",
        songs: [],
        uri: "https://api-v2.hearthis.at/dj.vren/",
        username: "DJ V-REN",
    };
    const onClose = fake();

    it('should render without any issues', () => {
        const wrapper = shallow(<ArtistPage artist={mockArtist} onClose={onClose} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });

    it('should call its onClose prop when the overlay is clicked', () => {
        const wrapper = shallow(<ArtistPage artist={mockArtist} onClose={onClose} />);
        wrapper.find('.artistPage__overlay').simulate('click');
        expect(onClose.calledOnce).to.be.true;
    });
});