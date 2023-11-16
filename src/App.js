import "./App.css";
import Navbar from "./Components/CommonComponents/NavBar/Navbar";
import Cardorlist from "./Components/ViewTypeSelector/Cardorlist";
import Pagenumber from "./Components/PageNumber/Pagenumber";
import React, { useEffect, useState } from "react";
import { FetchAPIdata } from "./Utility/FunctionComponents/FetchAPIdata";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const coin_data = await FetchAPIdata();
      setData(coin_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Cardorlist data={data} />
      <Pagenumber />
    </div>
  );
}

export default App;
