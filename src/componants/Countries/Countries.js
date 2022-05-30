import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [ countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className='mt-3'>
            <h4>Countries:{countries.length}</h4>
            <div className='country-big'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
                </div>
        </div>
    );
};

export default Countries;