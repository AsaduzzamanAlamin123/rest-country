import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetailesShow from '../CountryDetailesShow/CountryDetailesShow';

const CountryDetailes = () => {
    const {cnndet} = useParams();
    const [userDetailes , setUserDetailes] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${cnndet}`)
        .then(res=>res.json())
        .then(data => setUserDetailes(data))
    },[])

    return (
        <div>
            
            <div>
                {
                    userDetailes.map(usd => <CountryDetailesShow usd={usd}></CountryDetailesShow>)
                }
            </div>
        </div>
    );
};

export default CountryDetailes;