import React from "react";
import { Link } from "react-router-dom";

function TheLogout() {
  return (
    <div>
      <div className="w-[10rem] m-10 p-5">
        <p className="flex justify-center p-2 text-2xl font-semibold">Logout</p>
        <div className="flex justify-center gap-4 mt-5">
          <Link to="/">
            <button className="border border-admin-blue p-2 w-[3rem] rounded text-admin-blue">
              Yes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TheLogout;
