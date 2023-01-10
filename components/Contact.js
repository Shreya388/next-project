import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Script from "next/script";


const Contact = () => {
  return (
    <div>
      <Head>
          
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

      <div className={styles.inTouch}>
        <div className="container text-white">
          <div className="col-md-7">
          <h1 className="display-3">Keep In Touch</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <button className={styles.button}>Learn More</button>
          </div>
        </div>
      </div>

      <div className={styles.boxSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className={styles.formBox}>
                <h1 className="display-6"> let's Connect</h1>
                <br />

                <input
                  type="text"
                  className={`${styles.inputBox} form-control`}
                  placeholder="Name"
                />

                <input
                  type="text"
                  className={`${styles.inputBox} form-control`}
                  placeholder="Email"
                />

                <textarea
                  className={`${styles.inputBoxArea} form-control`}
                  placeholder="Message"
                ></textarea>
                <button className={styles.submit}>Submit</button>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className={styles.formTextbox}>
                <p>CONTACT US</p>
                <h1 className="display-6">Have Any Project?</h1>
                <p className="pt-4" style={{fontFamily:"klee one"}}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  <br />
                  <br /> beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit
                </p>
                <br /><br />
                <div className="row mt-4">
                <div className="col-md-6 col-sm-6">
                <i class="fa-thin fa fa-phone"></i> <b>Phone</b>
                <p>+91 9395692041</p>
                </div>
                <div className="col-md-6 col-sm-6">
                  <i class="fa-thin fa fa-phone"></i> <b>Email Address</b>
                  <p>meenaxjha@gmail.com</p>
                </div>
                </div>

                <div className="row mt-4">
                <div className="col-md-6">
                <i class="fa-thin fa fa-location-pin"></i> <b>Location</b>
                <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="col-md-6">
                <i class="fa-brands fa-linkedin-in"></i> <b>Linkedin</b>
                  <p>shreya-jha-6043aa1a3</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
