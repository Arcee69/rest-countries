import React from 'react'

const Button = ( { name, mode }) => {
  return (
    <div className={mode === true ? 'text-white cursor-pointer' : "text-black cursor-pointer"}>
      {name}
    </div>
  )
}

export default Button
