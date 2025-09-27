import type { Metadata } from "next";
import Image from 'next/image';
import avatar from '../../public/img/avatar.png'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Aloha!',
  description: 'Welcome to my personal website',
}

export default function Page() {
  const yearsExperience = 6;

  return (
    <section>
      <div className={styles.heroCard}>
        <h1>
          <strong>
            Aloha! <span className={styles.waveAnimation}> 👋 </span><br />
            I’m Anatolii,<br />
            the software developer.
          </strong>
        </h1>
        <Image
          src={avatar}
          width={250}
          height={250}
          alt={''}
        />
      </div>

      <p className={styles.heroDescription}>
        👨‍💻 I have been working in web development for over {yearsExperience}+ years and have extensive experience using technologies such as React, Redux, TypeScript, and many others web technologies.
      </p>
      <p className={styles.heroDescription}>
        🚀 I am constantly engaged in self-improvement because I believe that learning is the key to success in the field of programming. I always stay up to date with new products and trends in the industry to keep up with the latest technologies and approaches.
      </p>
    </section>
  );
}
