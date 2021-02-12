import clsx from "clsx";

export const buttonClasses = ({ isDisabled }: { isDisabled: boolean }) => ({
  button: isDisabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : "text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-500",
  icon: isDisabled
    ? "text-gray-500"
    : "text-primary-500 group-hover:text-primary-400"
});

export const getTabClassName = (active: boolean) =>
  clsx(
    active
      ? "border-primary-500 text-primary-600"
      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ",
    "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
  );
