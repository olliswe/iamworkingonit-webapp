import { useEffect, useState } from "react";
import { useSpring } from "react-spring";

const useUpdateAnimation = (statusUpdate: any) => {
  const [statusUpdateChange, setStatusUpdateChange] = useState(0);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setStatusUpdateChange(prev => prev + 1);
  }, [statusUpdate?.id]);

  useEffect(() => {
    if (statusUpdateChange > 1) {
      setTrigger(true);
    }
  }, [statusUpdateChange]);

  const [props, set] = useSpring(() => ({
    transform: "scale(1)",
    backgroundColor: "white"
  }));

  useEffect(() => {
    set(
      trigger
        ? {
            transform: "scale(1.05)",
            backgroundColor: "#FEF3C7",
            onRest: () => setTrigger(false)
          }
        : {
            transform: "scale(1)",
            backgroundColor: "white"
          }
    );
  }, [trigger, set]);

  return props;
};

export default useUpdateAnimation;
