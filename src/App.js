import Header from './components/Header'
import './App.css';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Punklist from './components/Punklist';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
     const getMyNfts= async () => {
       const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xbc856994d0c3950794f40C03B0972b1D3b643bD5&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
      }

      return getMyNfts()
  }, [])

  return (
   <div className='app'>
     <Header />
    
     <Punklist punkListData={punkListData} /> 

   </div>
    
  );
}

export default App;
