import './App.css';
import TopJumbotron from './components/Jumbotron/TopJumbotron/TopJumbotron';
import CustomNavbar from './components/Navbar/CustomNavbar';
import CustomFooter from './components/Footer/CustomFooter'
import About from './components/Sections/About/About';
import Services from './components/Sections/Services/Services';
import Work from './components/Sections/Work/Work';
import Contact from './components/Sections/Contact/Contact';
function App() {
  return (
    <div>
      <CustomNavbar/>
      <TopJumbotron/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <CustomFooter/>
    </div>
  );
}

export default App;
