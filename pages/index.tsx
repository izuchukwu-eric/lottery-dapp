import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { useContract, useAddress, useMetamask, useDisconnect, useContractWrite, useContractRead } from '@thirdweb-dev/react'
import Login from '../components/Login'

const Home: NextPage = () => {
  const address = useAddress();

  console.log(address)

  if(!address) return (<Login />)


  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery Draw</title>
      </Head>

      <Header />

    </div>
  )
}

export default Home
