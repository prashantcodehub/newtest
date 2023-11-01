import "./App.css";
import Navbar from "./Components/CommonComponents/NavBar/Navbar";
import Cardorlist from "./Components/ViewTypeSelector/Cardorlist";
import Pagenumber from './Components/PageNumber/Pagenumber'
import {FetchAPIdata} from "./Utility/FunctionComponents/FetchAPIdata";

console.log("hello" );
// FetchAPIdata();

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Cardorlist />
      <Pagenumber/>
    </div>
  );

}

export default App;
