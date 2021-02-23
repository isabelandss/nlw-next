import styles from './index.module.scss'

export const ExperienceBar = () => {
  return (
    <header className={styles.expBar}>
      <span>0 xp</span>
      <div className={styles.expBar__bar}>
        <div className={styles.expBar__bar__progress} style={{ width: '50%' }} />
        <span className={styles.expBar__bar__current} style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
