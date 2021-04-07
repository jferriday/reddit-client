import './App.css';
import reddit from './utils/reddit/reddit';
import MainContainer from './components/main/MainContainer/MainContainer.js';
import Header from './components/header/Header/Header.js';
import PostPage from './components/PostPage/PostPage'
import {BrowserRouter, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <div className="App" data-testid="app">
        <header className="App-header">
          <Header data-testid="header" />
        </header>
        <main>
        <Route exact path="/" component={MainContainer} data-testid="main-container" />
        <Route path={'/viewpost'} component={PostPage} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
