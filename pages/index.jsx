//import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';


const Home = () => {
  
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
      <Sidebar/>
    <div className=' grid grid-cols-5'>
    {data&&data.map((item,index) => (
      <div key={index}>
     <Card data={item}/>
     </div>))
    }</div>
     <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  )
}

export default Home
