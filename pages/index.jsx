//import type { NextPage } from 'next'
import TypewriterComponent from 'typewriter-effect';
import { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline'
const Home = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const inputEl = useRef('');
  const searchHandler = (searchterm) => {
    setSearch(searchterm);
    if (searchterm !== "") {
      const newlist = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchterm.toLowerCase());
      });
      setSearchResult(newlist);
    }
    else {
      setSearchResult(data);
    }
  }
  const getSearchTerm = () => {
    searchHandler(inputEl.current.value);
  }






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
  // console.log(data)




  return (
    <div className="">
      {/* <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js" async></script> */}
      {/* <script src="/js/chart.js" async></script> */}
      
      {/* search */}
      <div className="flex justify-center static  mb-0 bg-gradient-to-r from-cyan-500 to-blue-500 " >
      <div className='justify-center absolute bottom-50 left-45 text-violet-900  mt-10 text-2xl font-semibold'>
        <TypewriterComponent

          onInit={(typewriter) => {

            typewriter

              .typeString("Welcome To the World of Crypto")

              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcomes To CryptoCur")
              .start();
          }}
        />
      </div>
        <div className="sm:w-1/2 w-3/4 flex mt-20 sm:mt-28 mb-8 bg-slate-100 rounded-lg">
          <SearchIcon className=' ml-2 w-7 h-7 mt-1' />
          <input type="text" className="w-full bg-transparent outline-none p-2 "
            placeholder="Search" value={search} onChange={getSearchTerm} ref={inputEl} />
        </div>
      </div>
      {/* search */}
      <div className=''>
        <div className='mt-0 m-3 grid md:grid-cols-4 grid-cols-2 '>
          {search.length < 1 ?
            data.map((item, index) => {
              return < Card data={item} key={index} />
            }) :
            searchResult.length > 0 ?
              searchResult.map((item, index) => {
                return < Card data={item} key={index} />
              }) :
              <h1>No Result Found</h1>}</div>
      </div>
    </div>
  )
}


export default Home
