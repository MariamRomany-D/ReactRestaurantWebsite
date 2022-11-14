import logo from './logo.svg';
// import './App.css';
import HomePage from './HomeComponent/Home';
import NavBar from './NavComponent/nav';
// import Header from './HomeComponent/Header';
import Footer from './footerComponent/footer';


function App() {
  return (
  <div className="App">
   
   <NavBar></NavBar> 
   <HomePage></HomePage>
   <Footer></Footer>
  </div>      
  );
}

export default App;
