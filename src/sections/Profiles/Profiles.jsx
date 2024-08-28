import React from 'react';
import styles from './ProfilesStyles.module.css';

function Profile() {
  return (
    <section id="profile" className={styles.container}>
      <h1 className={styles.sectionTitle}>My Profiles</h1>
      <div className={styles.profileContainer}>
        <div className={styles.profileItem}>
          <img src="/src/sections/Profiles/leetcode.png" alt="LeetCode" className={styles.profileImage} />
          <div className={styles.profileContent}>
            <h2 className={styles.platformName}>LeetCode</h2>
            <p className={styles.problemSolved}>Problems Solved: 370</p>
            <p className={styles.streak}>Current Streak: 115 days</p>
            <a href="https://leetcode.com/u/dhruvjain2424/" target="_blank" rel="noopener noreferrer" className={styles.link}>View Profile</a>
          </div>
        </div>
        <div className={styles.profileItem}>
          <img src="/src/sections/Profiles/gfg.png" alt="GeeksforGeeks" className={styles.profileImage} />
          <div className={styles.profileContent}>
            <h2 className={styles.platformName}>GeeksforGeeks</h2>
            <p className={styles.problemSolved}>Problems Solved: 192</p>
            <p className={styles.streak}>Current Streak: 55 days</p>
            <a href="https://www.geeksforgeeks.org/user/dhruvjarjl5/" target="_blank" rel="noopener noreferrer" className={styles.link}>View Profile</a>
          </div>
        </div>
        <div className={styles.profileItem}>
          <img src="/src/sections/Profiles/codingninja.png" alt="Coding Ninjas" className={styles.profileImage} />
          <div className={styles.profileContent}>
            <h2 className={styles.platformName}>Coding Ninjas</h2>
            <p className={styles.problemSolved}>Problems Solved: 260</p>
            <p className={styles.streak}>Current Streak: 33 days</p>
            <a href="https://www.naukri.com/code360/profile/dhruvcodes" target="_blank" rel="noopener noreferrer" className={styles.link}>View Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
