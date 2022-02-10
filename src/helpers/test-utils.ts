/* eslint-disable import/no-extraneous-dependencies */
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { render } from '@testing-library/react';

Modal.setAppElement(document.body);

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children, initialState }) => (
  <Provider store={configureStore({ reducer: {}, preloadedState: initialState })}>
    {children}
  </Provider>
);

const customRender = (ui, { initialState, ...options } = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders initialState={initialState}>{children}</AllTheProviders>
    ),
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender };
