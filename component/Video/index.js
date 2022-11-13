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
          <Row className={`g-0`}>
            <Col sm={12}>
              <div className={styles.videoCol}>
                <video
                  src={VideoSrc}
                  autoPlay
                  muted
                  loop
                  // controls
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
    "https://cdn.pixabay.com/vimeo/300109077/Gold%20-%2019253.mp4?width=1280&expiry=1668036874&hash=f07f7ce816a1662b301af48ff465dd1dc99ed1d1"
  );
  const VideoSrc = await res.json();

  return {
    props: {
      VideoSrc,
    },
  };
};
