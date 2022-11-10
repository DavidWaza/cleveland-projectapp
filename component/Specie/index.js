import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Raw from "../../public/img/sapphire.jpg";
import { Card, Button } from "react-bootstrap";
const Species = () => {
  return (
    <>
      <Container>
        <Row className={` g-3 ${styles.specieWrapper}`}>
          <Col sm={6}>
            <Card style={{ width: "100%" }}>
              <div className={styles.rawImg}></div>
              <Card.Body>
                <Card.Title>
                  <p className={styles.rawText}>Raw Collection</p>
                </Card.Title>
                <Card.Text>
                  <p className={styles.slug}>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </p>
                </Card.Text>
                <Link href="/">
                  <button className={styles.button}>Take a tour</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card style={{ width: "100%" }}>
              <div className={styles.polishImg}></div>
              <Card.Body>
                <Card.Title>
                  <p className={styles.rawText}>Polished Products</p>
                </Card.Title>
                <Card.Text>
                  <p className={styles.slug}>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </p>
                </Card.Text>
                <Link href="/">
                  <button className={styles.button}>Take a tour</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Species;
