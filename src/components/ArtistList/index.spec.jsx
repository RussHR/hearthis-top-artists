/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import ArtistList from './index';

describe('<ArtistList />', () => {
    it('should render without any issues', () => {
        const wrapper = shallow(<ArtistList artists={[]} />);
        expect(wrapper.isEmptyRender()).to.be.false;
    });
});