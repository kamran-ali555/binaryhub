import React from "react";
// import Choose from "../Choose/Choose";
import Counter from "../Counter/Counter";
// import HomePortfolio from "../HomePortfolio/HomePortfolio";
import Services from "../Services/Services";
// import MountainBanner from "../MountainBanner/MountainBanner";
import Hero from "../Hero/Hero";
import About from "../About/About";
// import Header from "../Header/Header";
import FAQ from "../FAQ/FAQ";
import Testimonials from "../Testimonails/Testimonials";
import Footer from "../Footer/Footer";
import HomeBlog from "../home-blog/home-blog";
import Explore from "../Blogs/ExploreBlogs/Explore";

function Home() {
  return (
    <div>
      {/* <Header /> */}
     <Hero /> 
     
      <Explore/> 
     
      <Services />
      <Counter />
      <HomeBlog/>
      <About />
      <Choose />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
