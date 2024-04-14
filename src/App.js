import './App.css';
import Navbar from "./components/Navbar"
import AllRoute from './routes/AllRoute';
import Banner from './components/Banner';
import Navigation from './customer/components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <Navbar />
      {/* <Navigation/> */}
      <AllRoute/>
      <Footer/>
      {/* <AllRoute /> */}
    </div>
  );
}

export default App;
