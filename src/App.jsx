import React, { useEffect, useState } from 'react'
import AccountDetails from './Components/AccountDetails';
import Wishlist from "./Components/Wishlist"
import axios from 'axios';

function App ()
{
  let [ data, setData ] = useState()
  
  const getdata = async() =>
  {
    const res = await axios.get( "http://localhost:5011/" );
    console.log( res.data );
  }

  useEffect( () =>
  {
    getdata()
  },[])
  
  return (
    <>
      app
    </>
  )
}

export default App;