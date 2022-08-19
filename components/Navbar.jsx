import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default function Sidebar() {
  return (
    <div className=''>
      <Head>
        <title>CryptoCur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=' bg-gray-700 pt-1 pb-2 flex'>
        <Link href='/'>
          <img src='https://crosstower.com/wp-content/themes/crosstower/assets/dist/img/hero-logo.png'
            width='50' height='50' className='hover:scale-105 transition-all ease-out duration-100' />
        </Link>
        <h1 className='mt-2 ml-2 text-xl text-gray-300'>CryptoCur</h1>

      </nav>
    </div>
  )
}

