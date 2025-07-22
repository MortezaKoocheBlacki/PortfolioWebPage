import styles from './ServicesCard.module.css'

function ServicesCard({ service }) {
      const { service_name, service_description, service_icon, service_link } = service;
      return (
            <div className={styles.services_box}>
                  <span className={styles.icon}>
                        {service_icon}
                  </span>
                  <h3> {service_name} </h3>
                  <p> {service_description}  </p>
                  <a href={service_link} className="btn"> مطالعه بیشتر </a>
            </div>
      );
}

export default ServicesCard