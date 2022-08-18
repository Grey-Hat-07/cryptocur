import React from 'react'
import Head from 'next/head'
export default function Sidebar() {
  return (
    <div classNameName=''>
      <Head>
        <title>CryptoCur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=' bg-gray-700 pt-1 pb-2 flex'>
      <img src='https://crosstower.com/wp-content/themes/crosstower/assets/dist/img/hero-logo.png'
      width='50' height='50'/>
      <h1 className='mt-2 ml-2 text-xl text-gray-300'>CryptoCur</h1>
      </nav>
    </div>
  )
}

