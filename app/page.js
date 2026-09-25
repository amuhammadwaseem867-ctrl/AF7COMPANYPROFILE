import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyProfile from "../components/CompanyProfile";
import Products from "../components/Products";
import Applications from "../components/Applications";
import Manufacturing from "../components/Manufacturing";
import Quality from "../components/Quality";
import Customization from "../components/Customization";
import PackagingDispatch from "../components/PackagingDispatch";
import GlobalBusiness from "../components/GlobalBusiness";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Preloader />

      <Navbar />

      <main>
        <Hero />

        <CompanyProfile />

        <Products />

        <Applications />

        <Manufacturing />

        <Quality />

        <Customization />

        <PackagingDispatch />

        <GlobalBusiness />

        <Contact />
      </main>
    </>
  );
}