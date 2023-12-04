import React, { useEffect, useState } from 'react'
import Cardorlist from '../ViewTypeSelector/Cardorlist';
import { FetchAPIdata } from '../../Utility/FunctionComponents/FetchAPIdata';

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

    return(
        <>
            <Cardorlist data={data} />
        </>
    );
}

export default Dashboard