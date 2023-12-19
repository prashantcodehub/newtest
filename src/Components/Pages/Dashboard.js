import React, { useEffect, useState } from 'react'
import Cardorlist from '../ViewTypeSelector/Cardorlist';
import { FetchAPIdata } from '../../Utility/FunctionComponents/FetchAPIdata';
import "../../App.css"

function Dashboard() {

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

    // console.log(search);
    return (
      <div className="App">
        <Cardorlist data={ data }  />
        {/* data.id.includes(search)  => for search result  .includes
            id: 'bitcoin-cash', symbol: 'bch', name: 'Bitcoin Cash',
        */}
      </div>
    );
}

export default Dashboard
