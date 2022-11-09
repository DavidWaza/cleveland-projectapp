import Head from "next/head";
import Herobanner from "../component/Herobanner";
// import Notice from "../component/Notice";
import SocialHandle from "../component/Social";
import Specie from "../component/Specie";
import Video from "../component/Video";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CIG</title>
        <meta
          name="description"
          content="loose diamonds, buying online, diamonds, Diamonds"
        />
      </Head>
      <Herobanner />
      <Specie />
      <Video />
      <SocialHandle />
    </div>
  );
}
