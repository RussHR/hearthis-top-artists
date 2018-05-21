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
            onClickArtist: () => {}
        };
        const wrapper = render(<ArtistList {...mockProps} />);
        expect(wrapper.text()).to.contain('hearthis.at Top Artists');
    });
});