import { useFadeIn } from './hooks/useFadeIn';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Categories from './components/Categories';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';

export default function App() {
  useFadeIn();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Categories />
        <Products />
        <WhyUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
