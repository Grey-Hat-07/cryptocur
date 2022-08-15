import React from 'react'

export default function Card(props) {
  const {data}=props;
  return (
    <div className='m-2 p-3 text-green-600 max-w-fit  rounded-md bg-red-800'>
      {data.name}
      <p>{data.symbol}</p>
      <img src={data.iconUrl} alt={data.name} width='12' height='12'/>
    </div>
  )
}
