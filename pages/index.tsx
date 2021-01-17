import { useEffect, useState } from "react";
import AnimatedTerm from "components/AnimatedTerm";

export default function Home() {
  const [addCard, setAddCard] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddCard(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-3">
      <div>
        <span className="text-5xl sm:text-7xl text-white font-logo">
          I AM WORKING ON IT
        </span>
      </div>
      <div className="mt-16 ml-7">
        <span className="text-5xl text-white font-logo">
          Let your team know what you're up to...
        </span>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1">
            <div className="mt-5 mb-4 max-w-4xl" style={{ maxWidth: "41rem" }}>
              <AnimatedTerm />
            </div>
            <span className="text-5xl text-white font-logo">
              ...without ever leaving the terminal
            </span>
          </div>
          <div className="flex-1">{addCard && "Hello"}</div>
        </div>
      </div>
    </div>
  );
}
