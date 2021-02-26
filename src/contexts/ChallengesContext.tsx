import { createContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'

import { ChallengesContextData, ChallengesProviderProps } from '../interfaces'

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = ({ children, ...props }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(props.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(props.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', `${level}`)
    Cookies.set('currentExperience', `${currentExperience}`)
    Cookies.set('challengesCompleted', `${challengesCompleted}`)
  }, [level, currentExperience, challengesCompleted])

  const levelUp = () => {
    setLevel(level + 1)
  }
  
  const startNewChallenge = () => {
     const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
     const challenge = challenges[randomChallengeIndex]
     setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio! 🎉', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  const completeChallenge = () => {
    if(!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}
