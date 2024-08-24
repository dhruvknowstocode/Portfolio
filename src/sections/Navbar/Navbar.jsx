import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="#hero" className={styles.link}>Home</a></li>
          <li><a href="#about" className={styles.link}>About Me</a></li>
          <li><a href="#projects" className={styles.link}>Projects</a></li>
          <li><a href="#experience" className={styles.link}>Experience</a></li>
          <li><a href="#skills" className={styles.link}>Skills</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
