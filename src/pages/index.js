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
          My Desires
        </h1>
        <form className={styles.permissionForm}>
          <label>Username / Phone Number / Email</label>
          <label htmlFor="any">Any:</label>
          <input type="radio" id="any" name="user"/>
          <label htmlFor="any">Any Except:</label>
          <input type="radio" id="except" name="user"/>
          <label htmlFor="any">Only:</label>
          <input type="radio" id="only" name="user"/>
          <textarea className={styles.formContent}></textarea>
          <label>Category</label>
          <input list="category" className={styles.formContent}/>
          <datalist id="category">
            <option value="Activity"/>
            <option value="Food"/>
            <option value="Business"/>
            <option value="Dating"/>
          </datalist>
          <label>Desire</label>
          <textarea className={styles.formContent}></textarea>
          <label>Date</label>
          <label htmlFor="any">Any:</label>
          <input type="radio" id="any" name="date"/>
          <label htmlFor="any">Any Except:</label>
          <input type="radio" id="except" name="date"/>
          <label htmlFor="any">Only:</label>
          <input type="radio" id="only" name="date"/>
          <input className={styles.formContent} type="date" />
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
