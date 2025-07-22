import services from "@/utils/constant/MyServices";
import styles from "./MyServices.module.css"
import ServicesCard from "./ServicesCard";

function MyServices() {
      return (
            <section className={styles.services} id="services">
                  <h2 className="heading"> کارهای <span> من </span></h2>

                  <div className={styles.services_container}>
                        {services.map((service) => (
                              <ServicesCard key={service.id} service={service} />
                        ))}         
                  </div>
            </section>
      );
}

export default MyServices