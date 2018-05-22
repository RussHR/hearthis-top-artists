/* eslint-disable no-undef, quotes */
import { render } from 'enzyme';
import React from 'react';

import HearThisTopArtistsApp from './HearThisTopArtistsApp';

describe('<HearThisTopArtistsApp />', () => {
    // need to set up jsdom with Audio support
    xit('should render without any issues', () => {
        render(<HearThisTopArtistsApp />);
    });
});