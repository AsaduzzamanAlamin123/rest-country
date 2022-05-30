import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = ({country}) => {
    // console.log(country);
    const { flags ,ccn3 } =country;
    return (
        <div>
            
           <div className='img-div'>
           <Link to={`/country/${ccn3}`}>
            <img className='img-style' src={flags.png} alt="" />
            </Link>
           </div>
           

        </div>
    );
};

export default Country;