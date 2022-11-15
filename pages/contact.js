import { Container, Col, Row } from "react-bootstrap";
import Contstyles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <div className={Contstyles.headerTitle}>
              <p>Contact us</p>
              <p>You can reach us via email or this form below.</p>
            </div>
            <form>
              <input
                type="text"
                placeholder="First Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="Email"
                placeholder="Email"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <input
                type="number"
                placeholder="Phone Number"
                required
                maxLength={100}
                className={Contstyles.input}
              />
              <textarea
                name="MultiLine"
                maxLength={3000}
                placeholder="Leave us a message"
                className={Contstyles.textArea}
              />
            </form>
            <iframe
              width="100%"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=4e2da571-f9b3-4094-823b-9e53bee532bb
    &q=Space+Needle,Seattle+WA"
            ></iframe>
          </Col>
          <Col sm={8}>
            <div className={Contstyles.imgWrapper}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
