import Image from 'next/image'
import Link from 'next/link'
import Greeting from '@components/Greeting/Greeting'
import avatar from '../../public/img/avatar.png'
import styles from './page.module.scss'

export default function Page() {
  return (
    <section className={styles.hero}>
      <Image
        src={avatar}
        width={180}
        height={180}
        alt="Anatolii Melnyk"
        className={styles.avatar}
        priority
      />
      <hgroup>
        <h1>
          <strong><Greeting />! <span className={styles.waveAnimation}>👋</span><br />I{"'"}m Anatolii</strong>
        </h1>
        <p>Software developer from Ukraine 🇺🇦</p>
      </hgroup>
      <nav>
        <Link href="/posts/hello"><code>$ whoami<span className={styles.cursor}>▌</span></code> &rarr;</Link>
      </nav>
    </section>
  );
}
