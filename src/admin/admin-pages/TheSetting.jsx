import axios from "axios";
import React, { useEffect, useState } from "react";

const api = "http://localhost:5000/api/v1/";

function TheSetting() {
  const [seasons, setSeasons] = useState([]);
  const [seasonId, setSeasonId] = useState("");
  const [currentSeasonId, setCurrentSeasonId] = useState("");

  const getSeasons = async () => {
    try {
      const {
        data: { seasons },
      } = await axios.get(api + "season");
      setSeasons(seasons);
    } catch (error) {
      setError("Error fetching seasons");
    }
  };

  const getCurrentSeason = async () => {
    try {
      const {
        data: {
          season: { id },
        },
      } = await axios.get(api + "setting/currentSeason");
      setCurrentSeasonId(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = async (e) => {
    const selectedSeasonId = e.target.value;
    setSeasonId(selectedSeasonId);

    // Payload for the backend
    const setcurrentseason = {
      seasonId: selectedSeasonId,
    };

    try {
      const { data } = await axios.post(
        api + "setting/currentSeason",
        setcurrentseason
      );
      console.log(data);
    } catch (error) {
      console.error("Error setting current season", error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    getSeasons();
    getCurrentSeason();
  }, []);

  return (
    <div className="flex mt-20">
      <select
        id="season"
        name="season"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
        onChange={(e) => handelChange(e)}
      >
        {seasons.map((season) => (
          <option
            key={season.id}
            value={season.id}
            selected={season.id === currentSeasonId} // Set selected attribute
          >
            {season.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TheSetting;
