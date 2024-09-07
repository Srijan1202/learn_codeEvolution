import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welome';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <Hello/>
       <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
