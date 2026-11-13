import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Pullers from "../components/Pullers";
import Manufacturing from "../components/Manufacturing";
import Technology from "../components/Technology";
import Finishes from "../components/Finishes";
import Quality from "../components/Quality";
import Customization from "../components/Customization";
import Applications from "../components/Applications";
import WhyAF7 from "../components/WhyAF7";
import Purpose from "../components/Purpose";
import Packaging from "../components/Packaging";
import Contact from "../components/Contact";
import { SmoothScroll } from "../components/motion";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <Pullers />
        <Manufacturing />
        <Technology />
        <Finishes />
        <Quality />
        <Customization />
        <Applications />
        <WhyAF7 />
      
        <Purpose />
        <Contact />
      </main>
    </>
  );
}
