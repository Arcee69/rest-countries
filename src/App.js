import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import Search from './components/Search';
import Content from './components/Content';

function App() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState(false);
  const [text, setText] = useState('');
  const [region, setRegion] = useState();

  const handleToggle = () => setMode(!mode);

  const handleSearch = (e) => {
      setText(e.target.value);
  };

  const handleChange = (e) => {
    setText(e.target.value);
};

  const findRegion = (e) => {
    setRegion(e.target.value)
  };

  const fetchApiByName = async () => {
    const url = await axios.get(`https://restcountries.com/v3.1/name/${text}`);
    const response = url?.data;
    setData(response)
  };

  const fetchApiByRegion = async () => {
    const url = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    const response = url?.data;
    setData(response)
  };

  useEffect(() => {
    fetchApiByRegion();
  }, [region])

  useEffect(() => {
    fetchApiByName();
  }, [text])

  return (
    <div className={mode === true ? "bg-slate-700 w-full h-screen overflow-y-auto overflow-x-hidden" : "bg-white overflow-x-hidden h-screen w-full" }>
      <div className=' xs:mx-5 sm:mx-10 h-14 flex flex-row items-center justify-between'>
          <div className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} >
              Where in the world?
          </div>
          <button className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} onClick={handleToggle}>
            {mode === true ? <FontAwesomeIcon icon={faMoon}/>  : <FontAwesomeIcon icon={faSun} />} 
            {mode === true ? " Dark Mode" : " Light Mode" }
          </button>  
      </div>

      <hr />

      <Search handleSearch={handleSearch} findRegion={findRegion} handleChange={handleChange} />
      <Content data={data} mode={mode} />
      
    </div>
  );
}

export default App;
