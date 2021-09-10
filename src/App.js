import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import data from './gallery.json';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main data={ data }/>
      <Footer/>
    </div>
  );
}

export default App;
