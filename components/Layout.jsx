import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>WebsiteX</title>
        <meta name='description' content='NextAuthDemo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
