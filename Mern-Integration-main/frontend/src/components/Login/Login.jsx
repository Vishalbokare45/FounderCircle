import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location.href = "/home"
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 p-8">


          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#5F9EA0] mb-4">
              Integration
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-500">
              Uniting startups worldwide, fostering collaboration and growth in one interconnected hub.
            </p>
          </div>


          <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 w-full max-w-md">
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-center text-gray-500 mb-6">
                Welcome Back
              </h2>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"

                  className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#5F9EA0] focus:border-[#5F9EA0] block w-full p-2.5"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Enter Email Address"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"

                  className="bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-[#5F9EA0] focus:border-[#5F9EA0] block w-full p-2.5"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="flex items-start justify-between">

                <a href="#" className="font-medium text-[#5F9EA0] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div>
                {error && (
                  <div
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <span className="font-medium"></span> {error}
                  </div>
                )}

              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#5F9EA0]  font-medium rounded-lg text-lg px-5 py-2.5 "
              >
                Login
              </button>

              <div className=" font-medium text-center text-gray-500">
                New to Integration?{' '}
                <Link to="/register" className="text-[#5F9EA0] hover:underline">
                  Register Now
                </Link>
              </div>
            </form>
          </div>


        </div>
      </div>


    </>
  )
}

export default Login