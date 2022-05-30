import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country'
import './Home.css'

const Home = () => {
    const [ countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    if(countries.length){
        countries.length = 20;
    }
    return (
        <div>
            <div>

            </div>
            <h2>My Country{countries.length}</h2>
            <div className='country-big'>
                {
                    countries.map(country => <Country country={country}></Country>)
                   
                }

                
            </div>
            <Link className='text-succes text-decoration-none font-see' to='/countries'>See More...</Link>
            
            
        </div>
    );
};

export default Home;