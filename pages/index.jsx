//import type { NextPage } from 'next'

import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline'
const Home = () => {
  const [search, setSearch] = useState('');
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

      {/* search */}
      <div className="flex justify-center mt-4 mb-3">
        <div className="sm:w-1/2 w-2/3 flex bg-slate-100 rounded-lg">
          <SearchIcon className=' ml-2 w-7 h-7 mt-1' />
          <input type="text" className="w-full bg-transparent outline-none p-2 "
           placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>
      </div>
      {/* search */}
      <div className=' grid md:grid-cols-5 grid-cols-2'>
        {data && data.map((item, index) => (
          <div key={index}>
            <Card data={item} />
          </div>))
        }</div>
    </div>
  )
}

export default Home
