import ColorBox from './components/ColorBox'
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <ColorBox color="red"> </ColorBox>
        <ColorBox color="blue"> </ColorBox>
        <ColorBox color="yellow"> </ColorBox>
      </section>
    </div>
  );
}

export default App;
