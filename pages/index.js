import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className={styles.center}>
        <h1 className={inter.className}>Welcome to Website</h1>
        <h1 className={`${styles.thirteen} ${inter.className}`}>X</h1>
      </div>

      <div className={styles.grid}>
        <button
          className={styles.card}
          onClick={() => router.push('/api/auth/signin')}
        >
          <h2 className={inter.className}>
            Log In <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See exciting posts, authors, and more!
          </p>
        </button>
      </div>
    </>
  )
}
