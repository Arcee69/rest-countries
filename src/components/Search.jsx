import React, { useState } from 'react';
import Select from "./Select";

const Search = ( { handleSearch, findRegion }) => {

  const continent = [
    {value:'', label:'Filter by Region', disabled: true},
    {value:'africa', label:'Africa', },
    {value:'america', label:'America', disabled: false},
    {value:'asia', label:'Asia', disabled: false},
    {value:'europe', label:'Europe', disabled: false},
    {value:'oceania', label:'Oceania', disabled: false}
];

  return (
    <div className=' mt-5 xs:mx-5 sm:mx-10  flex flex-row justify-between'>
        <div className='' onClick={handleSearch}>
            <input 
              type="text" 
              placeholder='Search for a country...' 
              className='p-1.5 xs:w-40 sm:w-96  text-black' 
              style={{ border: "1px solid black"}}
            />
        </div>
        <div>
            <Select
              values={continent}
              onChange={(e)=> findRegion(e)}
              // placeholder="Filter by Region"
              // onChangeValue={val => console.log(val)}
            />
        </div>
    </div>
  )
}

export default Search;
