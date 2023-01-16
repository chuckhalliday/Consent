import styles from './PostForm.module.scss'

const PostForm = () => {
    return (
        <>
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
        </>
    )
}

export default PostForm;