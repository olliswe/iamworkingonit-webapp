export const buttonClasses = ({ isDisabled }: { isDisabled: boolean }) => ({
  button: isDisabled
    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
    : "text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-yellow-500",
  icon: isDisabled
    ? "text-gray-500"
    : "text-yellow-500 group-hover:text-yellow-400"
});
