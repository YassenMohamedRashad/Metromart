import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App ()
{
  const [ data, setData ] = useState( [] );
  const getData = async() =>
  {
    const res = await axios.get( "http://localhost:5011" )
    console.log( res.data );
  }
  
  useEffect( () =>
  {
    getData()
  },[])


  return (
    <>
      New App
    </>
  )
}

export default App;