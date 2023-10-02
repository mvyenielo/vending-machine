import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootswatch/dist/cerulean/bootstrap.min.css'
import './App.css';
import VendingMachine from './VendingMachine';
import Snack from './Snack';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:snack" element={<Snack />}></Route>
          <Route path="/" element={<VendingMachine />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
