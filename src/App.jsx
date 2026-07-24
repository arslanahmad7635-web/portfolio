import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Toolkit from './components/Toolkit';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ImageCarousel3D from './components/ImageCarousel3D';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Work />
        <Toolkit />
        <Education />
        <ImageCarousel3D/>
        <About />
        <Contact />
      </main>
    </>
  );
}
