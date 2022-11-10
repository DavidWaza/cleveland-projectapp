import React from "react";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <section className={styles.contactArea} id="contact">
        <Container>
          <Row>
            <Col sm={12}>
              <div className={` text-center ${styles.contactContent}`}>
                <a href="#">
                  {/* <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" /> */}
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum{" "}
                </p>
                <div className={styles.hr}></div>
                <h6>123 Baker Street</h6>
                <h6>
                  +234(0)9018660095<span>|</span>+01 2345 6789 12
                </h6>
                <div className={styles.contactSocial}>
                  <ul>
                    <li>
                      <a className={styles.hoverTarget} href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className={styles.hoverTarget} href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className={styles.hoverTarget} href="">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a className={styles.hoverTarget} href="">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a className={styles.hoverTarget} href="">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className={styles.footer}>
        <p>Copyright &copy; 2022. All Rights Reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
