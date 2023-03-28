import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './HomePage'
import PeoplePage from './people';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PeoplePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
