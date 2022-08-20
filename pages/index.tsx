/** @format */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { title } from "process";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.bgInherit}>
      <Head>
        <title>Home</title>
        <meta name='description' content='home' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentTop}></div>
          <div className={styles.artBannerOverlay}>
            <div className={styles.artBanner}>
              <div className={styles.artBannerTitle}>
                <h1>Discover my Amazing</h1>
                <h1>Art Space!</h1>
              </div>
              <div className={styles.artBannerCode}>
                <i> &lt; </i>
                <span>code</span>
                <i> &gt;</i> You can follow me! through the
                <span> FACEBOOK</span>
                <i> &lt;/ </i>
                <span>code</span>
                <i> &gt;</i>
              </div>
              {/* <span className={styles.artFollow}>
                Please follow me ! through the
              </span> */}
              <div className={styles.allBtn}>
                <div className={styles.btn}>
                  <Link href='https://www.facebook.com/NguyenIAnhIViet/'>
                    <a target='_blank'>
                      <img src='/facebook.png' alt='' />
                    </a>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href='#'>
                    <a target='_blank'>
                      <img src='/instagram.png' alt='' />
                    </a>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href='https://twitter.com/@Nguyen_Anh_Viet'>
                    <a target='_blank'>
                      <img src='/twitter.png' alt='' />
                    </a>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href='https://www.youtube.com/channel/UCoq8g6Ixfi1u1teZb81yJVg'>
                    <a target='_blank'>
                      <img src='/youtube.png' alt='' />
                    </a>
                  </Link>
                </div>
                <div className={styles.btn}>
                  <Link href='#'>
                    <a>
                      <img src='/linkedin.png' alt='' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.artBannerImg}>
              <img src='/face-2.png' alt='not img' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experienceOne}>
          <span className={styles.experienceOneNum}>2 +</span>
          <span className={styles.experienceOneTitle}>Years Experience</span>
        </div>
        <div className={styles.experienceTwo}>
          <span className={styles.experienceOneNum}>4</span>
          <span className={styles.experienceOneTitle}>Completed Projects</span>
        </div>
        <div className={styles.experienceThree}>
          <span className={styles.experienceOneNum}>2</span>
          <span className={styles.experienceOneTitle}>Happy Customers</span>
        </div>
        <div className={styles.experienceFour}>
          <span className={styles.experienceOneNum}>2</span>
          <span className={styles.experienceOneTitle}>Honors and Awards</span>
        </div>
      </div>
      <div className=''>
        <div className={styles.name}>
          My Services
          <hr className={styles.hrLight} />
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <div className={styles.serviceTitle}> Web Development </div>
            <p className={styles.serviceDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
            <div className={styles.btnOder}>ORDER NOW ➬</div>
          </div>
          <div className={styles.service}>
            <div className={styles.serviceTitle}> UI/UX Design </div>
            <p className={styles.serviceDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
            <div className={styles.btnOder}>ORDER NOW ➬</div>
          </div>
          <div className={styles.service}>
            <div className={styles.serviceTitle}> Web Development </div>
            <p className={styles.serviceDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
            <div className={styles.btnOder}>ORDER NOW ➬</div>
          </div>
          <div className={styles.service}>
            <div className={styles.serviceTitle}> Game Design </div>
            <p className={styles.serviceDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
            <div className={styles.btnOder}>ORDER NOW ➬</div>
          </div>
          <div className={styles.service}>
            <div className={styles.serviceTitle}> Advertising </div>
            <p className={styles.serviceDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur
              pariatur doloribus.
            </p>
            <div className={styles.btnOder}>ORDER NOW ➬</div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className={styles.name}>
          My Projects
          <hr className={styles.hrLight} />
        </div>
        <div className={styles.projects}></div>
      </div>
    </div>
  );
};

export default Home;
