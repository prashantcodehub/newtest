import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Components/Pages/Dashboard';
import Compare from "./Components/Pages/CompareCoins/Compare";
import WishList from "./Components/Pages/WishList/WishList";
import CoinPage from "./Components/Pages/CoinPage/CoinPage";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

        <Route path="" element={<Dashboard />}>
          <Route path="CoinPage" element={<CoinPage />} />
        </Route>

        <Route path="Compare/" element={<Compare />}>
          <Route path="CoinPage" element={<CoinPage />} />
        </Route>

        <Route path="WishList/" element={<WishList />} >
          <Route path="CoinPage" element={<CoinPage />} />
        </Route>

      </Route>
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
