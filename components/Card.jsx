import React from 'react'

export default function Card(props) {
  const {data}=props;
  return (
    <div className='m-2 p-3 max-w-sm border-4 
    rounded-md hover:scale-105 transition-all duration-300 ease-out hover:bg-gray-100 shadow-sm hover:shadow-black overflow-hidden '>
      <h1>{data.name}</h1>
      <p>price: ${data.price}</p>
      <p>{data.symbol}</p>
      <img src={data.iconUrl} alt={data.name} width='12' height='12'/>
    </div>
  )
}
