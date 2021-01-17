import { useEffect, useState } from "react";
import AnimatedTerm from "components/AnimatedTerm";
import WorkingOnCard from "components/WorkingOnCard";

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
      <div className="sm:mt-16 sm:ml-7 mt-5 ml-1">
        <span className="text-4xl sm:text-5xl text-white font-logo">
          Let your team know what you're up to...
        </span>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1">
            <div className="mt-5 mb-4 max-w-4xl" style={{ maxWidth: "41rem" }}>
              <AnimatedTerm />
            </div>
            <span className="text-4xl sm:text-5xl text-white font-logo">
              ...without ever leaving the terminal
            </span>
          </div>
          <div className="flex-1 relative mt-5">
            <div
              className={`absolute transition-transform duration-500 ease-in-out`}
              style={{ transform: addCard ? "" : "translateX(200%)" }}
            >
              <WorkingOnCard
                name={"Harry Potter"}
                avatar={"http://i.imgur.com/6Z85fUH.png"}
                status={"Writing tests"}
                lastUpdated={"Just now"}
              />
            </div>
            <div
              className={`absolute transition-transform duration-500 ease-in-out`}
              style={{
                transform: addCard ? "translateY(90px)" : "",
                minHeight: 350,
              }}
            >
              <WorkingOnCard
                name={"Hermione Granger"}
                avatar={"http://i.imgur.com/dOn1izd.png"}
                status={"Upgrading to v7.1"}
                lastUpdated={"30mins ago"}
                githubUrl={
                  "https://github.com/olliswe/iamworkingonit/tree/feat/deathly-hallows"
                }
                className="mb-2"
              />
              <WorkingOnCard
                name={"Ron Weasely"}
                avatar={"http://i.imgur.com/vgrMWkF.png"}
                status={"Having lunch"}
                lastUpdated={"1hr ago"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
