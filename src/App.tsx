import './App.css';
import { ApiData } from './components/apiData';
import { Chart } from './components/chart';

function App() {

  return (
    <div className="App">
      <div style={{height: "70px", backgroundColor:"#7b90ee"}}><h1>Test test</h1></div>
      <header className='App-header'>
        <Chart></Chart>
        <ApiData></ApiData>
      </header>
    </div>
  );
}

export default App;
