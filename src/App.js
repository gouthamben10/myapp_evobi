import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './componets/MainComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <MainComponent/>
    </div>

  </BrowserRouter>
  );
}

export default App;
