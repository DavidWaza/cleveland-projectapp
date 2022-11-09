import React from "react";
import styles from "../../styles/Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

const Herobanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className={styles.imageOne}>
            <div className={styles.imageText}>
              <p>Great piece of luxury</p>
              <p>Get fancy with our stones</p>
              <div className={styles.buttonGroup}>
                <Link href="/">
                  <button className={styles.button}>Discover Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.imageTwo}>
            <div className={styles.imageTextTwo}>
              <p>Bespoke Piece of Gem!</p>
              <p>Get cutting edge Gem-stones</p>
              <div className={styles.buttonGroup}>
                <Link href="/">
                  <button className={styles.buttonTwo}>Discover Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.imageThree}>
          <div className={styles.imageText}>
              <p>Raw Gem-stones available</p>
              <p>Get the best deals with our raw stones</p>
              <div className={styles.buttonGroup}>
                <Link href="/">
                  <button className={styles.buttonThree}>Get Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Herobanner;
