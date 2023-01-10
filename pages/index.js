import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Bio from "../components/Bio";

const Paragraph = {
  name: "Shreya Jha",

  bioOne:
    "Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites apps and platforms to propel competitive advantage and revenue growth.",

  bioTwo:
    "Technically proficient and analytical problem solver with calm and focused demeanor. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills excellent time management and problem-solving skills.",
};

const aboutContent = {
  title1: "High Quality",
  title2: "Best Selling",
  title3: "Creative Designs",
  para1:
    "who create visually appealing and user-friendly designs that will help your business stand out online",
  para2:
    "Find out why these products are our top sellers – get yours today!",
  para3:
    "From bold to subtle, we have a design for every style and taste ",
};

const About = (props) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 p-4">
      <h1 className="display-1">
        <i className={props.icons}></i>
      </h1>
      <b><p className="navbar-brand">{props.title}</p></b>
      <p>{props.text}</p>
    </div>
  );
};



export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Shreya Jha</title>
          <meta name="keywords" content="web development, programming" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
            crossorigin="anonymous"
          />
          
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />

          <style>
            @import
            url(https://fonts.googleapis.com/css2?family=Caveat&family=Gruppo&family=Klee+One&family=Ms+Madi&family=Rajdhani:wght@500&family=Shadows+Into+Light&display=swap);
            @import
            url(https://fonts.googleapis.com/css2?family=Jua&display=swap);
          </style>
        </Head>
      
        <Script
            src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></Script>
          
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
          ></Script>

        <div className={styles.cover}>
          <div className="container">
            <div className={styles.headerContent}>
              <div className="row">
                <div className="col-md-6 col-lg-5 col-sm-10">
                  <div className={`${styles.headerContent}`}>
                    <div className="">
                      <p className={styles.headingLabel}>Web Developer</p>
                      <h1 className="display-4">{Paragraph.name}</h1>
                      <p className="">
                        {Paragraph.bioOne}
                        <br />
                        <br />
                        {Paragraph.bioTwo}
                      </p>

                      <a
                        href="SHREYA JHA_Resume.pdf"
                        download="SHREYA JHA_Resume.pdf"
                      >
                        <button
                          className={`${styles.cvBtn} cv btn btn-primary`}
                        >
                          <i className="fa-thin fa fa-download"></i> Download CV
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7 col-sm-10 pt-4 pb-4 mt-4">
                <div className="progress-sec" style={{width: "70%", margin: "auto"}}>
                  <div className="container text-white">
                    <p className="navbar-brand">
                      <strong>Skills</strong>
                    </p><br />
                    <label className={styles.lebel}>
                      JavaScript (ReactJS, NextJS)
                    </label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>
                      HTML, SCSS, CSS (Bootstrap framework)
                    </label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>NodeJS, JSON, API</label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "69%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>Photoshop, Figma</label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <b>
                      <p className="navbar-brand">
                        <strong>Other Skill</strong>
                      </p>
                    </b>
                    <br />
                    <label className={styles.lebel}>Problem-Solving</label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>Active Listening</label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "69%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>
                      Flexible and Adaptable
                    </label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label className={styles.lebel}>
                      Excellent Communicator
                    </label>
                    <div className={`${styles.myProgress} progress`}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.about}`}>
        <div className="container">
          <div className="row">
            <About
              title={aboutContent.title1}
              text={aboutContent.para1}
              icons="fa fa-thin fa-droplet"
            />
            <About
              title={aboutContent.title2}
              text={aboutContent.para2}
              icons="fa fa-solid fa-chart-simple"
            />
            <About
              title={aboutContent.title3}
              text={aboutContent.para3}
              icons="fa-solid fa-wand-magic-sparkles"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <Bio />

      {/* Portfolio */}
      <Portfolio />
    
      {/* Contact Us */}
      <br /><br/>
      <Contact />

    </>
  );
}
