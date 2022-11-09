import React from "react";
import styles from "../../styles/Home.module.css"
import { Row, Container, Col } from "react-bootstrap";

const Notice = () => {
  return (
    <>
      <Container>
        <Row className={`g-0 ${styles.noticeWrapper}`}>
          <Col sm={6}>
            <div className={styles.header}>
                <p></p>
            </div>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Notice;
