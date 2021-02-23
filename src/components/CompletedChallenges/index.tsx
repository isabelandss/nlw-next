import styles from './index.module.scss'

export const CompletedChallenges = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>0</span>
    </div>
  )
}