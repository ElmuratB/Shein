// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Count from './components/Navogation';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
