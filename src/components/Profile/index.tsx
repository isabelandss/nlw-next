import { useContext } from 'react'
import { ChallengesContext } from '../../contexts'
import styles from './index.module.scss'

export const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/isabelandss.png" alt="avatar" />
      <div>
        <strong>Isabela Neri</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
