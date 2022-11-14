import { lazy, Suspense } from "react";

const Herobanner = lazy(() => import ("../component/Herobanner"));
const WhyUs = lazy(() => import ("../component/Choose"));
const Specie = lazy(() => import ("../component/Specie"));
const Contact = lazy(() => import ("../component/Contact"));
const Notice = lazy(() => import ("../component/Notice"));
const SocialHandle = lazy(() => import ("../component/Social"));
const Video = lazy(() => import ("../component/Video"));

const renderLoader = () => <p>Loading..</p>

export default function Home() {
  return (
    <Suspense fallback={renderLoader()}>
        <Herobanner />
        <Specie />
        <Video />
        <Notice />
        <SocialHandle />
        <WhyUs />
        <Contact />
    </Suspense>
  );
}
