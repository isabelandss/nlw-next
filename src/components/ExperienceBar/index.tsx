// import styles from './index.module.scss'

export const ExperienceBar = () => {
  return (
    <header className="exp-bar">
      <span>0 xp</span>
      <div className="exp-bar__bar">
        <div className="exp-bar__bar__progress" style={{ width: '50%' }} />
        <span className="exp-bar__bar__current" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
