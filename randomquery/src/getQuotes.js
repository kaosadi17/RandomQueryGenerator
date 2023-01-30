import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
  params: { cat: 'famous', count: '10' },
  headers: {
    'X-RapidAPI-Key': 'c4c8285b0bmshd275dcf6f27e09bp143f5bjsna1bfe61a5113',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
  },
};

export default async () => {
  const { data } = await axios.request(options);
  return data;
};
