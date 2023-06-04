import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Script from "next/script";

const Paragraph = {
  name: "Shreya Jha",

  bioOne:
    "Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites apps and platforms to propel competitive advantage and revenue growth.",

  bioTwo:
    "Technically proficient and analytical problem solver with calm and focused demeanor. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills excellent time management and problem-solving skills.",
};

const About = () => {
  return (
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

      <div className={styles.about}>
        <div className="container text-center">
          <h1 className="display-1">About Us</h1>
          <p>Home / About Us</p>
        </div>
      </div>

      <div className={styles.inTouch}>
        <div className="container text-white">
          <div className="row">
          <div className="col-md-7">
            <p>Hello There!</p>
            <h1 className="display-3">I'm {Paragraph.name}</h1>
            <p>{Paragraph.bioOne}</p>
            <br />
            <p>{Paragraph.bioTwo}</p>
            <button className={styles.button}>Learn More</button>
          </div>

          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
