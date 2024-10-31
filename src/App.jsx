import Collection from './components/Collection/Collection';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import SectionLayout from './components/Layout/SectionLayout';
import BestProducts from './components/Products/BestProducts';
import Testimonials from './components/Testimonials/Testimonials';
import WhyJoinUs from './components/WhyJoinUs/WhyJoinUs';
import WorldMap from './components/WorldMap/WorldMap';

function App() {
  return (
    <>
      <Navbar />
      <SectionLayout className="bg-amber-50">
        <Hero />
        <Features />
      </SectionLayout>

      <SectionLayout className="bg-bgDark">
        <BestProducts />
      </SectionLayout>

      <SectionLayout className="bg-amber-50">
        <WhyJoinUs />
      </SectionLayout>

      <Testimonials />
      <SectionLayout className="bg-amber-50">
        <Collection />
      </SectionLayout>

      <SectionLayout className="bg-amber-900">
        <WorldMap />
      </SectionLayout>

      <SectionLayout className="bg-bgDark">
        <Footer />
      </SectionLayout>
    </>
  );
}

export default App;
