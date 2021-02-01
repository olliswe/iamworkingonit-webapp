import { BounceLoader } from "react-spinners";

export const Loader = ({
  color = "white",
  size = 20
}: {
  color?: string;
  size?: number;
}) => <BounceLoader color={color} size={size} />;
