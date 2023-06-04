import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Contact from "../components/Contact";
import cover from "../img/cover.png";
import graphics from "../img/social-icons/pen-tool.png";
import design from "../img/social-icons/design.png";
import socialMedia from "../img/social-icons/social-media.png";
import seotwo from "../img/social-icons/seotwo.png";
import seo from "../img/social-icons/seo.png";

const Paragraph = {
  Title: "Let's Make Your Business A Brand",

  bioOne:
    "A digital method to connect with customers and promote your business in the digital world of social media.",
};

const aboutContent = {
  title1: "Our Dedicated Support",
  title2: "Excellence Track Record",
  title3: "Creative Designs",
  para1:
    "With strong company culture and utmost dedication of the teamwork we are serving with pride",
  para2:
    "Tree tech digi is a digital marketing company that aim to provide full-service digital marketing solutions to the clients within their budget.",
  para3:
    "We believe in teamwork and functioning as a team to achieve the goal.",
};

const serviceContent = {
  title1: "Digital Marketing",
  title2: "Graphics Design",
  title3: "Social Media Services",
  title4: "Local SEO",
  title5: "SEO",
  title6: "Web Designing",
  para1:
    "With digital marketing services your business can tremendously grow and achieve its goals.",
  para2:
    "Get custom design with our creative graphic designer team and let your website shine.",
  para3:
    "Expand your market niche and audiences with social media marketing.",
  para4:
    "With us generate more local leads and enhance your targeted demographic for your local business.",
  para5:
    "We help you to achieve high rankings and increase your page visibility in the search engine result pages.",
  para6:
    "Expand your market niche and audiences with social media marketing.",
  
  };

const About = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-12 p-4">
      <div className="p-4 text-center">
        <h1 className="display-4">
          <i className={props.icons}></i>
        </h1>
        <p className="navbar-brand">
          <b>{props.title}</b>
        </p>
        <p className={styles.text}>{props.text}</p>
        
      </div>
    </div>
  );
};

const Services = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-12 p-4">
      <div className="p-4 text-center">
        <h1 className="display-1">
          <Image src={props.img} />
        </h1>

        <p className="navbar-brand">
          <b>{props.title}</b>
        </p>

        <p className={styles.text}>{props.text}</p>
        <button className={styles.serviceBtn}>Read More</button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Tree Tech Digi</title>
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
            <div className="row">
              <div className="col-md-12 col-lg-5 col-sm-12">
                <div className={`${styles.headerText} card border-0`}>
                  <div className="card-body">
                    <div className={styles.headerContent}>
                      <div className="">
                        <p className={styles.headingLabel}>
                          Digital Marketing Agency
                        </p>
                        <h1 className="display-4">{Paragraph.Title}</h1>
                        <p className="">
                          {Paragraph.bioOne}
                          <br />
                        </p>

                        <a
                          href="SHREYA JHA_Resume.pdf"
                          download="SHREYA JHA_Resume.pdf"
                        >
                          <button
                            className={`${styles.cvBtn} cv btn btn-primary`}
                          >
                            Get Started
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 col-sm-12">
                <div className={`${styles.imgdivcard} border-0`}>
                  <Image className="header-img" src={cover} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.about} mt-4`}>
        <div className="container">
          <h1 className=" display-6 text-center">About Tree Tech Digi</h1>
          <p className=""></p>
        </div>
        <div className="container mt-4">
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


      <div className="mt-4">
        <div className="container">
          <h1 className=" display-6 text-center">Check Out Our Services</h1>
          <p className=""></p>
        </div>
      <div className="container mt-4">
          <div className="row">
            <Services
              title={serviceContent.title1}
              text={serviceContent.para1}
              img={seo}
            />
            <Services
              title={serviceContent.title2}
              text={serviceContent.para2}
              img={graphics}
            />
            <Services
              title={serviceContent.title3}
              text={serviceContent.para3}
              img={socialMedia}
            />
          </div>

          <div className="row">
            <Services
              title={serviceContent.title4}
              text={serviceContent.para4}
              img={seo}
            />
            <Services
              title={serviceContent.title5}
              text={serviceContent.para5}
              img={seotwo}
            />
            <Services
              title={serviceContent.title6}
              text={serviceContent.para6}
              img={design}
            />
          </div>
        </div>
        </div>

      {/* Portfolio */}

      {/* Contact Us */}
      <br />
      <br />
      <Contact />
    </>
  );
}
