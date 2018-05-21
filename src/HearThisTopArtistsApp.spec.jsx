/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { render } from 'enzyme';
import React from 'react';

import HearThisTopArtistsApp from './HearThisTopArtistsApp';

describe('<HearThisTopArtistsApp />', () => {
    it('should render without any issues', () => {
        const wrapper = render(<HearThisTopArtistsApp />);
    });
});