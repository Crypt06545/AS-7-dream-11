import PropTypes from "prop-types";

const ToggleBtn = ({ handleToggleBtn, toggleBtn, selectedPlayers }) => {
  return (
    <div className="absolute -mb-[650px] md:ml-[700px] ">
      <div className="flex justify-center gap-4 items-center sticky z-40">
        {/* Available button */}
        <button
          onClick={() => handleToggleBtn("available")}
          className={`btn border-2 px-4 py-2 ${
            toggleBtn.available
              ? "bg-[#64d1a4] text-white"
              : "border-[#0BE58A] text-[#0BE58A]"
          }`}
        >
          Available
        </button>

        {/* Selected button */}
        <button
          onClick={() => handleToggleBtn("selected")}
          className={`btn border-2 px-4 py-2 ${
            !toggleBtn.available
              ? "bg-[#64d1a4] text-white"
              : "border-[#0BE58A] text-[#0BE58A]"
          }`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
    </div>
  );
};

// Define prop types
ToggleBtn.propTypes = {
  handleToggleBtn: PropTypes.func.isRequired,
  toggleBtn: PropTypes.shape({
    available: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      player_Id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      bidding_price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ToggleBtn;
