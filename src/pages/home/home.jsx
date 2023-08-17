import React from "react";
import Nav from "../navigation/navigation.jsx";
import HeroSection from "./components/herosection.jsx";
import Categories from "./components/solutions.jsx";
import Topbooks from "./components/topbooks.jsx";
import Featuredbooks from "./components/featuredbooks.jsx";
import Features from "./components/features.jsx";
import Footer from "../navigation/footer.jsx";

function Home() {
  return (
    <>
      <Nav />
      <main className="lg:px-0 ">
        <HeroSection />
        <Categories />
        <Topbooks />
        <Featuredbooks />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
