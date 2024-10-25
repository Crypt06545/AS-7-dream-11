import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { toast } from "react-toastify";

const Hero = ({ handleToggleBtn, toggleBtn, handleCoinBalance }) => {
  const claimCoins = () => {
    // Display a success toast message
    toast.success("6000000 coins claimed successfully");
    handleCoinBalance(prevBalance => prevBalance + 6000000); 
  };

  return (
    <div
      className="w-11/12 mx-auto my-11 bg-cover bg-center flex justify-center items-center bg-black relative"
      style={{
        backgroundImage: "url('./bg-shadow.png')",
        borderRadius: 24,
        height: 550,
      }}
    >
      <div className="flex flex-col justify-center items-center text-center p-4">
        <div className="my-4">
          <img src="./banner-main.png" alt="" />
        </div>
        <h1 className="font-bold text-3xl lg:text-4xl text-white">
          Assemble Your Ultimate Dream 11 Cricket Team{" "}
        </h1>
        <p className="text-center font-medium text-xl text-gray-400 mt-4">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="flex justify-center items-center mt-8 gap-7 border-2 border-[#E7FE29] rounded-2xl p-2">
          <button
            onClick={claimCoins}
            className="bg-[#E7FE29] text-black p-4 rounded-xl text-xl font-bold hover:bg-[#c1fa3b]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
      <ToggleBtn toggleBtn={toggleBtn} handleToggleBtn={handleToggleBtn} />
    </div>
  );
};

export default Hero;
