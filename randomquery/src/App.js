import React, { useState } from 'react';
import './App.css';
import {Button, Card, CardContent, Typography} from '@material-ui/core';
import getQuotes from './getQuotes';

function App() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function handleClick () {
    getQuotes().then((data) => {
      setQuote(data[0].quote);
      setAuthor(data[0].author);
    })
  }

  return (
    <div className="app">
      <Typography variant='h2'>Random Quote Generator</Typography>
      <Card className='card'>
        <CardContent>
          <Typography variant='h5'>{quote}</Typography>
          <Typography className='margin-top' color='textSecondary'>{author}</Typography>
          <hr/>
          <Button className='margin-top' color='primary' variant='outlined' onClick={() => handleClick()}>Click for Quote</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

