import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const WhyUs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.whyWrapper}>
              <p>It has to be us.</p>
              <p>why choose us?</p>
              <p>
                We are a business of over years of experience. During our cause
                of experienced and careful selection, we have been able to:
              </p>
              <table className={styles.table}>
                <ul>
                  <li>
                    Offer a friendly service where the customer is at the centre
                    of everything we do.
                  </li>
                  <li>
                    Provide superior quality, stunning gemstones and minerals at
                    affordable rates
                  </li>
                  <li>
                    Create a team of expert business consultants, who puts ypu
                    through the market and analyse best practices
                  </li>
                </ul>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WhyUs;
