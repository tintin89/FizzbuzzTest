import './App.css';
import Counter from './Counter';


function App() {


  return (
    <div className="app">
      <header>
        <h1>Counting incrementally, any number divisable by 3 is replaced by the word "fizz", and any number divisible by 5  with the word "buzz", and 
          any number divisible by 3 and 5 with the word fizzbuzz.</h1>
      </header>
    <Counter/>
    
    </div>
  );
}

export default App;
