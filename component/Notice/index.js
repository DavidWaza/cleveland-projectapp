import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { Row, Container, Col } from "react-bootstrap";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Notice = () => {
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
      <Container className={styles.noticeWrapper}>
        <Row className={`g-0 `}>
          <Col sm={6}>
            <div className={styles.header}>
              <p>The beauty of our Gem..</p>
              <p>
                We pick the best raw gemstones from around the world. satisfying
                our customers taste as well as providing a fine tunned luxury.
              </p>
              <Link href="/polish">
                <button className={styles.pulse}>See More</button>
              </Link>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.sideFlex}>
              <Col sm={6}>
                <div className={styles.noticeImg}></div>
              </Col>
              <Col sm={6}>
                <div className={styles.noticeImg2}></div>
              </Col>
            </div>
            <div className={styles.sideFlex}>
              <Col sm={6}>
                <div className={styles.levelDown}></div>
              </Col>
              <Col sm={6}>
                <div className={styles.levelDown2}></div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Notice;
