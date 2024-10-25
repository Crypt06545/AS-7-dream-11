import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = ({ handleSelectPlayer }) => {
  const [cards, setCards] = useState([]);

  // Fetch card data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    // Cards Section
    <div className="w-11/12 mx-auto mt-28 mb-48">
      <h1 className="text-xl font-bold">Available players</h1>
      <div className="w-full grid lg:grid-cols-3 gap-4 p-5">
        {cards.map((card) => {
          return (
            <div
              key={card.player_Id}
              className="border-2 border-gray-400 p-4 rounded-2xl"
            >
              <figure>
                <img
                  className="rounded-2xl h-60 w-full object-cover"
                  src={card.image}
                  alt={card.name}
                />
              </figure>
              <div className="my-2">
                <h2 className="card-title">
                  <i className="fa-solid fa-user fa-fw"></i>
                  {card.name}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <i className="fa-solid fa-flag fa-fw mr-1"></i>
                    <span>{card.country}</span>
                  </div>
                  <div className="bg-[#64d1a4] p-2 rounded-lg">
                    <p className="text-white">{card.role}</p>
                  </div>
                </div>
                <div className="border-b-2 border-gray-400 my-4"></div>
                <p className="font-bold text-gray-400">Rating</p>
                <div className="">
                  {/* batting type  */}
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-400">Batting Type: </h3>
                    <p className="font-bold text-gray-400">
                      {card.batting_type}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-400">Bowling Type: </h3>

                    <p className="font-bold text-gray-400">
                      {card.bowling_type}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold text-gray-400">
                    Price: {card.bidding_price} $
                  </p>
                  <button
                    onClick={() => handleSelectPlayer(card)}
                    className="p-2 hover:bg-[#0BE58A] border-2 border-[#0BE58A] text-white hover:text-black rounded-xl"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Card.propTypes = {
  handleSelectPlayer: PropTypes.func.isRequired,
};

export default Card;
