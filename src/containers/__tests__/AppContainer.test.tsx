import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import AppContainer from '../AppContainer';
import { Provider } from 'react-redux'
import store from '../../store';

test('Table Pagination Exist on default page', async () => {
  render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
  );

  await waitFor(() => {
    const comboBoxElement = screen.getByTestId('table-pagination', {});
    expect(comboBoxElement).toBeTruthy()
  });
});
