import React from 'react'
import styles from "./ContactMe.module.css"

function ContactMe() {
      return (
            <section className={styles.contact} id="contact">
                  <h2 className="heading">
                        ارتباط <span> با من ! </span>
                  </h2>
                  <form action="#">
                        <div className={styles.input_box}>
                              <input type="text" placeholder="نام و نام خانوادگی" required />
                              <input type="email" placeholder="ایمیل" />
                        </div>

                        <div className={styles.input_box}>
                              <input type="number" placeholder="شماره همراه" required />
                              <input type="text" placeholder="عنوان پیام" />
                        </div>

                        <textarea placeholder="متن پیام خود را وارد کنید"></textarea>
                        <input type="submit" value="ارسال پیام" className={`btn ${styles.button}`} />
                  </form>
            </section>
      );
}

export default ContactMe