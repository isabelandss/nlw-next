import { ReactNode } from "react";

export interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

export interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}
export interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

export interface CountdownProviderProps {
  children: ReactNode
}

export interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

