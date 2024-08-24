import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitLift}
          link="https://github.com/dhruvknowstocode/fitness-freaks"
          h3="Fitness-Freaks"
          p="Fitness App"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/dhruvknowstocode/WanderLust"
          h3="WanderLust"
          p="Airbnb App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/dhruvknowstocode/GoYum"
          h3="Go-Yum"
          p="Food ordering app"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
