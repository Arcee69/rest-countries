import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const SinglePage = () => {
    const [mode, setMode] = useState(false);


    const handleToggle = () => setMode(!mode); 

    const id = useLocation();
    const data  = id?.state;
    console.log(data, "Hello");

    const navigate = useNavigate()

    return (
        <div className={mode === true ? "bg-slate-700 w-full h-screen overflow-x-hidden" : "bg-white overflow-x-hidden h-screen w-full" }>
            <div className=' mx-10 h-14 flex flex-row items-center justify-between'>
                <div className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} >
                    Where in the world?
                </div>
                <button className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} onClick={handleToggle}>
                    {mode === true ? <FontAwesomeIcon icon={faMoon}/>  : <FontAwesomeIcon icon={faSun} />} 
                    {mode === true ? " Dark Mode" : " Light Mode" }
                </button>  
            </div>

            <hr />

            <div className={mode === true ? 'mx-10 mt-5 text-white' : "mx-10 mt-5 text-black" }>
                <div 
                    className={mode === true ? 'w-24 p-1 bg-gray-500 cursor-pointer mb-3 shadow-outline shadow-2xl' 
                                            : "w-24 p-1 bg-white cursor-pointer mb-3 shadow-outline shadow-2xl "}
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mx-3" />
                    <button> Back</button>
                </div>
                
                <div className='flex xs:flex-col sm:flex-row sm:justify-between w-12/12 xs:p-2 sm:p-14 items-center'>
                    <div className='xs:w-12/12 sm:w-6/12'>
                        <img src={data?.flags?.svg} alt="flag" className='w-96'/>
                    </div>
                    <div className='xs:w-12/12 xs:mt-5 sm:w-6/12 sm:mt-0 flex flex-col '>
                        <div className='text-4xl font-medium mb-2'>{data?.name?.common}</div>
                        <div className='flex xs:flex-col xs:mt-4 xs:content-between sm:flex-row sm:mt-0 sm:justify-between'>
                            <div>
                                {/* <div>Native Name: {data.name.nativeName.fra.common}</div> */}
                                <div>Population: {data?.population}</div>
                                <div>Region: {data?.region}</div>
                                <div>Sub Region: {data?.subregion}</div>
                                <div>Capital: {data?.capital[0]}</div>
                            </div>
                            <div className='xs:mt-3 sm:mt-0'>
                                <div>Top Level Domain: {data?.tld[0]}</div>
                                {/* <div>Currencies: {data.currencies}</div> */}
                                <div>Language: {data?.languages?.eng}</div>
                                <div>Land Area: {`${data?.area} sq`}</div>
                            </div>
                            
                        </div>
                        <div className='mt-5 flex xs:flex-col sm:flex-row'>
                            <div>Border Countries: </div> 
                            <ul className='flex flex-row flex-wrap'>
                                {data?.borders && data?.borders.map((border) => (
                                    <li className='w-20 text-center xs:mx-1  sm:mx-2 mb-1 border-2 shadow-outline shadow-2xl'>{border}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage