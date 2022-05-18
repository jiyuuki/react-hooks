
import './App.css';
import Header from './components/Header/Header';
import Board from './pages/Board/Board';
import Backlog from './pages/Backlog/Backlog';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;