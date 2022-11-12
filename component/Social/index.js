import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const SocialHandle = () => {
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
        <Row className={` g-0 ${styles.colWrapper}`}>
          <Col sm={6}>
            <div className={styles.col1}></div>
          </Col>
          <Col sm={6}>
            <div className={styles.col2}>
              <div className={styles.socialIcon}>
                <Image
                  src="/connected.png"
                  alt="IG"
                  width={200}
                  height={200}
                  className={styles.stayConnected}
                />
              </div>
              <div className={styles.connectText}>
                <p>Get Connected</p>
                <p>@wazabanga.production</p>
                <p>
                  Follow us on Instagram to keep up to date with the latest
                  news, promotions, giveaways and so much more.
                </p>
                <Link href="/">
                  <Image src="/insta.png" alt="insta" width={30} height={30} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default SocialHandle;
