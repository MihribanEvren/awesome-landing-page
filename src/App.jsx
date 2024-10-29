import Features from './components/Features/Features';
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import BestProducts from './components/Products/BestProducts';
import Testimonials from './components/Testimonials/Testimonials';
import WhyJoinUs from './components/WhyJoinUs/WhyJoinUs';

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
      </div>
    </>
  );
}

export default App;
