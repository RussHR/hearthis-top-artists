/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { render } from 'enzyme';
import React from 'react';

import ArtistList from './index';

describe('<ArtistList />', () => {
    it('should render without any issues', () => {
        const mockProps = {
            artists: [],
            onScrollNearBottom: () => {},
            onClickArtist: () => {},
            fetchingMoreArtists: false
        };
        const wrapper = render(<ArtistList {...mockProps} />);
        expect(wrapper.text()).to.contain('hearthis.at Top Artists');
    });

    it('should render the loading message if it is fetching more artists', () => {
        const mockProps = {
            artists: [],
            onScrollNearBottom: () => {},
            onClickArtist: () => {},
            fetchingMoreArtists: true
        };
        const wrapper = render(<ArtistList {...mockProps} />);
        expect(wrapper.text()).to.contain('Loading more artists...');
    });

    it('should not render the loading message if it is fetching more artists', () => {
        const mockProps = {
            artists: [],
            onScrollNearBottom: () => {},
            onClickArtist: () => {},
            fetchingMoreArtists: false
        };
        const wrapper = render(<ArtistList {...mockProps} />);
        expect(wrapper.text()).to.not.contain('Loading more artists...');
    });
});