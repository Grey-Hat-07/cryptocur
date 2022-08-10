import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';


const Home: NextPage = () => {
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

  },[]);
  
  
   
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
    </div>
  )
}

export default Home
