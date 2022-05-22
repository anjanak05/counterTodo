import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">
     <Counter initialValue={0}/>
    <br/>
    <br/>
    <Todo></Todo>
    </div>
  );
}

export default App;
