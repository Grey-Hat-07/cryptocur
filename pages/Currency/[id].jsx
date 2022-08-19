import React from 'react'
import { Chart } from "react-google-charts";
export default function Currency(props) {
  console.log(props);
  return (
    <div>
      <div className='flex'>
        <img src={props.coin.iconUrl} alt={props.coin.name} width='50' height='50' />
        <h1>{props.coin.name}</h1>
      </div>

      <div className="grid grid-cols-2 m-2">
        <div className="col-span-1">
          <Chart
            chartType="LineChart"
            data={[["Stock", "year"], ["Bitcoin", 1000], ["Ethereum", 1170], ["Litecoin", 660], ["Ripple", 1030]]}
            width="100%"
            height="400px"
            legendToggle
          />
        </div>
        <div className="col-span-1">
          <div>{props.coin.description}</div>
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '323c7e8ec9msh65adfc7e90148c8p11cce2jsn2fbbd6e8d26e'
    }
  })
  const data = await res.json()
  const coin = data.data.coin;
  return {
    props: {
      coin
    }
  }



}