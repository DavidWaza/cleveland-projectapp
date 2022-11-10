import React from "react";
import styles from "../../styles/Home.module.css";
import { Row, Container, Col } from "react-bootstrap";
import Link from "next/link";

const Notice = () => {
  return (
    <>
      <Container>
        <Row className={`g-0 ${styles.noticeWrapper}`}>
          <Col sm={6}>
            <div className={styles.header}>
              <p>The beauty of our Gem..</p>
              <p>
                We pick the best raw gemstones from around the world. satisfying
                our customers taste as well as providing a fine tunned luxury.
              </p>
              <Link href="/">
                <button className={styles.button}>See More</button>
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
    </>
  );
};

export default Notice;
