import styles from './index.module.scss'

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/isabelandss.png" alt="avatar" />
      <div>
        <strong>Isabela Neri</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
