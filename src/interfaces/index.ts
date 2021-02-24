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
}

export interface ChallengesProviderProps {
  children: ReactNode
}
