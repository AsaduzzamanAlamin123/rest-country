import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = ({country}) => {
    // console.log(country);
    const { flags ,ccn3 ,name } =country;
    return (
        <div className='mt-3'>
            
           <div className='img-div'>
           <Link to={`/country/${ccn3}`}>
            <img title={name.common} className='img-style' src={flags.png} alt="" />
            </Link>
           </div>
           

        </div>
    );
};

export default Country;