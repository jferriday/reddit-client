import './App.css';
import reddit from './utils/reddit/reddit';
import MainContainer from './components/main/MainContainer/MainContainer.js';
import Header from './components/header/Header/Header.js';
import PostPage from './components/PostPage/PostPage'

function App() {
  return (
    <div className="App" data-testid="app">
      <button onClick={() => {reddit.searchPosts("dogs")}} >Search for dogs</button>
      <header className="App-header">
        <Header data-testid="header" />
      </header>
      <main>
      <MainContainer data-testid="main-container" />
      </main>
      <PostPage />
    </div>
  );
}

export default App;
