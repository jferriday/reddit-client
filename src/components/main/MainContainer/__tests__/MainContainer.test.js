import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import MainContainer from '../MainContainer';

describe('layout', () => {
    let mainDiv;
    beforeEach(() => {
        render(<MainContainer />)
        mainDiv = screen.getByTestId('main-container');
    })

    test('main div has className of "main-container"', () => {
        expect(mainDiv).toHaveClass('main-container');
    });

});