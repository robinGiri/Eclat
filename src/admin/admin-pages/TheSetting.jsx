import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiConfig } from "../../services/api/config";

function TheSetting() {
  const [seasons, setSeasons] = useState([]);
  const [seasonId, setSeasonId] = useState("");
  const [currentSeasonId, setCurrentSeasonId] = useState("");

  const getSeasons = async () => {
    try {
      const {
        data: { seasons },
      } = await axios.get(`${apiConfig.baseUrl}season`);
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
      } = await axios.get(`${apiConfig.baseUrl}setting/currentSeason`);
      setCurrentSeasonId(id);
      const storedSeasonId = localStorage.getItem("selectedSeasonId");
      setSeasonId(storedSeasonId || id);
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
        `${apiConfig.baseUrl}setting/currentSeason`,
        setcurrentseason
      );
      console.log(data);
      localStorage.setItem("selectedSeasonId", selectedSeasonId);
    } catch (error) {
      console.error("Error setting current season", error);
    }
  };

  useEffect(() => {
    getSeasons();
    getCurrentSeason();
  }, []);

  const sendEmailToAll = async () => {
    try {
      const response = await axios.post(`${apiConfig.emailSendAllUrl}send-email-to-all`, {
        recipient: "abhisekmagarvivo@gmail.com",
        subject: "Confirm",
        text: "Email",
      });

      if (response.status === 200) {
        console.log("Email sent successfully!");
      } else {
        console.log("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="flex m-24 flex-col gap-5">
      <div>
      <select
        id="season"
        name="season"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
        onChange={(e) => handelChange(e)}
        value={seasonId}
      >
        {seasons.map((season) => (
          <option key={season.id} value={season.id}>
            {season.name}
          </option>
        ))}
      </select>
      </div>
      <div>
        <button className="border p-2 rounded-md" onClick={sendEmailToAll}>Bulk Newsletter</button>
      </div>
    </div>
  );
}

export default TheSetting;
