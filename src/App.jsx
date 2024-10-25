import { useState } from "react";

import Navbar from "./components/Navbar/Navabr";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newslatter/Newsletter";

function App() {
  const [toggleBtn, settoggleBtn] = useState({
    available: true,
    status: "active",
  });


  // handleToggleBtn event listener
const handleToggleBtn = (status) => {
  if (status === 'available') {
    settoggleBtn({
      available: true,
      status: "active",
    });
  } else {
    settoggleBtn({
      available: false,
      status: "selected",
    });
  }
};


  return (
    <>
      <Navbar />
      <Hero toggleBtn={toggleBtn} handleToggleBtn={handleToggleBtn}/>
      <Card />
      <Footer />
      <Newsletter />
    </>
  );
}

export default App;
