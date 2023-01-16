import { BsTrash } from 'react-icons/bs'

import styles from './Post.module.scss'

const Post = ({ content }) => {
    return (
        <>
            <p className={styles.permissionsText}>
              { content }
            </p>
            <p className={styles.permissionsDelete}>
              <BsTrash />
            </p>
        </>
    )
}

export default Post;