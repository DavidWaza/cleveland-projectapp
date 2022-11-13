import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Rawstyles from "../styles/Raw.module.css";
import styles from "../styles/Home.module.css";
import { Amethyst, Emeralds, Rubies } from "../component/data/gemData";

const Raw = () => {
  const [key, setKey] = useState("home");
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
        <Row className={Rawstyles.space}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="amethyst" title="Amethyst">
              <Row>
                {Amethyst.map((gem) => (
                  <Col sm={4} key={gem.id}>
                    <Image
                      src={gem.img}
                      alt={gem.alt}
                      width={360}
                      height={230}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="ruby" title="Ruby">
              <Row>
                {Rubies.map((ruby) => (
                  <Col sm={4} key={ruby.id}>
                    <Image
                      src={ruby.img}
                      alt={ruby.alt}
                      width={360}
                      height={230}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="emerald" title="Emerald">
              <Row>
                {Emeralds.map((emerald) => (
                  <Col sm={4} key={emerald.id}>
                    <Image
                      src={emerald.img}
                      alt={emerald.alt}
                      width={360}
                      height={230}
                    />
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  );
};

export default Raw;
