import { ToastContainer as OrigContainer } from "react-toastify";

const contextClass = {
  success: "bg-yellow-500",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-yellow-500",
  dark: "bg-white-600 font-gray-300"
} as const;

const ToastContainer = () => {
  return (
    <OrigContainer
      toastClassName={(
        input:
          | {
              type?: keyof typeof contextClass;
            }
          | undefined
      ) =>
        contextClass[input?.type || "default"] +
        " flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer shadow-xl mb-3"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default ToastContainer;
