import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Authors() {
  return (
    <>
      <div className={styles.center}>
        <h1 className={inter.className}>Authors</h1>
        <h1 className={`${styles.thirteen} ${inter.className}`}>X</h1>
      </div>
      <div className={styles.grid}>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Daniel Padilla <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Sold over 100k copies of his first book.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Janine Sharlene <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Award winning author from the Philippines.
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            David Goliath<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Known for action, and adventure books who wrote Da Binci Code.
          </p>
        </a>

        <button className={styles.card}>
          <h2 className={inter.className}>
            Sign Out <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Tip of the Day: Start your day the night before.
          </p>
        </button>
      </div>
    </>
  )
}
