import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav
        className={`${styles.topbar} navbar navbar-expand-md navbar-light fixed-top`}
      >
        <div className="container p-4 pb-4">
          
          <button
            className="navbar-toggler d-lg-none navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
          <p className="navbar-brand text-white" href="#">
            Shreya Jha
          </p>
            <ul className="navbar-nav mr-auto mt-lg-0 m-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className={`${styles.link} nav-link`}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={`${styles.link} nav-link`}>
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/portfolio">
                  <a className={`${styles.link} nav-link`}>
                    Portfolio
                  </a>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link href="/contact">
                  <a className={`${styles.link} nav-link`}>
                  Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
