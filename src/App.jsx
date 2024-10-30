import Collection from './components/Collection/Collection';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import BestProducts from './components/Products/BestProducts';
import Testimonials from './components/Testimonials/Testimonials';
import WhyJoinUs from './components/WhyJoinUs/WhyJoinUs';
import WorldMap from './components/WorldMap/WorldMap';

function App() {
  return (
    <>
      <div className="container min-w-full bg-amber-50">
        <Navbar />
        <Hero />
        <Features />
      </div>
      <BestProducts />
      <div className="container min-w-full bg-amber-50">
        <WhyJoinUs />
      </div>
      <div className="min-w-full bg-amber-50">
        <Testimonials />
        <Collection />
      </div>
      <div className="bg-amber-900">
        <WorldMap />
      </div>
      <div className="container min-w-full bg-bgDark">
        <Footer />
      </div>
    </>
  );
}

export default App;
