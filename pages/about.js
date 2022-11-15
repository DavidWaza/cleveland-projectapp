import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Abtstyles from "../styles/About.module.css";
import Specie from "../component/Specie/index"

const About = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className={Abtstyles.container}>
            <p>Who are we?</p>
            <p>
              Cleveland International group offers both local and International
              partnership solutions that deliver outstanding service through an
              exceptional team. Our impressive international capability is
              stimulated by the experties of reputable both national and
              inernational partners and complemented with strong capital investment. As well
              as satisfying our clients and our shareholders, our long term goals aims to effectively support 
              the system and strentghen economy.
              <p>The service we extend to our valuable customers consists of, exporting varieties of fine gem stones with specific sizes
                and gem cuts. Providing various coloured gems upon request with sizes. A selection of the best natural
                gemstones such as Sapphires, Ruby, Emerald, Alexandrite, Tanzanite, Diamond, Spinel, Garnet,
                Aquamarine and Peridot. Our company do not sell synthetic or laboratory made or any unnatural
                gemstones. Our unique inventory sets us apart from other gemstones supplying company around the world.
                We take utmost pride in guaranteeing our client quality and uthencity gems stones.
              </p>
              <p>This gallery below portray purchase we buy from directly-mines/Local sellers/Gem Markets/Auctions around
                the country. All cut & polished Gem stones purchase with the gem certificates. Cash payment to the seller will
                offer as bank Cheque after checking all legal backgrounds.
              </p>
              <p>Storage: All Gems will be kept under dual control in Bank safe.</p>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Specie />
      </Row>
    </Container>
  );
};

export default About;
