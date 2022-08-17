//import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import { Chart } from "react-google-charts";

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
  }, []);
  console.log(data)



  return (
    <div className="">
      {/* <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" async></script> */}
      {/* <script src="/js/chart.js" async></script> */}
      <Head>
        <title>CryptoCur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />

      <div className=' grid md:grid-cols-5 grid-cols-2'>
        {data && data.map((item, index) => (
          <div key={index}>
            <Card data={item} />
          </div>))
        }</div>
      <Chart
        chartType="LineChart"
        data={[["Stock","year"],["Bitcoin", 1000],["Ethereum", 1170],["Litecoin", 660],["Ripple", 1030]]}
        width="100%"
        height="400px"
        legendToggle
      />

      {/* <div id="curve_chart" style={{width: '500px', height: '500px'}}></div> */}

    </div>
  )
}

export default Home
