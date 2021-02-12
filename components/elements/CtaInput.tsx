import React from "react";
import clsx from "clsx";
import { buttonClasses } from "helpers/classes";
import { Loader } from "components/elements/Loaders";

interface ICtaInput {
  input: string;
  onChange: (input: string) => void;
  handleSubmit: () => void;
  loading: boolean;
  placeholder: string;
  label?: string;
  inputIcon: any;
  cta: string;
}

const CtaInput = ({
  input,
  onChange,
  handleSubmit,
  loading,
  placeholder,
  label,
  inputIcon,
  cta
}: ICtaInput) => {
  const isDisabled = !input || loading;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
      method="POST"
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="rounded-md flex shadow-sm ">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {inputIcon}
          </div>
          <input
            onChange={e => onChange(e.target.value)}
            type="text"
            name="status"
            value={input}
            className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder={placeholder}
          />
        </div>
        <button
          disabled={isDisabled}
          type="submit"
          className={clsx(
            buttonClasses({ isDisabled }).button,
            "-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border text-sm font-medium rounded-r-md focus:ring-1 focus:ring-2 focus:ring-border-primary-500"
          )}
        >
          {loading ? (
            <Loader />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={clsx(
                "h-5 w-5",
                isDisabled ? "text-gray-500" : "text-white"
              )}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          <span>{cta}</span>
        </button>
      </div>
    </form>
  );
};

export default CtaInput;
