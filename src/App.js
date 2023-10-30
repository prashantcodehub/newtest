import "./App.css";
import Navbar from "./Components/CommonComponents/NavBar/Navbar";
import Cards from "./Components/Cards/Cards";
import Cardorlist from "./Components/ViewTypeSelector/Cardorlist";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cardorlist />
      <Cards />
    </div>
  );
}

export default App;
