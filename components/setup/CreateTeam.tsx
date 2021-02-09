import React, { useState } from "react";
import TextInput from "components/elements/TextInput";
import clsx from "clsx";
import { buttonClasses } from "helpers/classes";
import { Loader } from "components/elements/Loaders";
import { useCreateTeamMutation } from "apollo/codegen";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { ROUTES } from "config/routes";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [createTeam, { loading }] = useCreateTeamMutation({
    refetchQueries: ["Team", "User"]
  });
  const router = useRouter();

  const isDisabled = loading || !teamName;

  const handleSubmit = async () => {
    try {
      await createTeam({ variables: { teamName } });
      await router.push(ROUTES.APP_ROOT);
    } catch (e) {
      toast.error("Unable to create team, please try again later!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <p className="text-sm">
          To create a team, please specify the team name:
        </p>
        <TextInput onChange={e => setTeamName(e.target.value)} />
        <button
          type="submit"
          className={clsx(
            "focus:ring-2 focus:ring-offset-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md h-10",
            buttonClasses({ isDisabled }).button
          )}
          disabled={isDisabled}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className={clsx("h-5 w-5", buttonClasses({ isDisabled }).icon)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </span>
          {loading ? <Loader /> : "Create team"}
        </button>
      </div>
    </form>
  );
};

export default CreateTeam;
