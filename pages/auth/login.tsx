import { ROUTES } from "config/routes";
import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { Loader } from "components/elements/Loaders";
import useAuth from "hooks/useAuth";
import { buttonClasses } from "helpers/classes";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (event: any) => {
    setData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const isDisabled = !data.email || !data.password;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await login(data);
    if (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link href="/">
            <h1 className="font-logo text-center text-5xl text-yellow-500 cursor-pointer">
              I AM WORKING ON IT
            </h1>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={ROUTES.SIGNUP}>
                <a className="font-medium text-yellow-600 hover:text-yellow-500">
                  Sign up instead
                </a>
              </Link>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={clsx(
                "focus:ring-2 focus:ring-offset-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md h-10",
                buttonClasses({ isDisabled }).button
              )}
              disabled={isDisabled}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className={clsx(
                    "h-5 w-5",
                    buttonClasses({ isDisabled }).icon
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {loading ? <Loader /> : "Sign in"}
            </button>
            <div className="h-2 text-center text-red-700 mt-1">
              {error && "Sorry, something went wrong!"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
