import Head from 'next/head'

import Post from '../components/Post'
import PostForm from '../components/PostForm'

import styles from '../styles/Home.module.scss'

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
        <PostForm />
        <ul className={styles.permissions}>
          <li>
            <Post content="You can do this!" clear="Delete" />
          </li>
          <li>
            <Post
              content="This is a listed permission"
              clear="Delete"
            />
          </li>
          <li>
          <Post
              content="This is a listed permission"
              clear="Delete"
            />
          </li>
          <li>
          <Post
              content="This is a listed permission"
              clear="Delete"
            />
          </li>
        </ul>
      </main>
    </div>
  )
}
