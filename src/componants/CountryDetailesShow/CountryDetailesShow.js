import React from 'react';
import { Card } from 'react-bootstrap';
import './CountryDetailesShow.css';

const CountryDetailesShow = ({usd}) => {
    console.log(usd);
    const {flags ,name ,languages  ,area ,region,timezones ,startOfWeek} = usd;

    return (
        <div className='mt-5'>
            
            <Card className='container w-50 full-cadr '>
    <Card.Img className='mt-2 rounded' variant="top" src={flags.svg} />

    <Card.Body>
    <Card.Title className='title'>{name.official}</Card.Title>
    <Card.Text className='text'>language:{languages.eng}</Card.Text>
    <Card.Text className='text'>population:{area}</Card.Text>
    <Card.Text className='text'>Region:{region}</Card.Text>
    <Card.Text className='text'>Timezone:{timezones[0]}</Card.Text>
    <Card.Text className='text'>Start of week:{startOfWeek}</Card.Text>
    
    </Card.Body>
  </Card>
        </div>
    );
};

export default CountryDetailesShow;