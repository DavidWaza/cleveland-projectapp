import Head from "next/head";
import WhyUs from "../component/Choose";
import Contact from "../component/Contact";
import Herobanner from "../component/Herobanner";
import SmallNavbar from "../component/Header/SmallNav";
import Notice from "../component/Notice";
import SocialHandle from "../component/Social";
import Specie from "../component/Specie";
import Video from "../component/Video";
import styles from "../styles/Home.module.css";
import BigNav from "../component/Header/BigNav";
import Footer from "../component/Footer";

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
      <SmallNavbar />
      <BigNav />
      <Herobanner />
      <Specie />
      <Video />
      <Notice />
      <SocialHandle />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
