import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Menu from '../components/Menu';
import Jumbotron from "../components/Jumbotron"
import Contacthome from '../components/Contacthome';


const Home = () => {
    return (
        <div>
        <Menu/>
        <Header/>
        <About/>      
        <Jumbotron/>
        <Contacthome/>
       <Footer/>
      </div>
    );
};

export default Home;
