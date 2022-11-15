import  { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phone = '+2349018660095';

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <Container fluid>
        <Row className={styles.contactWrapper}>
          <Col sm={6}>
            <div className={styles.contact}>
              <p>Contact us</p>
              <div className={styles.flex}>
                <p>09018660095</p>
              </div>
              <div className={styles.flex}>
                <p>davidyega@gmail.com</p>
              </div>
              <div className={styles.flex}>
                <p>online</p>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.helpline}>
              <p>Need Help ?</p>
              <p>
                Call us on{" "}
                <span>
                  <a href={phone}>09016008895</a>
                </span>{" "}
                for emercency purposes
              </p>
              <p>Monday 9am GMT to Saturday 5pm GMT</p>
              <p>
                or email us on <a href="mailto:mattwole@gmail.com">mattwole@gmail.com</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
