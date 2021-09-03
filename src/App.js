import Gallery from "./Components/Gallery";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import data from './gallery.json';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main data={ data }/>
    </div>
  );
}

export default App;
