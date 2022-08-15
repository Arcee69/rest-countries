import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Search from './components/Search';

function App() {
  const[data, setData] = useState([]);
  const[query, setQuery] = useState("");

  // const fetchApi = async () => {
  //   const url = await axios.get(`https://restcountries.com/v2/name/Nigeria`);
  //   const response = url?.data;
  //   console.log(response);
  // };

  // useEffect(() => {
  //   fetchApi();
  // },[query])

  return (
    <div className="bg-black">
      <Nav />
      <hr />
      <Search />
    </div>
  );
}

export default App;
