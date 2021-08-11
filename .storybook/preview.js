import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Reducer from '../src/reducers';
import '../src/assets/style/reset.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers());

addDecorator((story) => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  </Provider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
