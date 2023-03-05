import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
  return (
    <>
      <div className={styles.center}>
        <h1 className={inter.className}>Posts</h1>
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
            Transpo Strike <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            LTFRB orders jeepneys to join cooperatives.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Golden Onion <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Onions are now a luxury item in the Philippines.
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            Green Travel<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Book, and enjoy an eco-friendly flight!
          </p>
        </a>

        <button className={styles.card}>
          <h2 className={inter.className}>
            Sign Out <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Tip of the Day: Tame your brain by adopting mindfulness.
          </p>
        </button>
      </div>
    </>
  )
}
