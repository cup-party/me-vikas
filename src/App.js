import './App.css';
import TopJumbotron from './components/Jumbotron/TopJumbotron/TopJumbotron';
import CustomNavbar from './components/Navbar/CustomNavbar';
import CustomFooter from './components/Footer/CustomFooter'
function App() {
  return (
    <div>
      <CustomNavbar/>
      <TopJumbotron/>
      
      <CustomFooter/>
    </div>
  );
}

export default App;
