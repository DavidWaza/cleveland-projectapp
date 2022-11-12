import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Raw.module.css";

const Raw = () => {
  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col sm={8} className={styles.wrapper}>
            <div className={styles.rawDiv}>
              <p>Raw Collection</p>
              <p>
                We journey through different part of the world to carefully
                hand-pick the best Gem-stones in the country.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className={styles.rawImgHole}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Raw;
