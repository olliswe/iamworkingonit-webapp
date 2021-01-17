import React, { useEffect, useState } from "react";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const termLines = [
  {
    text: 'workingon status "Writing tests"',
    cmd: true,
    delay: 50,
  },
  {
    text: "✔ Your status was updated",
    cmd: false,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + " Updating status",
        delay: 40,
      };
    }),
  },
  {
    text: "",
    cmd: true,
    delay: 2000,
  },
  {
    text: "workingon show",
    cmd: true,
  },
  {
    text: "Team Hogwarts:",
    cmd: false,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + " Fetching team members",
        delay: 40,
      };
    }),
  },
  {
    text: 'Harry Potter (me)  "Writing Test"',
    cmd: false,
  },
  {
    text:
      'Hermione Granger   "Upgrading to v7.1" on branch feat/deathly-hallows',
    cmd: false,
  },
  {
    text: 'Ron Weasly         "Having Lunch"',
    cmd: false,
  },
  {
    text: "",
    cmd: true,
    delay: 2000,
  },
  {
    text: 'echo "Coming soon..."',
    cmd: true,
    delay: 50,
  },

  {
    text: "Coming soon...",
    cmd: false,
  },
];

const AnimatedTerm = ({ initialDelay = 1000 }: { initialDelay?: number }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(true);
    }, initialDelay);
    return () => clearTimeout(timeout);
  }, [initialDelay]);

  if (!start) {
    return (
      <Terminal
        height={300}
        lines={[
          {
            text: "",
            cmd: true,
          },
        ]}
        key={"emptyTerm"}
      />
    );
  }

  return (
    <Terminal key={"realTerm"} lines={termLines} interval={80} height={300} />
  );
};

export default AnimatedTerm;
