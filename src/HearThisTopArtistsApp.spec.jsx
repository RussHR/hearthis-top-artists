/* eslint-disable no-undef, quotes */
import { render } from 'enzyme';
import React from 'react';

import HearThisTopArtistsApp from './HearThisTopArtistsApp';

describe('<HearThisTopArtistsApp />', () => {
    it('should render without any issues', () => {
        render(<HearThisTopArtistsApp />);
    });
});