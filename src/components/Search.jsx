import React, { useState } from 'react';
import Select from "./Select";

const Search = () => {
    const [text, setText] = useState('');

    const handleSearch = (e) => {
        setText(e.target.value);
    }

    const continent = [
        {value:'', label:'Filter by Region', disabled: true},
        {value:'africa', label:'Africa', disabled: false },
        {value:'america', label:'America', disabled: false},
        {value:'asia', label:'Asia', disabled: false},
        {value:'europe', label:'Europe', disabled: false},
        {value:'oceania', label:'Oceania', disabled: false}
    ];

  return (
    <div className=' mx-5 flex flex-row justify-between'>
        <div>
            <input type="text" placeholder='Search for a country...' onChange={handleSearch} />
        </div>
        <div>
            <Select
              values={continent}
              // placeholder="Filter by Region"
              // onChangeValue={val => console.log(val)}
            />
        </div>
    </div>
  )
}

export default Search;
