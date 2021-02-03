import React from "react";

const Team = () => {
  return <div>Hello from team</div>;
};

export async function getServerSideProps() {
  return { props: { pageName: "team" } };
}

export default Team;
