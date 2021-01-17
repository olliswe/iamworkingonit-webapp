import React from "react";
import Terminal from "react-animated-term";
import "react-animated-term/dist/react-animated-term.css";

const spinner = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
//
const termLines = [
  {
    text: 'workingon status "Writing tests"',
    cmd: true,
    delay: 50,
  },
  {
    text: "✔ Done",
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
      'Hermione Granger   "Refactoring the Dashboard" on branch feat/deathly-hollows',
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

const AnimatedTerm = () => {
  return <Terminal lines={termLines} interval={80} height={300} />;
};

export default AnimatedTerm;
