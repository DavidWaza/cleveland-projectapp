import Head from "next/head";
import { Html, Main, NextScript } from "next/document";
import SmallNavbar from "../component/Header/SmallNav";
import BigNav from "../component/Header/BigNav";
import Footer from "../component/Footer";
import ScrollTo from "../component/Scroll/scroll";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Html lang="en">
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
        <ScrollTo />
        <Footer />
      </Html>
    </>
  );
}

export default MyApp;
