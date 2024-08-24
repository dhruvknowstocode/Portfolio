import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="MongoAtlas" />
        <SkillList src={checkMarkIcon} skill="EJS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Data Structures" />
        <SkillList src={checkMarkIcon} skill="Algorithms" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="REST API" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="MERN Stack" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="CI/CD" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
        <SkillList src={checkMarkIcon} skill="Debugging" />
      </div>
    </section>
  );
}

export default Skills;
