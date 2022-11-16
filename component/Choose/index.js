import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const WhyUs = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <div>
        <Row>
          <Col>
            <div className={styles.whyWrapper}>
              <p>It has to be us.</p>
              <p>why choose us?</p>
              <p>
                We are a business of over years of experience. During our cause
                of experienced and careful selection, we have been able to:
              </p>
              <table className={styles.table}>
                <ul>
                  <li>
                    Offer a friendly service where the customer is at the centre
                    of everything we do.
                  </li>
                  <li>
                    Provide superior quality, stunning gemstones and minerals at
                    affordable rates
                  </li>
                  <li>
                    Create a team of expert business consultants, who puts ypu
                    through the market and analyse best practices
                  </li>
                </ul>
              </table>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default WhyUs;
