import React from 'react';
import { render } from 'react-dom';
import HearThisTopArtistsApp from './HearThisTopArtistsApp';

if (module.hot) {
    module.hot.accept();
}

import 'normalize.css';
import './main.scss';

render(<HearThisTopArtistsApp />, document.getElementById('hear-this-top-artists-app'));