import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import AppContainer from './containers/AppContainer';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
