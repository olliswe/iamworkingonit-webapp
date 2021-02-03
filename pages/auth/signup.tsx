import Link from "next/link";
import React from "react";
import TextInput from "components/elements/TextInput";
import { ROUTES } from "config/routes";

const Login = () => {
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
        <form className="mt-8 space-y-6" action="#" method="POST">
          <TextInput placeholder={"Email"} type={"email"} />
          <TextInput placeholder={"Password"} type={"password"} />
          <TextInput placeholder={"Repeat password"} type={"password"} />
          <div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3"}>
            <TextInput placeholder={"First name"} type={"text"} />
            <TextInput placeholder={"Last name"} type={"text"} />
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400"
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
