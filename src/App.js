
import './App.css';
import Hello from './components/Ternary';

import { Heading1,Heading2,Heading3 } from './components/headings/Heading';
function App() {
  return (
    <div className="App">
      <Hello />

      <Heading1 ></Heading1>
      <Heading2 ></Heading2>
      <Heading3 ></Heading3>
    </div>
  );
}

export default App;
