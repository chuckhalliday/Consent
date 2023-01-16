import styles from './Post.module.scss'

const Post = ({ content, clear }) => {
    return (
        <>
            <p className={styles.permissionsText}>
              { content }
            </p>
            <p className={styles.permissionsDelete}>
              { clear }
            </p>
        </>
    )
}

export default Post;