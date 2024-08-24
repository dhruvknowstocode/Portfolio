import styles from './ExperienceStyles.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className={styles.sectionTitle}>Experience</h1>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceItem}>
          <h2 className={styles.jobTitle}>Fullstack Developer (Intern)</h2>
          <h3 className={styles.companyName}>Modelens</h3>
          <p className={styles.jobDates}>June 2024 - August 2024</p> {/* Add dates here */}
          <p className={styles.jobDescription}>
            Worked as a Fullstack Intern at Modelens, where I contributed to both frontend and backend development. 
            Involved in developing and maintaining web applications, integrating APIs, and enhancing user interfaces.
          </p>
          <a href="https://modelens-hub.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.link}>Website's Link</a>
        </div>
        <div className={styles.experienceItem}>
          <h2 className={styles.jobTitle}>C++ Developer (Intern)</h2>
          <h3 className={styles.companyName}>Codesoft</h3>
          <p className={styles.jobDates}>August 2023 - September 2023</p> {/* Add dates here */}
          <p className={styles.jobDescription}>
            Assisted in developing software solutions in C++, focusing on data structures and algorithms.
            Worked on various projects and gained experience in software development best practices.
          </p>
          <a href="https://github.com/dhruvknowstocode/CODSOFT" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub Repository</a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
