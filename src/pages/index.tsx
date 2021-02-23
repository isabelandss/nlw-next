import { ExperienceBar, Profile } from '../components'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
