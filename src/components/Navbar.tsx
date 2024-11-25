import React, { useState } from "react";
import { Film, MailIcon } from "lucide-react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline"; // Correct imports
import AuthModal from "./AuthModel";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <nav className="bg-black text-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <Link
                to="/"
                className="flex items-center space-x-2 logo-container group"
              >
                <Film className="h-8 w-8 text-orange-500 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-orange-400 drop-shadow-md" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300 ease-in-out drop-shadow-md">
                  Hovie
                </span>
              </Link>
            </div>

            <div className="hidden md:flex space-x-6">
              <Link
                to="/movies"
                className="hover:text-orange-500 transition-colors"
              >
                Movies
              </Link>
              <Link
                to="/showtimes"
                className="hover:text-orange-500 transition-colors"
              >
                Showtimes
              </Link>
              <Link
                to="/lists"
                className="hover:text-orange-500 transition-colors"
              >
                Lists
              </Link>
              <Link
                to="/groups"
                className="hover:text-orange-500 transition-colors"
              >
                Groups
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-sm font-medium text-white hover:text-orange-500 transition-colors"
              >
                Log in
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="px-4 py-2 text-sm font-medium bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <h2 className="text-2xl text-gray-700 flex justify-center items-center font-bold mb-4">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <div className="mt-2 relative">
                  <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 text-gray-800"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4 relative">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="mt-2 relative">
                  <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 text-gray-800"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>

            <div className="mt-4">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
                useOneTap
                shape="pill"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-black/90 absolute top-16 left-0 w-full p-4 z-40`}
      >
        <div className="flex flex-col items-start space-y-4 mt-4 px-4">
          <a href="/movies" className="text-white hover:text-orange-500">
            Movies
          </a>
          <a href="/showtimes" className="text-white hover:text-orange-500">
            Showtimes
          </a>
          <a href="/lists" className="text-white hover:text-orange-500">
            Lists
          </a>
          <a href="/groups" className="text-white hover:text-orange-500">
            Groups
          </a>
        </div>
      </div>

      {/* Sign Up Modal */}
      <AuthModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        type="signup"
      />
    </GoogleOAuthProvider>
  );
}