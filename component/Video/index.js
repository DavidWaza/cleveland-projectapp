import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Video = ({ VideoSrc }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div className={styles.videoWrapper}>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <Container>
          <Row className="g-0">
            <Col sm={12}>
              <div className={styles.videoCol}>
                <video
                  src="https://res.cloudinary.com/ddwkojhaj/video/upload/q_auto,f_auto/v1668439367/Jewelry_20-_2019259_vhpa6c.mp4"
                  autoPlay
                  muted
                  loop
                  playsinline
                  className={styles.video}
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default Video;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://res.cloudinary.com/ddwkojhaj/video/upload/q_auto,f_auto/v1668439367/Jewelry_20-_2019259_vhpa6c.mp4"
  );
  const VideoSrc = await res.json();

  return {
    props: {
      VideoSrc,
    },
  };
};
