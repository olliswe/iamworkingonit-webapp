import clsx from "clsx";

export const buttonClasses = ({ isDisabled }: { isDisabled: boolean }) => ({
  button: isDisabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : "text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-yellow-500",
  icon: isDisabled
    ? "text-gray-500"
    : "text-yellow-500 group-hover:text-yellow-400"
});

export const getTabClassName = (active: boolean) =>
  clsx(
    active
      ? "border-yellow-500 text-yellow-600"
      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ",
    "w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
  );
