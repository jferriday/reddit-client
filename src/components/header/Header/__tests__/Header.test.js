import {fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Header from '../Header';
import store from '../../../../store/store';
import {Provider} from 'react-redux';

describe("header section:", () => {
    beforeEach(() => {
        render(<Provider store={store}><Header /></Provider>)
    })
    test("displays search field", async () => {
        expect(await screen.findByTestId("search")).toBeInTheDocument();
    })

    test("displays search button", async () => {
        expect(await screen.findByTestId("searchButton")).toBeInTheDocument();
        
    });

    test('displays "categories" button', async () => {
        expect(await screen.findByText('Categories')).toBeInTheDocument()
    })
})

describe("search bar", () => {
    beforeEach(() => {
        render(<Provider store={store}><Header /></Provider>)
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

describe('Categories section', () => {
    let catBtn;
    beforeEach(() => {
        render(<Provider store={store}><Header /></Provider>);
        catBtn = screen.getByText('Categories');
    });

    test('Clicking "Categories" toggles the CategoryList compoent', () => {
        const catHeading = screen.getByTestId('cats-list');
        
        // should not be rendered first
        expect(catHeading).not.toHaveClass("catMenu")

        // click to open
        fireEvent.click(catBtn);
        expect(catHeading).toHaveClass("catMenu")
        // click again to close
        fireEvent.click(catBtn);
        expect(catHeading).not.toHaveClass("catMenu")
    })
    test('displays initial searchable categories', async () => {
        expect(await screen.findByText('askreddit')).toBeInTheDocument();
    })

});


    // implement test to check that clicking categories button opens the categories pane

