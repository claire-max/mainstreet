// import './App.css';
// import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Menu from '../components/Menu';
// import Contact from '../pages/Contact';


const Home = () => {
    return (
        <div>
       
        <Menu/>
        <Header/>
        <About/>
        {/* <Contact/> */}
       <Footer/>
      </div>
    );
};

export default Home;
