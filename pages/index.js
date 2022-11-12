
import WhyUs from "../component/Choose";
import Contact from "../component/Contact";
import Herobanner from "../component/Herobanner";
import Notice from "../component/Notice";
import SocialHandle from "../component/Social";
import Specie from "../component/Specie";
import Video from "../component/Video";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Herobanner />
      <Specie />
      <Video />
      <Notice />
      <SocialHandle />
      <WhyUs />
      <Contact />
      
    </div>
  );
}
