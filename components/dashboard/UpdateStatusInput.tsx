import React, { useState } from "react";
import { useCreateStatusupdateMutation } from "apollo/codegen";
import CtaInput from "components/elements/CtaInput";

const UpdateStatusInput = () => {
  const [status, setStatus] = useState("");
  const [statusUpdateMutation, { loading }] = useCreateStatusupdateMutation({
    refetchQueries: ["Team"]
  });

  const handleSubmit = () => {
    statusUpdateMutation({ variables: { status } })
      .then(() => {
        setStatus("");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className="mb-6">
      <CtaInput
        input={status}
        cta={"Submit"}
        onChange={setStatus}
        handleSubmit={handleSubmit}
        loading={loading}
        placeholder={"Update status"}
        inputIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        }
      />
    </div>
  );
};

export default UpdateStatusInput;
