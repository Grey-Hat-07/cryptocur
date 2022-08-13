//import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '323c7e8ec9msh65adfc7e90148c8p11cce2jsn2fbbd6e8d26e',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://coinranking1.p.rapidapi.com/coins', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '323c7e8ec9msh65adfc7e90148c8p11cce2jsn2fbbd6e8d26e'
      }
    })
      .then(response => response.json())
      .then(data => setData(data.data.coins))
      .catch(err => console.log(err));
  },[]);
  console.log(data)
  
  
   
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Card/>
    {data&&data.map(item => (
      <div className='flex' key={item.uuid}>
        <h1>{item.name}</h1>
        <p>{item.symbol}</p>
        <img src={item.iconUrl} className='w-10 h-10'/>
        </div>))
}
     
    </div>
  )
}

export default Home
