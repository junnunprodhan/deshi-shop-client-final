import Contact from "@/component/ui/Contact/Contact";
import AboutUs from "@/component/ui/Home/AboutUs";
import Brand from "@/component/ui/Home/Brand";
// import Carousel from "@/component/ui/Home/Carousel";
import FlashSale from "@/component/ui/Home/FlashSale";
import Gallery from "@/component/ui/Home/Gallery";
import HeroSection from "@/component/ui/Home/HeroSection";
import TrendingProduct from "@/component/ui/Home/TrendingProduct";

const page = () => {
  return (
    <div className=" space-y-32">
     <HeroSection/>
      <FlashSale />
      <Brand />
      <Gallery />
      <TrendingProduct />
      <Contact />
      <AboutUs />
    </div>
  );
};

export default page;
