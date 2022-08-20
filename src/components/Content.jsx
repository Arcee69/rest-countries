import React from 'react';
import { Link } from "react-router-dom";

const Content = ({ data, mode }) => {
  return (
     <>     
        <div className='w-full mx-10 rounded-lg overflow-x-hidden mt-5'>
            <ul className=' sm:grid sm:grid-cols-4 gap-5 mb-3' >
                {data.map((datas) => (
                    <li key={datas.id} className="xs:w-5/6 xs:mb-4 sm:mw-4/6 h-6/6 shadow-2xl rounded-lg">
                        <Link to={`/${datas.altSpellings}`} state={ datas}>
                            <img src={datas.flags.png} alt='images' className='w-full h-3/6 cursor-pointer '/>
                        </Link>
                            <div className={mode === true ? "text-white mx-4" : "text-black mx-4"}>
                                <div className='font-bold my-3'>{datas.name.common}</div>
                                <div>Population: {datas.population}</div>
                                <div>Region: {datas.region}</div>
                                <div>Capital: {datas.capital}</div>
                                <div>
                                <span className='inline-block text-sm font-semibold text-gray-700'>
                                    {datas.tags}
                                </span>
                                </div>
                            </div>                          
                    </li>
                ))}
            </ul>    
        </div>
    </> 
  )
}

export default Content

