import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Consent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My Permissions
        </h1>
        <form>
          <textarea className={styles.formContent}></textarea>
          <input list="category" className={styles.formContent}/>
          <datalist id="category">
            <option value="activity"/>
            <option value="business"/>
            <option value="dating"  />
          </datalist>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Consent</button>
        </form>
        <ul className={styles.permissions}>
          <li>
            <p className={styles.permissionsText}>
              This is a listed permission
            </p>
            <p className={styles.permissionsDelete}>
              Delete
            </p>
          </li>
          <li>
            <p className={styles.permissionsText}>
              This is a listed permission
            </p>
            <p className={styles.permissionsDelete}>
              Delete
            </p>
          </li>
          <li>
            <p className={styles.permissionsText}>
              This is a listed permission
            </p>
            <p className={styles.permissionsDelete}>
              Delete
            </p>
          </li>
        </ul>
      </main>
    </div>
  )
}
