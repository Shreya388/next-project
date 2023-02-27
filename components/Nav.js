import Link from "next/link";
import styles from "../styles/Nav.module.css";
import 'animate.css';

const Nav = () => {
  return (
    <>
      <nav className={`${styles.topbar} navbar navbar-expand-md navbar-light`}>
        <div className="container pt-3 pb-3">
        <h1 className="navbar-brand" href="#">
              Shreya Jha
            </h1>
          <button
            className="navbar-toggler d-lg-none navbar-light ml-auto border-0"
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
            
            <ul className="navbar-nav mt-lg-0 text-center">
              <li className="nav-item active">
                <Link href="/">
                  <a className={`${styles.linkActive} nav-link`}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={`${styles.link} nav-link`}>About</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/portfolio">
                  <a className={`${styles.link} nav-link`}>Portfolio</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className={`${styles.link} nav-link`}>Contact Us</a>
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
