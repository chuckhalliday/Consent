import Head from 'next/head'

import { useAuth } from '../hooks/useAuth'

import Post from '../components/Post'
import PostForm from '../components/PostForm'
import Bio from '../components/Bio'

import styles from '../styles/Home.module.scss'

export default function Home() {

  const { user, logIn, logOut } = useAuth()

  console.log('user', user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Consent</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { !user && (
        <p>
          <button onClick={logIn}>Log In</button>
        </p>
      )}

      { user && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

      { user && (
      <main className={styles.main}>
        <Bio 
          headshot="https://drive.google.com/uc?export=view&id=1DSMBQ3TAKxOXG966zyeGrJaBye-A_qaQ"
          name="Charles Clark"
          username="@chuckhalliday"
        />
        <h1 className={styles.title}>
          Update Desires
        </h1>
        <PostForm />
        <h1 className={styles.title}>
          Your Permissions
        </h1>
        <ul className={styles.permissions}>
          <li>
            <Post content="9074288072 & 4064045066 can jam any day but Saturday" />
          </li>
          <li>
            <Post content="2035452457 can get dinner on Saturday" />
          </li>
          <li>
            <Post content="Anyone except 9712215879 can have a hug any day" />
          </li>
        </ul>
      </main>
      )}
    </div>
  )
}
