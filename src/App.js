import './App.css';
import MainContainer from './components/main/MainContainer/MainContainer.js';
import Header from './components/header/Header/Header.js';

function App() {
  return (
    <div className="App" data-testid="app">
      <header className="App-header">
        <Header data-testid="header" />
      </header>
      <main>
      <MainContainer data-testid="main-container" />
      </main>
    </div>
  );
}

export default App;
