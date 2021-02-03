import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

export async function getServerSideProps() {
  return { props: { pageName: "profile" } };
}

export default Profile;
