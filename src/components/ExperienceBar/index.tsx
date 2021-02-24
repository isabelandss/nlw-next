import styles from './index.module.scss'
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts'

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <header className={styles.expBar}>
      <span>0 xp</span>
      <div className={styles.expBar__bar}>
        <div className={styles.expBar__bar__progress} style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.expBar__bar__current} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}
