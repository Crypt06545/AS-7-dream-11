import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navabr";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newslatter/Newsletter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Footer/>
      <Newsletter/>
    </>
  );
}

export default App;
