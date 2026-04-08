import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import InfoCards from './components/InfoCards';
import { PhotoGallery } from './components/ui/gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <InfoCards />
        <PhotoGallery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export default App;
