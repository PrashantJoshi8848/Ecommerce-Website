import React from "react";
import Announcement from "../COmponent/Announcement";
import Categories from "../COmponent/Categories";
import Footer from "../COmponent/footer";
import Navbar from "../COmponent/Navbar";
import NewsLetter from "../COmponent/NewsLetter";
import Products from "../COmponent/Products";
import Slider from "../COmponent/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
