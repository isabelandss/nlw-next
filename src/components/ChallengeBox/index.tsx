import { useContext } from 'react'
import { ChallengesContext, CountdownContext } from '../../contexts'
import styles from './index.module.scss'

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengesSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge
        ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
                onClick={handleChallengeFailed}>
                Falhei
              </button>

              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengesSucceeded}>
                Completei
              </button>
            </footer>
          </div>
        )
        : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="levelup"/>
              Avance de level completando desafios
            </p>
          </div>
        )}
    </div>
  )
}