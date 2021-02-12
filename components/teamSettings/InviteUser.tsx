import React, { useState } from "react";
import { useGenerateSecretMutation } from "apollo/codegen";
import { toast } from "react-toastify";
import CtaInput from "components/elements/CtaInput";
import CopyToClipboard from "react-copy-to-clipboard";

const InviteUser = () => {
  const [generateSecret, { loading }] = useGenerateSecretMutation({
    refetchQueries: ["Team"]
  });
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    generateSecret({ variables: { email } })
      .then(res => {
        toast.success(
          <div>
            <div>Invite email sent to {email}! 👍</div>
            <div className="mt-3">
              <CopyToClipboard
                text={res.data?.generateSecret.secret || ""}
                onCopy={() => toast.success("Copied to clipboard!")}
              >
                <span className="font-bold">Copy secret to clipboard 📑</span>
              </CopyToClipboard>
            </div>
          </div>,
          {
            autoClose: 10000,
            closeOnClick: false
          }
        );
        setEmail("");
      })
      .catch((error: any) => {
        toast.error("Sorry, unable to invite user");
        console.log(error);
      });
  };

  return (
    <CtaInput
      input={email}
      onChange={setEmail}
      handleSubmit={handleSubmit}
      loading={loading}
      placeholder={"foo@bar.com"}
      inputIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-400"
        >
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      }
      cta={"Send"}
      label={"Invite user"}
    />
  );
};

export default InviteUser;
