import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Connected from "/public/img/connected.png";
import Image from "next/image";
import Link from "next/link";
import Insta from "../../public/img/insta.png";

const SocialHandle = () => {
  return (
    <>
      <Container fluid>
        <Row className={` g-0 ${styles.colWrapper}`}>
          <Col sm={6}>
            <div className={styles.col1}></div>
          </Col>
          <Col sm={6}>
            <div className={styles.col2}>
              <div className={styles.socialIcon}>
                <Image
                  src={Connected}
                  alt="IG"
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
                  <Image src={Insta} alt="insta" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialHandle;
