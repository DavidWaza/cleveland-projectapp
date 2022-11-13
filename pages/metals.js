import Metstyles from "../styles/Metal.module.css";
import Rawstyles from "../styles/Raw.module.css";
import styles from "../styles/Home.module.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Lithium, Irons, RareMetals, MetalData } from "../component/data/gemData";

const Metals = () => {
  return (
    <>
      <Container>
        <Row className="g-0">
          <Col sm={4}>
            <div className={Metstyles.metalsWrapper}></div>
          </Col>
          <Col sm={8} className={Metstyles.metalContainer}>
            <div className={Metstyles.metDiv}>
              <p>Industrial Minerals</p>
              <p>
                We journey through different part of the world to carefully
                hand-pick the best minerals, from Lithium, berylium, iron,
                copper and the rest in the country.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={Rawstyles.title}>
            <p>Lithium</p>
          </div>
          {Lithium.map((lit) => (
            <Col sm={4} key={lit.id}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={lit.img} className={Metstyles.imgSize} />
                <Card.Body>
                  <Card.Title>{lit.slug}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <div className={Rawstyles.title}>
            <p>Iron Ore</p>
          </div>
          {Irons.map((iron) => (
            <Col sm={4} key={iron.id}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={iron.img} className={Metstyles.imgSize} />
                <Card.Body>
                  <Card.Title>{iron.slug}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <div className={Rawstyles.title}>
            <p>Rare Earth Metals</p>
          </div>
          {RareMetals.map((rare) => (
            <Col sm={4} key={rare.id}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={rare.img} className={Metstyles.imgSize} />
                <Card.Body>
                  <Card.Title>{rare.slug}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <div className={Rawstyles.title}>
            <p>Other Earth Metals</p>
          </div>
          {MetalData.map((metal) => (
            <Col sm={4} key={metal.id}>
              <Card className={styles.card}>
                <Card.Img variant="top" src={metal.img} className={Metstyles.imgSize} />
                <Card.Body>
                  <Card.Title>{metal.slug}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Metals;
