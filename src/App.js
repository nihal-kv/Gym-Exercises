
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';


function App() {
  return (
    <div className="app">
      {/* <Navbar/> */}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetails/>} />
      </Routes>

      
    </div>
  );
}

export default App;
