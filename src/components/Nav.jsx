import React from 'react'
import Button from './Button';

const Nav = () => {
  return (
    <>
      <nav className='mx-5 shadow flex flex-row justify-between'>
          <div className='text-white'>
              Where in the world?
          </div>
          <Button name="Dark Mode" />
      </nav>
    </>
  )
}

export default Nav;
