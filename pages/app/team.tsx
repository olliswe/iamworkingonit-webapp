import React from "react";

const Team = () => {
  return <div>Hello from team</div>;
};

Team.getInitialProps = async () => {
  return { pageName: "Team" };
};

export default Team;
