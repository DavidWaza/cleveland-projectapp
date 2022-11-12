import Head from "next/head";
import SmallNavbar from "../component/Header/SmallNav";
import BigNav from "../component/Header/BigNav";
import Footer from "../component/Footer";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CIG</title>
        <meta
          name="description"
          content="loose diamonds, buying online, diamonds, Diamonds"
        />
      </Head>
      <SmallNavbar />
      <BigNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
