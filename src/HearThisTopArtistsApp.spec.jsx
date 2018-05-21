/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import HearThisTopArtistsApp from './HearThisTopArtistsApp';

describe('<HearThisTopArtistsApp />', () => {
    it('should render without any issues', () => {
        const wrapper = shallow(<HearThisTopArtistsApp />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });
});