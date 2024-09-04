import React from 'react';
import styles from './AboutStyles.module.css'; // Assuming you have a CSS module for styling

function AboutMe() {
  return (
    <section className={styles.aboutMe} id="about">
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p>
        Hi, I'm <strong>Dhruv Jain</strong>, a passionate and driven full-stack developer with a knack for crafting 
        <strong>robust, scalable, and efficient solutions</strong> across the entire tech stack. I specialize in both backend 
        and frontend technologies, including <strong>Node.js, Express.js, MongoDB, SQL, React, Tailwind CSS, HTML,</strong> and 
        <strong>JavaScript</strong>. Whether it's building dynamic user interfaces with React and Tailwind or developing powerful 
        server-side applications, I'm constantly exploring new technologies to stay ahead in the ever-evolving tech landscape.
      </p>
      <p>
        I completed my studies at <strong>USICT</strong> and have gained valuable experience through internships, including a recent role 
        as a <strong>full-stack developer at Modelens</strong>, where I played a key role in developing their platform from the ground up. 
        My journey in tech has been fueled by a deep curiosity and a desire to solve complex problems.
      </p>
      <p>
        I have a strong foundation in <strong>Data Structures and Algorithms (DSA)</strong>, having solved over 
        <strong>800 problems across various platforms</strong>. This experience has honed my problem-solving skills, enabling me 
        to tackle complex coding challenges with confidence.
      </p>
      <p>
        Beyond coding, I have a strong interest in design, which allows me to bring a unique perspective to my development work, 
        ensuring that my solutions are not only functional but also <strong>user-friendly</strong>. When I'm not coding, you can find me 
        exploring the latest trends in technology, working on personal projects, or helping out in the tech community.
      </p>
      <p>
        I'm always eager to take on new challenges and am currently looking for opportunities to contribute to 
        <strong>innovative projects</strong> and grow my skills further.
      </p>
    </section>
  );
}

export default AboutMe;
