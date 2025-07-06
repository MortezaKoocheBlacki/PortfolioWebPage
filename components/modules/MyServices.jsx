import { FaCode, FaPalette } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import styles from "./MyServices.module.css"

function MyServices() {
      return (
            <section className={styles.services} id="services">
                  <h2 className="heading"> Our <span> Services </span></h2>

                  <div className={styles.services_container}>
                        <div className={styles.services_box}>
                              <FaCode className={styles.icon} />
                              <h3> Web Development </h3>
                              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit facilis odit quidem voluptatum, natus atque at accusantium facere esse? </p>
                              <a href="#" className="btn"> Read More </a>
                        </div>
                        <div className={styles.services_box}>
                              <FaPalette className={styles.icon} />
                              <h3> Web Development </h3>
                              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit facilis odit quidem voluptatum, natus atque at accusantium facere esse? </p>
                              <a href="#" className="btn"> Read More </a>
                        </div>
                        <div className={styles.services_box}>
                              <FaChartColumn className={styles.icon} />
                              <h3> Web Development </h3>
                              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit facilis odit quidem voluptatum, natus atque at accusantium facere esse? </p>
                              <a href="#" className="btn"> Read More </a>
                        </div>
                  </div>
            </section>
      );
}

export default MyServices