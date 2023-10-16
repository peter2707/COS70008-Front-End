import React from "react";
import { Link } from "react-router-dom";

export default function ContentError() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
        <div className="mb-6">
            <img className="w-64 h-64" src="/assets/images/fingerprint.svg" alt="fingerprint"/>
        </div>
      <h2>Please login to view topics</h2>
      <button className="font-medium bg-primaryLight text-primary px-4 py-2 rounded-full mt-2">
        <Link to="/login">Login now</Link>
      </button>
    </div>
  );
}
