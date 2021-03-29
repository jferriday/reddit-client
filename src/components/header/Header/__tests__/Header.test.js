import {fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Header from '../Header';

describe("header section:", () => {
    beforeEach(() => {
        render(<Header />)
    })
    test("displays search field", async () => {
        expect(await screen.findByTestId("search")).toBeInTheDocument();
    })

    test("displays search button", async () => {
        expect(await screen.findByTestId("searchButton")).toBeInTheDocument();
        
    })
})

describe("search bar", () => {
    beforeEach(() => {
        render(<Header />)
    });

    test('renders search term', async () => {
        // checks that the search bar renders correct search term
        // if an onChange implementation is used to update state somewhere,
        // the value will need to be update to pass this test
        const searchBar = await screen.findByTestId('search');
        fireEvent.change(searchBar, {target: {value: "search term"}});
        expect(searchBar.value).toBe("search term")
   
    })

    test('search button dispatches search function (which clears input text)', async () => {
        const submitBtn = await screen.findByTestId('searchButton');
        const searchBar = await screen.findByTestId('search');
        fireEvent.change(searchBar, {target: {value: "search term"}});
        expect(searchBar.value).toBe("search term")
        fireEvent.click(submitBtn);
        expect(searchBar.value).toBe('');
        
    })


})