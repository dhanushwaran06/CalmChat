import React, { useState } from "react";
import Header from "../../NavBar/NavBar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Proceed with signup (handle signup logic here)
    console.log("Signing up with", { username, password });
    setError("");
  };

  return (
    <>
    <Header />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign Up
        </h2>
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#007bff] focus:border-[#007bff]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#007bff] focus:border-[#007bff]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-[#007bff] focus:border-[#007bff]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-[#007bff] border border-transparent rounded-full hover:bg-transparent hover:text-[#007bff] hover:border-[#007bff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007bff] transition-all duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
