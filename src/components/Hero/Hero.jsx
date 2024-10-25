import ToggleBtn from "../ToggleBtn/ToggleBtn";

const Hero = ({handleToggleBtn}) => {
    return (
      <div
        className="w-11/12 mx-auto my-11 bg-cover bg-center flex justify-center items-center bg-black relative"
        style={{
          backgroundImage: "url('./bg-shadow.png')",
          borderRadius:24,
          height:550,
        }}
      >
        {/* Content inside the Hero section */}
        <div className="flex flex-col justify-center items-center text-center p-4">
            <div className="my-4">
                <img src="./banner-main.png" alt="" />
            </div>
          <h1 className="font-bold text-3xl lg:text-4xl text-white">Assemble Your Ultimate Dream 11 Cricket Team </h1>
          <p className="text-center font-medium text-xl text-gray-400 mt-4">Beyond Boundaries Beyond Limits</p>
          <div className="flex justify-center items-center mt-8 gap-7 border-2 border-[#E7FE29] rounded-2xl p-2">
            <button className=" bg-[#E7FE29] text-black p-4 rounded-xl text-xl font-bold hover:bg-[#c1fa3b]">Claim Free Credit</button>
            
          </div>
        </div>
        <ToggleBtn handleToggleBtn={handleToggleBtn}/>
      </div>
    );
  };
  
  export default Hero;