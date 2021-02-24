import { useContext } from 'react'
import { ChallengesContext } from '../../contexts'
import styles from './index.module.scss'

export const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}