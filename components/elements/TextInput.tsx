import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  label?: string;
  error?: any;
}

const TextInput = ({
  wrapperClassName = "",
  label,
  error,
  ...rest
}: ITextInput) => {
  return (
    <div className={wrapperClassName || ""}>
      {label && (
        <label
          htmlFor={rest.name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          className={clsx(
            !error
              ? "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
              : "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md",
            rest.disabled && "text-gray-400 bg-gray-100 cursor-not-allowed",
            rest.readOnly && "cursor-not-allowed"
          )}
          {...rest}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <p className="mt-1 pl-3 h-1 text-sm text-red-600">{error}</p>
    </div>
  );
};

export default TextInput;
