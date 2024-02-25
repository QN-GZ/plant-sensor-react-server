import logo from './logo.svg';
import './App.css';
import AppBody from './app-body.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='App-banner'>
          <img src={logo} className="App-logo" alt="logo" />
          Dashboard
        </p>
      </header>
      <AppBody />
    </div>
  );
}

export default App;
