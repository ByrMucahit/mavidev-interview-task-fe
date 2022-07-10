import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout, } from 'antd';
import { DEFAULT_TEXT, DEFAULT_HEADER } from '../public/constant'
import  ParagraphComp  from '../src/components/typography/paragragh/index'
import HeaderComponent from '../src/components/typography/header/index'
import Button from '../src/components/button/index'
import React from 'react';
const {  Footer } = Layout;


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
          <Layout style={{maxWidth: 1200}}>
              <HeaderComponent content={DEFAULT_HEADER}/>
              <ParagraphComp content={DEFAULT_TEXT}/>
              <Footer style={{display:'flex', justifyContent: 'space-around'}}>
                  <Button backgroundColor={"#4A5D6D"} size={'large'}  content={'Adds'} to={'adds'}/>
                  <Button backgroundColor={"#4A5D6D"} size={'large'}  content={'Lists'} to={'lists'}/>
              </Footer>
          </Layout>
      </main>

      <footer className={styles.footer}>
       <a>Hello world Footer</a>
      </footer>
    </div>
  )
}
