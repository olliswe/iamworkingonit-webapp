import Link from "next/link";
import React, { useState } from "react";
import TextInput from "components/elements/TextInput";
import { ROUTES } from "config/routes";
import { hasEmptyField } from "helpers/utils";
import clsx from "clsx";
import useAuth from "hooks/useAuth";
import { Loader } from "components/elements/Loaders";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    firstName: "",
    lastName: ""
  });
  const { signUp } = useAuth();

  const isInvalid = hasEmptyField(data);
  const passwordsDontMatch =
    data.password &&
    data.repeatPassword &&
    data.password !== data.repeatPassword;

  const isDisabled = isInvalid || passwordsDontMatch || loading;

  const handleChange = (e: any) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await signUp(data);
    if (error) {
      setError(error);
    }
    setLoading(false);
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
            Create a new account
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <div>
            <div className="text-yellow-500 text-xs">
              (More than 4 chars, at least one upper-cased, at least one special
              char)
            </div>
            <TextInput
              placeholder="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <TextInput
            placeholder="Repeat password"
            type="password"
            name="repeatPassword"
            value={data.repeatPassword}
            onChange={handleChange}
            error={passwordsDontMatch && "Passwords don't match!"}
          />
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3"}>
            <TextInput
              placeholder="First name"
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
            <TextInput
              placeholder="Last name"
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={ROUTES.LOGIN}>
                <a className="font-medium text-yellow-600 hover:text-yellow-500">
                  Sign in instead
                </a>
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={clsx(
                "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md h-10",
                isDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              )}
              disabled={isDisabled}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className={clsx(
                    "h-5 w-5",
                    isDisabled
                      ? "text-gray-500"
                      : "text-yellow-500 group-hover:text-yellow-400"
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
              {loading ? <Loader /> : "Sign up"}
            </button>
          </div>
          <div className="h-2 text-center text-red-700 mt-1">
            {error && "Sorry, something went wrong!"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
