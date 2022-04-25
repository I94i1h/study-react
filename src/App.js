import logo from './logo.svg';
import './App.css';

function App() {

  const colorlist = ['red', 'blue', 'green']

  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {colorlist.map(color => (
            <li key={color} style={{ color }}> {color} </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
