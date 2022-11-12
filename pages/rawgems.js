import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rawstyles from "../styles/Raw.module.css";
import styles from "../styles/Home.module.css";
import { Amethyst } from "../component/data/gemData";

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
        <Row className={Rawstyles.row}>
          <div className={Rawstyles.gemProps}>
            <p>amethyst</p>
          </div>
          {Amethyst.map((gem) => (
            <>
              <Col sm={4} key={gem.id}>
                <Image src={gem.img} alt={gem.alt} width={350} height={300} />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Raw;
