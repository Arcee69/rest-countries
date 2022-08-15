import React from 'react';

const Select = ({ values, onValueChange,  selectedValue, placeholder, ...rest}) => {

  return (
    <select
        // defaultValue={}
        // onChange={({ target: {value }}) => onValueChange(value)}  
        {...rest}  
        className="w-50"
        placeholder={placeholder}
    >
      {values.map((value, text) => (
        <option key={value.value} value={value.value} className="text-black w-3/5">{value.label}</option>
        
      ))}
    </select>
  )
}

export default Select;
