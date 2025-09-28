import Image from 'next/image';
import avatar from '../../public/img/avatar.png'
import styles from './page.module.scss'

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

      <p>
        👨‍💻 Experienced web developer with {yearsExperience}+ years of expertise in building scalable web applications.<br/> I specialize in React, Redux, TypeScript, and modern JavaScript frameworks, delivering high-quality solutions that drive business growth.
      </p>
      <p>
        🚀 Passionate about crafting clean, maintainable code and staying at the forefront of technology.<br/> I continuously evolve my skill set to leverage the latest tools and methodologies, ensuring optimal performance and user experience in every project I deliver.
      </p>
    </section>
  );
}
