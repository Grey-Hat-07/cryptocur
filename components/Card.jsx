import React from 'react'
import Link from 'next/link';
export default function Card(props) {
  const {data}=props;
  return (
    <Link href={`/Currency/${data.uuid}`}>
    <div className='m-2 p-3 max-w-sm border-2 focus:scale-105
    rounded-md hover:scale-105 transition-all duration-300 ease-out hover:bg-gray-100 shadow-sm hover:shadow-black overflow-hidden '>
      <h1>{data.name}</h1>
      <p>price: ${data.price}</p>
      <p>{data.symbol}</p>
      <img src={data.iconUrl} alt={data.name} width='12' height='12'/>
    </div>
    </Link>
  )
}
