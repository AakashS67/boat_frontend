import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import AllRoute from './components/AllRoute';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from './components/Banner';
import Earphone from './components/Earphone';

function App() {
  return (
    <div className='App'>
      <BrowserRouter> 
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categories/earphone" element = {<Earphone />}/>
        </Routes>
      </BrowserRouter>
      {/* <AllRoute /> */}
    </div>
  );
}

export default App;
