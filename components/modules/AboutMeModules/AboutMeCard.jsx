import styles from "./AboutMeCard.module.css"
import about_me from "@/utils/constant/aboutMeData";


function AboutMeCard({data}) {
      const { title, inner_title, list_items, description } = data

      return (
            <div className={styles.card}>
                  <div className={styles.imgBx} style={{ '--img': `url('/Image01.jpg')` }}></div>
                  <div className={styles.content}>
                        <h3>{title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium ex eos?</p>
                  </div>
            </div>
      );
};

export default AboutMeCard