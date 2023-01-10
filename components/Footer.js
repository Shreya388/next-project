import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Paragraph = {
  name: "Shreya Jha",

  bioOne:
    "Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites apps and platforms to propel competitive advantage and revenue growth.",

  bioTwo:
    "Technically proficient and analytical problem solver with calm and focused demeanor. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills excellent time management and problem-solving skills.",
};

const Links = (props) => {
  return (
    <div className={`${styles.footerLink} col-md-4 text-center col-sm-12 col-lg-2 `}>
      <Link href={props.href}>
        <a className="nav-link">
        {props.firstLink}
        </a>
      </Link>
      <Link href={props.href}>
        <a className="nav-link">
        {props.secondLink}
        </a>
      </Link>
      <Link href={props.href}>
        <a className="nav-link">
        {props.thirdLink}
        </a>
      </Link>
      <Link href={props.href}>
        <a className="nav-link">
        {props.fourthLink}
        </a>
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <iframe
        className={styles.footerMap}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11937.962086390718!2d91.80468659154218!3d26.155300178388117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666701164805!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={`${styles.Footer}`}>
        <div className="container">
          <div className={`${styles.footerCont}`}>
            <div className="row">
              <div className="col-md-4 col-sm-12 col-lg-2">
                <a href="https://www.linkedin.com/in/shreya-jha-6043aa1a3/">
                  <button>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                </a>
                <a href="https://www.instagram.com/shreyajha1238/">
                  <button>
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                </a>
                <a href="https://meenaxjha@gmail.com">
                  <button>
                    <i className="fa-thin fa fa-envelope"></i>
                  </button>
                </a>
              </div>
              <div className="col-md-4 col-sm-12 col-lg-4">
                <div className="container">
                  <h1>{Paragraph.name}</h1>
                  <p className="">{Paragraph.bioOne}</p>
                </div>
              </div>


              <Links
                href="#"
                firstLink="Home"
                secondLink="About"
                thirdLink="Portfolio"
                fourthLink="Contact"
              />
              <Links
                href="#"
                firstLink="Popular Design"
                secondLink="Trendy Products"
                thirdLink="Marketing"
                fourthLink="SEO Friendly"
              />
              <Links
                href="#"
                firstLink="UI/UX Design"
                secondLink="Web Development"
                thirdLink="Graphic Design"
                fourthLink="Android App"
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
