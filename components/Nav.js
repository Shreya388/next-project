import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import 'animate.css';
import logo from "../img/Tree-Tech-Digi-Logo.png";

const Nav = () => {
  return (
    <>
      <nav className={`${styles.topbar} navbar navbar-expand-md navbar-light`}>
        <div className="container pt-3 pb-3">
        <h1 className="navbar-brand text-white" href="#">
              <Image src={logo} height="60px" width="70px" />
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
                  <a className={`${styles.linkActive} nav-link`}>HOME</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={`${styles.link} nav-link`}>ABOUT US <i className="fa fa-angle-down" style={{fontSize: "15px"}}></i></a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/services">
                  <a className={`${styles.link} nav-link`}>SERVICES <i className="fa fa-angle-down"></i></a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className={`${styles.link} nav-link`}>BLOG</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a className={`${styles.contactlink} nav-link`}>CONTACT US</a>
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
