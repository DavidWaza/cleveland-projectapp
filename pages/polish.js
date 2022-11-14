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
  Alexanderite,
  Aquamarine,
  Tsavorite,
  Tanzanite,
  Zircon,
  Garnet,
  Topaz,
  Quartz,
  gemAccess,
} from "../component/data/gemData";
import Image from "next/image";
import Link from "next/link";

const Polish = () => {
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
            {gemAccess.map(({id,iden,img,title}) => (
               <Link href={iden} key={id} className="mt-5 ml-6">
                <Image src={img} alt="emrald" width={50} height={50} />
                <p className="text-center">{title}</p>
              </Link>
            ))}
          </div>
        </Row>
        <Row id="emerald">
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
        <Row id="amethyst">
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
        <Row id="alexandrite">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorAlex}>Alexanderite</p>
          </div>
          {Alexanderite.map(({ id, slug, img }) => (
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
        <Row id="aquamarine">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorSapphire}>Aquamarine</p>
          </div>
          {Aquamarine.map(({ id, slug, img }) => (
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
        <Row id="tsavorite">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorGreen}>Tsavorite</p>
          </div>
          {Tsavorite.map(({ id, slug, img }) => (
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
        <Row id="tanzanite">
          <div className={Rawstyles.title}>
            <p className={Polstyles.titleColorSapphire}>Tanzanite</p>
          </div>
          {Tanzanite.map(({ id, slug, img }) => (
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
        <Row id="zircon">
          <div className={Rawstyles.title}>
            <p>Zircon</p>
          </div>
          {Zircon.map(({ id, slug, img }) => (
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
        <Row id="garnet">
          <div className={Rawstyles.title}>
            <p>Garnet</p>
          </div>
          {Garnet.map(({ id, slug, img }) => (
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
        <Row id="topaz">
          <div className={Rawstyles.title}>
            <p>Topaz</p>
          </div>
          {Topaz.map(({ id, slug, img }) => (
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
        <Row id="quartz">
          <div className={Rawstyles.title}>
            <p>Quartz</p>
          </div>
          {Quartz.map(({ id, slug, img }) => (
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

export default Polish;
