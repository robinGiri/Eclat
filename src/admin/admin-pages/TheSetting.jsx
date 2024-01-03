import React from "react";

function TheSetting() {
  return (
    <div className="flex mt-20">
      <select
        id="season"
        name="season"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
      >
        <option value="">Choose season</option>
        <option value="dashain">Dashain</option>
        <option value="tihar">Tihar</option>
        <option value="christmas">Christmas</option>
        <option value="school">School Opening</option>
        <option value="marriage">Marriage</option>
      </select>
    </div>
  );
}

export default TheSetting;
