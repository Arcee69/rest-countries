import React from 'react';

const Select = ({ values, onValueChange,  selectedValue, placeholder, ...rest}) => {

  return (
    <select
        // defaultValue={}
        // onChange={({ target: {value }}) => onValueChange(value)}  
        {...rest}  
        className="sm:w-50 xs:w-30 p-2 "
        placeholder={placeholder}
        style={{ border: "1px solid black"}}
    >
      {values.map((value, text) => (
        <option key={value.value} value={value.value} className="text-black w-3/5">{value.label}</option>
        
      ))}
    </select>
  )
}

export default Select;
