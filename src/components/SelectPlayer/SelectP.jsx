import React, { useState } from 'react';
import Card from '../Card/Card';

const SelectP = ({ selectedPlayers, handleRemovePlayer }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="mb-96 mt-28 w-11/12 mx-auto">
      {showCard ? (
        <Card />
      ) : (
        <>
          <h1 className="font-bold text-xl">Selected Players ({selectedPlayers.length}/6)</h1>

          {/* Loop over selected players */}
          {selectedPlayers.length > 0 ? (
            selectedPlayers.map((player) => (
              <div
                key={player.player_Id} 
                className="border border-gray-300 p-4 rounded-2xl flex justify-between items-center mt-4"
              >
                <div className="flex">
                  <img
                    className="w-12 object-cover rounded-2xl"
                    src={player.image}
                    alt={player.name}
                  />
                  <div className="flex flex-col ml-5">
                    <h3 className="font-semibold text-xl">{player.name}</h3>
                    <p>{player.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemovePlayer(player)} 
                >
                  <i className="fa-solid fa-trash-can cursor-pointer text-red-500"></i>
                </button>
              </div>
            ))
          ) : (
            <p className='text-red-500 text-xl'>No players selected yet!</p>
          )}

          <div className="mt-8 flex justify-start">
            <div className="border-2 border-[#0BE58A] rounded-2xl p-2">
              <button
                onClick={() => setShowCard(true)} // Update state to show Card component
                className="bg-[#64d1a4] text-black p-4 rounded-xl text-xl font-bold hover:bg-[#64d1a4]"
              >
                Add More Players
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectP;
