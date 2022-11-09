import styles from "../../styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";

const VideoSrc =
  "https://cdn.pixabay.com/vimeo/300109077/Gold%20-%2019253.mp4?width=640&expiry=1668020309&hash=6a8794d691dd9d795a20abe6b866ad2cb72e02c9";
const Video = () => {
  return (
    <>
      <Container>
        <Row className={`g-0 ${styles.noticeWrapper}`}>
          <Col sm={12}>
            <div className={styles.noticeCol}>
              <video
                src={VideoSrc}
                autoplay
                muted
                loop
                // controls
                playsinline
                className={styles.video}
              >
              </video>
              {/* <div className={styles.overlay}></div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Video;
