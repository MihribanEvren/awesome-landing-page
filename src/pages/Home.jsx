import Collection from '../components/Collection/Collection';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';
import Hero from '../components/Hero/Hero';
import ReactangleLayout from '../components/Layout/RectangleLayout';
import SectionLayout from '../components/Layout/SectionLayout';
import BestProducts from '../components/Products/BestProducts';
import Testimonials from '../components/Testimonials/Testimonials';
import WhyJoinUs from '../components/WhyJoinUs/WhyJoinUs';
import WorldMap from '../components/WorldMap/WorldMap';

function Home() {
  return (
    <>
      <Navbar />
      {/* <div
        className="z-10 absolute top-48 right-0 w-full h-[806px] transform bg-yellow-100"
        style={{
          clipPath: 'polygon(100% 16%, 0 100%, 100% 100%)',
        }}
      ></div> */}

      <ReactangleLayout className="bg-amber-50">
        <Hero />
        <Features />
      </ReactangleLayout>

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

export default Home;
