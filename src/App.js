import { BrowserRouter } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Snack from './Snack';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/:snack" element={<Snack />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
