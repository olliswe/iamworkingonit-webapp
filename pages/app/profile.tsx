import React from "react";
import TextInput from "components/elements/TextInput";
import useMe from "hooks/useMe";

const Profile = () => {
  const { data } = useMe(true);

  return (
    <div className="w-full sm:w-3/5">
      <span>Email:</span>
      <TextInput
        disabled={true}
        value={data?.user.email}
        wrapperClassName="mb-2"
      />
      <span>First name:</span>
      <TextInput
        disabled={true}
        value={data?.user.firstName}
        wrapperClassName="mb-2"
      />
      <span>Last name:</span>
      <TextInput
        disabled={true}
        value={data?.user.lastName}
        wrapperClassName="mb-2"
      />
    </div>
  );
};

export async function getServerSideProps() {
  return { props: { pageName: "profile" } };
}

export default Profile;
