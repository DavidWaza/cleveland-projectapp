import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row, Card } from "react-bootstrap";
import Rawstyles from "../styles/Raw.module.css";
import styles from "../styles/Home.module.css";
import Polstyles from "../styles/Polish.module.css"
import Metstyles from "../styles/Metal.module.css"
import { Amethyst, Emeralds, Rubies } from "../component/data/gemData";

const Raw = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row className="g-0">
          <Col sm={8} className={Rawstyles.wrapper}>
            <div className={Rawstyles.rawDiv}>
              <p>Raw Collection</p>
              <p>
                We journey through different part of the world to carefully
                hand-pick the best Gem-stones in the country.
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className={Rawstyles.rawImgHole}></div>
          </Col>
        </Row>
        <div className={Rawstyles.title}>
          <p>Raw collection</p>
        </div>
        <Row>
          <p className={Polstyles.access}>Click for quick access</p>
          <div className={Polstyles.links}>
          <Link href="#emerald">
              <Image src="/emerald.png" alt="emrald" width={50} height={50} />
              <p className="text-center">Emerald</p>
            </Link>
            <div className="pl-4 pr-4">
            <Link href="#ruby">
              <Image src="/ruby.png" alt="emrald" width={50} height={50}  />
              <p className="text-center">Ruby</p>
            </Link>
            </div>
           
            <Link href="#amethsyt">
              <Image src="/amethsyt.png" alt="emrald" width={50} height={50} />
              <p className="text-center">Amethyst</p>
            </Link>
          </div>
        </Row>
        <Row>
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorAmethesyt}>Amethyst</p>
          </div>
          {Amethyst.map(({ id, slug, img }) => (
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
        <Row id="emerald">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorGreen}>Emerald</p>
          </div>
          {Emeralds.map(({ id, slug, img }) => (
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
        <Row id="ruby">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorRuby}>Ruby</p>
          </div>
          {Rubies.map(({ id, slug, img }) => (
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
      </Container>
    </div>
  );
};

export default Raw;
