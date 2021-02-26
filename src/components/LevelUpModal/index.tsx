import { useContext } from 'react'
import { ChallengesContext } from '../../contexts'
import styles from './index.module.scss'

export const LevelUpModal = () => {
  const { level, closeLevelModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um próximo level.</p>
        <button type="button" onClick={closeLevelModal}>
          <img src="/icons/close.svg"/>
        </button>
      </div>
    </div>
  )
}