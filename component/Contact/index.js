import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Phone from "../../public/icons/phone.png";
import Mail from "../../public/icons/mail.png";
import Location from "../../public/icons/pin.png";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <Container fluid>
        <Row className={styles.contactWrapper}>
          <Col sm={6}>
            <div className={styles.contact}>
              <p>Contact us</p>
              <div className={styles.flex}>
                <Image src={Phone} alt="phone" />
                <p>09018660095</p>
              </div>
              <div className={styles.flex}>
                <Image src={Mail} alt="phone" />
                <p>davidyega@gmail.com</p>
              </div>
              <div className={styles.flex}>
                <Image src={Location} alt="phone" />
                <p>online</p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.helpline}>
              <p>Need Help ?</p>
              <p>
                Call us on <span><Link href="/">09016008895</Link></span> for emercency purposes
              </p>
              <p>Monday 9am GMT to Saturday 5pm GMT</p>
              <p>or email us on <Link href="/">mattwole@gmail.com</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
