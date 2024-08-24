import React from 'react';
import styles from './AboutStyles.module.css'; // Assuming you have a CSS module for styling

function AboutMe() {
  return (
    <section className={styles.aboutMe} id="about">
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p>
        Hi, I'm Dhruv Jain, a passionate and driven backend developer with a knack for crafting robust, scalable, and efficient solutions. 
        I specialize in Node.js, Express.js, and databases like MongoDB and SQL, and I'm constantly exploring new technologies to stay ahead 
        in the ever-evolving tech landscape.
      </p>
      <p>
        I completed my studies at USICT and have gained valuable experience through internships, including a recent role as a backend developer 
        at Modelens, where I played a key role in developing their platform from the ground up. My journey in tech has been fueled by a deep 
        curiosity and a desire to solve complex problems.
      </p>
      <p>
        I have a strong foundation in Data Structures and Algorithms (DSA), having solved over 800 problems across various platforms. 
        This experience has honed my problem-solving skills, enabling me to tackle complex coding challenges with confidence.
      </p>
      <p>
        Beyond coding, I have a strong interest in design, which allows me to bring a unique perspective to my development work, ensuring that 
        my solutions are not only functional but also user-friendly. When I'm not coding, you can find me exploring the latest trends in technology, 
        working on personal projects, or helping out in the tech community.
      </p>
      <p>
        I'm always eager to take on new challenges and am currently looking for opportunities to contribute to innovative projects and grow my skills further.
      </p>
    </section>
  );
}

export default AboutMe;
