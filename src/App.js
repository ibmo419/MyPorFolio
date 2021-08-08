import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js'
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contacts from './components/Contacts';


function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
        value:80,
        density:{
          enable:true,
          value_area:900
        }
        },
        shape:{
          type:"circle",
          stroke:{
            width:5,
            color:"#f9ab00"
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer className="footer"/>
  
    </>
  );
}

export default App;
