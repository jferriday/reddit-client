# Reddit Mini
This project was created alongside the Codecademy Full Stack Engineer course. It's a lightweight browser for Reddit, where users can use a search term to find posts, or look at specific subreddits. 

## What is it built with?
**Reddit Mini** is built with **React** and **Redux**. The project was built from scratch using create-react-app. Styling is done using regular **CSS**.

The application uses the Reddit JSON API to query using search terms and to fetch data from Reddit.

State management uses **Redux**. Although the application is simple, it is an exercise in using these libraries. I used **Redux Toolkit** to write store, reducers using mutating logic (thanks, **Immer**!) and to generate action creators. 

**React Router** is used to handle the two pages of the application and links between them.

## How was testing used?

Initial stages of the project used **Test Driven Development** methodology. Unit tests using **Jest** were used to ensure the state management was set up correctly in Redux. Some tests use **React Testing Library** alongside Jest.

## How is it hosted?
The project is hosted via Netlify.


## What next for the project?
The project doesn't have full test coverage. It'd be nice to add this. It could do with proper mocking in Jest for API requests and some end-to-end testing writing for it.

I'd like to expand the use of React Testing Library for the project in the future. 
