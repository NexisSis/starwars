import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import Combobox from '../index';
import { Provider } from 'react-redux'
import store from '../../../store';

test('Combobox Exist', async () => {
    render(
        <Provider store={store}>
            <Combobox callback={() => {}} options={['kek']} />
        </Provider>
    );

    await waitFor(() => {
        const comboBoxElement = screen.getByTestId('combobox', {});
        expect(comboBoxElement).toBeTruthy()
    })
});
