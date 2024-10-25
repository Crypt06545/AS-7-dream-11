import { useState } from "react";
import Navbar from "./components/Navbar/Navabr";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newslatter/Newsletter";
import SelectP from "./components/SelectPlayer/SelectP";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toggleBtn, settoggleBtn] = useState({
    available: true,
    status: "active",
  });

  const [coinBalance, setCoinBalance] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleCoinBalance = (balance) => {
    setCoinBalance(balance);
  };
  //  handle available toggel
  const handleToggleBtn = (status) => {
    settoggleBtn({
      available: status === "available",
      status: status === "available" ? "active" : "selected",
    });
  };


  // Function to handle player selection
  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.warning("You can only select a maximum of 6 players.");
      return;
    }

    const alreadySelected = selectedPlayers.find(
      (selected) => selected.player_Id === player.player_Id
    );

    if (alreadySelected) {
      toast.error("Player is already selected!");
    } else if (coinBalance < player.bidding_price) {
      toast.error("Insufficient coins to select this player!");
    } else {
      // Subtract the price from coin balance
      setCoinBalance(coinBalance - player.bidding_price);
      // Add the player
      setSelectedPlayers([...selectedPlayers, player]);
      toast.success("Player selected successfully!");
    }
  };

  // remove a selected player
  const handleRemovePlayer = (player) => {
    setSelectedPlayers((prevPlayers) =>
      prevPlayers.filter((selected) => selected.player_Id !== player.player_Id)
    );
    toast.success("Player removed successfully!");
  };

  return (
    <>
      <Navbar coinBalance={coinBalance} />
      <Hero
        handleCoinBalance={handleCoinBalance}
        toggleBtn={toggleBtn}
        handleToggleBtn={handleToggleBtn}
        selectedPlayers={selectedPlayers}
      />
      {toggleBtn.available ? (
        <Card handleSelectPlayer={handleSelectPlayer} />
      ) : (
        <SelectP
          selectedPlayers={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer}
          handleToggleBtn={handleToggleBtn}
          toggleBtn={toggleBtn}
        />
      )}

      <Footer />
      <Newsletter />
    </>
  );
}

export default App;
