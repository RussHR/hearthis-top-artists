/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { render } from 'enzyme';
import React from 'react';
import { fake } from 'sinon';

import ArtistPage from './index';

describe('<ArtistPage />', () => {
    const mockProps = {
        artist: {
            avatar_url: "https://images.hearthis.at/1/0/0/_/cache/images/remote/w512_q70_----100c0.jpg",
            id: "7263111",
            permalink_url: "https://hearthis.at/dj.vren/",
            songs: [],
            uri: "https://api-v2.hearthis.at/dj.vren/",
            username: "DJ V-REN"
        },
        onClose: fake(),
        onScrollNearBottom: () => {},
        onSelectSong: () => {}
    };

    it('should render without any issues', () => {
        render(<ArtistPage {...mockProps} />);
    });

    it('should render the artist username and permalink_url', () => {
        const html = render(<ArtistPage {...mockProps} />).html();
        expect(html).to.contain(mockProps.artist.username);
        expect(html).to.contain(mockProps.artist.permalink_url);
    });

    it('should render the artist avatar', () => {
        const wrapper = render(<ArtistPage {...mockProps} />);
        expect(wrapper.find('img').attr('src')).to.equal(mockProps.artist.avatar_url);
    });


    // requires JSDOM config
    xit('should call its onClose prop when the overlay is clicked', () => {
        const wrapper = shallow(<ArtistPage {...mockProps} />);
        wrapper.find('.artistPage__overlay').simulate('click');
        expect(onClose.calledOnce).to.be.true;
    });
});