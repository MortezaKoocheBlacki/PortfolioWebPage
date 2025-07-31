import React from 'react'
import styles from "./AboutMe.module.css"
import about_me from '@/utils/constant/aboutMeData';
import AboutMeCard from '@/components/modules/AboutMeModules/AboutMeCard';

function AboutMe() {
      return (
            <div className={styles.container}>
                  <div className={`${styles.who_I_am} ${styles.section}`}>
                        <h3>👋 سلام! من مرتضی هستم</h3>
                        <p className={styles.description}>
                              یه برنامه‌نویس فرانت‌اند با علاقه‌ی شدید به ساخت تجربه‌های بصری منظم، سریع و تمیز. با Next.js، React، TypeScript و CSS Module کار می‌کنم و همیشه دنبال اینم که هم از نظر فنی بهتر بشم، هم از نظر انسانی بالغ‌تر.
                        </p>
                  </div>

                  <div className={`${styles.my_entery} ${styles.section}`}>
                        <h3>🧭 چطور وارد دنیای برنامه‌نویسی شدم؟</h3>
                        <p className={styles.description}>
                              از اول آدم کنجکاوی بودم؛ همیشه علاقه داشتم بدونم پشت اپلیکیشن‌ها چی می‌گذره. این کنجکاوی باعث شد وارد دنیای وب بشم و از همون اول با HTML، CSS و جاوااسکریپت مسیرم رو شروع کنم. کم‌کم با React و بعدش Next.js آشنا شدم و به‌شدت جذب ساختارمندی و قدرتشون شدم.
                        </p>
                  </div>

                  <div className={`${styles.stand_point} ${styles.section}`}>
                        <h3>🚀 الان کجای مسیرم هستم؟</h3>
                        <div className={styles.description}>
                              <span>
                                    الان دارم روی مهارت‌های فرانت‌اندم متمرکز کار می‌کنم، مخصوصاً روی پروژه‌های واقعی، ساخت پورتفولیو حرفه‌ای، و کار با ابزارهایی مثل:
                              </span>
                              <ul className={styles.list_container}>
                                    <li>React & Next.js</li>
                                    <li>CSS Module و Tailwind</li>
                                    <li>Git & GitHub</li>
                                    <li>TypeScript (در حال یادگیری عمیق‌تر)</li>
                                    <li>
                                          تجربه با UI/UX و نوشتن کد تمیز و قابل نگهداری
                                    </li>
                              </ul>
                        </div>
                  </div>

                  <div className={`${styles.my_goals} ${styles.section}`}>
                        <h3>🎯 هدف‌هام چیه؟</h3>
                        <ul className={styles.description}>
                              <li>
                                    تبدیل شدن به یک توسعه‌دهنده حرفه‌ای که نه فقط کد می‌نویسه، بلکه مسئله حل می‌کنه.
                              </li>
                              <li>
                                    کار در تیم‌هایی که روحیه یادگیری، احترام و رشد دارند.
                              </li>
                              <li>
                                    یادگیری دائم و کار روی پروژه‌هایی که تاثیر واقعی دارند.
                              </li>
                        </ul>
                  </div>

                  <div className={`${styles.my_differences} ${styles.section}`}>
                        <h3>💪 چه چیزی منو متفاوت می‌کنه؟</h3>
                        <ul className={styles.description}>
                              <li>
                                    شنونده خوبی‌ام، مخصوصاً در محیط تیمی
                              </li>
                              <li>
                                    تمرکز بالا و روحیه یادگیری دائمی دارم
                              </li>
                              <li>
                                    به جای اینکه بگم «بلد نیستم»، می‌گم «می‌تونم یاد بگیرم»
                              </li>
                              <li>
                                    به جزئیات اهمیت می‌دم، چون معتقدم تجربه کاربری توی جزئیاته
                              </li>
                        </ul>
                  </div>

                  <div className={`${styles.ideal_cooperation} ${styles.section}`}>
                        <h3>🤝 همکاری ایده‌آل برای من چطوریه؟</h3>
                        <div className={styles.description}>
                              <span>ترجیح می‌دم با تیم‌هایی کار کنم که:</span>
                              <ul className={styles.list_container}>
                                    <li>
                                          ارتباط سالم و محترمانه دارن
                                    </li>
                                    <li>
                                          مسیر مشخص دارن ولی انعطاف‌پذیرن
                                    </li>
                                    <li>
                                          یادگیری و رشد در اون‌ها تشویق می‌شه
                                    </li>
                                    <li>
                                          کار رو فقط تحویل پروژه نمی‌بینن، بلکه ساخت تجربه براشون مهمه
                                    </li>
                              </ul>
                        </div>
                  </div>

                  <div className={`${styles.hobbies} ${styles.section}`}>
                        <h3>🧠 بیرون از کدنویسی چی کار می‌کنم؟</h3>
                        <ul className={styles.description}>
                              <li>علاقه مند به بازی های ویدیویی مخصوصا شوتینگ</li>
                              <li>ورزش کردن در زمان هایی که امکانش رو داشته باشم.</li>
                              <li>دیدن سریال و فیلم های مختلف.</li>
                        </ul>
                  </div>

                  <div className={`${styles.same_path} ${styles.section}`}>
                        <h3>📞 اگر حس کردی هم‌مسیر هستیم...</h3>
                        <p className={styles.description}>
                              خوشحال می‌شم بیشتر گپ بزنیم و ببینیم چه فرصت‌هایی می‌تونیم با هم بسازیم.
                        </p>
                  </div>
                  
            </div>
      );
}

export default AboutMe