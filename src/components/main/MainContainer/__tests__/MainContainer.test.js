import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import MainContainer from '../MainContainer';
import store from '../../../../store/store';
import {Provider} from 'react-redux';

describe('layout', () => {
    let mainDiv;
    beforeEach(() => {
        render(<Provider store={store}><MainContainer /></Provider>)
        mainDiv = screen.getByTestId('main-container');
    })

    test('main div has className of "main-container"', () => {
        expect(mainDiv).toHaveClass('main-container');
    });

});