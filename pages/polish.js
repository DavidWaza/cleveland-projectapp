import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Polstyles from "../styles/Polish.module.css";
import Rawstyles from "../styles/Raw.module.css";
import styles from "../styles/Home.module.css";
import Metstyles from "../styles/Metal.module.css";
import {
  EmeraldGems,
  RubyData,
  SapphireData,
  AmethystData,
} from "../component/data/gemData";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Polish = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div>
      <Container>
        <Row className="g-0">
          <Col sm={8} className={Polstyles.container}></Col>
          <Col sm={4}>
            <div className={Polstyles.polishImg}></div>
          </Col>
        </Row>
        <Row>
          <p className={Polstyles.access}>Click for quick access</p>
          <div className={Polstyles.links}>
            <Link href="#sapphire">
              <Image src="/sapphire.png" alt="emrald" width={50} height={50} />
            </Link>
            <Link href="#ruby">
              <Image src="/ruby.png" alt="emrald" width={50} height={50} />
            </Link>
            <Link href="#amethsyt">
              <Image src="/amethsyt.png" alt="emrald" width={50} height={50} />
            </Link>
          </div>
        </Row>
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <Row>
            <div className={Rawstyles.title}>
              <p className={Polstyles.titleColorGreen}>Emerald</p>
            </div>
            {EmeraldGems.map(({ id, slug, img }) => (
              <Col sm={4} key={id}>
                <Card className={styles.card}>
                  <Card.Img
                    variant="top"
                    src={img}
                    className={Metstyles.imgSize}
                  />
                  <Card.Body>
                    <Card.Title>{slug}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <Row id="ruby">
            <div className={Rawstyles.title}>
              <p className={Polstyles.titleColorRuby}>Ruby</p>
            </div>
            {RubyData.map(({ id, slug, img }) => (
              <Col sm={4} key={id}>
                <Card className={styles.card}>
                  <Card.Img
                    variant="top"
                    src={img}
                    className={Metstyles.imgSize}
                  />
                  <Card.Body>
                    <Card.Title>{slug}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <Row id="sapphire">
            <div className={Rawstyles.title}>
              <p className={Polstyles.titleColorSapphire}>Sapphire</p>
            </div>
            {SapphireData.map(({ id, slug, img }) => (
              <Col sm={4} key={id}>
                <Card className={styles.card}>
                  <Card.Img
                    variant="top"
                    src={img}
                    className={Metstyles.imgSize}
                  />
                  <Card.Body>
                    <Card.Title>{slug}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
        <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <Row id="amethsyt">
            <div className={Rawstyles.title}>
              <p className={Polstyles.titleColorAmethesyt}>Amethyst</p>
            </div>
            {AmethystData.map(({ id, slug, img }) => (
              <Col sm={4} key={id}>
                <Card className={styles.card}>
                  <Card.Img
                    variant="top"
                    src={img}
                    className={Metstyles.imgSize}
                  />
                  <Card.Body>
                    <Card.Title>{slug}</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Polish;
