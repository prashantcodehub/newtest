// import "./App.css";
// // import Navbar from "./Components/CommonComponents/NavBar/Navbar";
// import Cardorlist from "./Components/ViewTypeSelector/Cardorlist";
// import React, { useEffect, useState } from "react";
// import { FetchAPIdata } from "./Utility/FunctionComponents/FetchAPIdata";
// // import { BrowserRouter, Route, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// // import WishList from "./Components/Pages/WishList/WishList";
// // import Compare from "./Components/Pages/CompareCoins/Compare";
// // import CoinPage from "./Components/Pages/CoinPage/CoinPage";


// function App() {
//   const [data, setData] = useState([]);
  
//   const getData = async () => {
//     try {
//       const coin_data = await FetchAPIdata();
//       setData(coin_data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);



//   return (
//     // <BrowserRouter>
//       <div className="App">
        
//         <Cardorlist data={data} />
//         {/* <Routes>
//           <Route
//             // exact
//             path="./Components/Pages/WishList/WishList"
//             element={<WishList />}
//           ></Route>
//           <Route
//             // exact
//             path="./Components/Pages/CompareCoins/Compare"
//             element={<Compare />}
//           ></Route>
//           <Route
//             // exact
//             path="./Components/Pages/CoinPage/CoinPage"
//             element={<CoinPage />}
//           ></Route>
//         </Routes> */}
//       </div>
//     // </BrowserRouter>
//   );
// }

// export default App;
