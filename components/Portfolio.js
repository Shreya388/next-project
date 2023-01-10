import Head from "next/head";
import Image from "next/image";
import one from "../img/one.webp";
import two from "../img/two.webp";
import three from "../img/three.webp";
import four from "../img/four.webp";
import five from "../img/five.webp";
import six from "../img/six.webp";
import seven from "../img/seven.webp";
import eight from "../img/eight.png";
import nine from "../img/nine.png";
import styles from "../styles/Portfolio.module.css";
import Script from "next/script";


const Cards = (props) => {
   
  return (
    <div className={`${styles.mycont}col-sm-12 col-md-6 col-lg-4 mt-4`}>
      <div className={`${styles.myCard} card`}>
      <Image
        src={props.image}
        className={`${styles.myImg} img-fluid img-thumbnail`}
        alt="images"
      />
      <div className={`${styles.textBody} card-body text-white`}>
          <h1 className="navbar-brand">{props.title}</h1>
          <p>{props.bio}</p>
          <a href={props.href}><button className={styles.visitBtn}>Visit Site</button></a>
      </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
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
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
            crossorigin="anonymous"
          ></Script>
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
          ></Script>

      <div className={styles.portfolio}>
          <div className="container text-center mt-4">
            <div className="row">
              <Cards image={one} title="Men's Fashion Website" bio="Made with the use of HTML, Css and Bootstrap" />
              <Cards image={two} title="Men's Fashion Website" bio="Made with the use of HTML, Css and Bootstrap" />
              <Cards image={three} title="Furniture Website" bio="Made with the use of HTML, Css and Bootstrap" />
            </div>
            <div className="row mt-4">
              <Cards image={four} title="Dribble Design" bio="Made with the use of HTML, Css and Bootstrap" />
              <Cards image={five} title="Logo Website" bio="Made with the use of HTML, Css and Bootstrap" />
              <Cards image={six} title="Portfolio Site" bio="Made with the use of ReactJs, Css and React-Bootstrap" />
            </div>
            <div className="row mt-4">
              <Cards image={seven} title="Unsplash Images Search App" bio="Made with the use of ReactJs, Unsplash API axios, also Css and Bootstrap" />
              <Cards image={eight} title="Food Delivery" bio="Made with the use of ReactJs, Css and Bootstrap" />
              <Cards image={nine} title="Portfolio" bio="Made with the use of ReactJs, Css and Bootstrap" />
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
