import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Rawstyles from "../../styles/Raw.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const Species = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div className={styles.specieWrapper}>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <Container>
          <div className={Rawstyles.title}>
            <p>What We offer</p>
          </div>
          <Row className={` g-3 `}>
            <Col sm={4}>
              <Card className={styles.card}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto,w_500,c_scale/v1668416729/gold_orpggs.jpg"
                  className={styles.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p className={styles.rawText}>Raw Collection</p>
                  </Card.Title>
                  <Card.Text>
                    <p className={styles.slug}>
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </p>
                  </Card.Text>
                  <Link href="/rawgems">
                    <button className={styles.pulse}>Take a tour</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className={styles.card}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/ddwkojhaj/image/upload/q_auto,f_auto,w_500,c_scale/v1668417004/sapphire_id5anm.jpg"
                  className={styles.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p className={styles.rawText}>Polished Products</p>
                  </Card.Title>
                  <Card.Text>
                    <p className={styles.slug}>
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </p>
                  </Card.Text>
                  <Link href="/polish">
                    <button className={styles.pulse}>Take a tour</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className={styles.card}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/ddwkojhaj/image/upload/w_500,c_scale/v1668415924/copper_ywjxhq.jpg"
                  className={styles.image}
                />
                <Card.Body>
                  <Card.Title>
                    <p className={styles.rawText}>Industrial Minerals</p>
                  </Card.Title>
                  <Card.Text>
                    <p className={styles.slug}>
                      Some quick example text to build on the card title and
                      make up the bulk of the content.
                    </p>
                  </Card.Text>
                  <Link href="/metals">
                    <button className={styles.pulse}>Take a tour</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default Species;
