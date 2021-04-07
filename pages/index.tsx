import Head from 'next/head'
import Button from '../styles/Button'
import BasicInfo from '../components/Home/BasicInfo'
import Client from '../components/Home/Client'
import Worker from '../components/Home/Worker'

export default function Home() {
  return (
    < >
      <BasicInfo />
      <Client />
      <Worker />
    </>
  )
}
