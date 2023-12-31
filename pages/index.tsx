import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import * as commonStyle from '../styles/commonStyle';
import HomeImage from '../assets/home/home-display.jpg';
import Header from '@/component/Header';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();

  return (
    <>
      <Head>
        <title> Virtual List </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='image/jpg' href="/favicon.jpg" />
      </Head>

      <Header />
      {
        status === 'authenticated' ?
        <main className={`${styles.main}`}>
          <commonStyle.ContentContainer>
            <commonStyle.Title>
              Some random things are here
            </commonStyle.Title>
            <commonStyle.Body>
              Hey <b style={{textTransform: 'uppercase'}}> { data.user && data.user.name } </b>, lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor.
            </commonStyle.Body>
            <Image src={HomeImage} alt='' style={{ height: 500, width: 500, borderRadius: 20, margin: 25 }}/>
          </commonStyle.ContentContainer>
        </main>
        :
        <commonStyle.ColumnDiv>
          <commonStyle.Title> Click SIGN IN button to proceed ... </commonStyle.Title>
        </commonStyle.ColumnDiv>
      }
    </>
  )
}