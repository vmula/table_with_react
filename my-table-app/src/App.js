import logo from './logo.svg';
import './App.css';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px;" height="100px" />
        <h2>My First React App</h2>
      </header>
      <Table />
    </div>
  );
}

export default App;
