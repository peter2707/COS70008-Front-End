import React from "react";
import { Link } from "react-router-dom";

const PleaseLoginModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-white w-96 rounded-lg p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Please Log In</h2>
        <p className="text-gray-700 mb-6">
          To use this feature, you need to log in to your account.
        </p>
        <button className="bg-primary text-white hover:bg-blue-600 py-2 px-6 rounded-full focus:outline-none">
          <Link to="/login">Log In</Link>
        </button>
        <button
          onClick={onClose}
          className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PleaseLoginModal;
