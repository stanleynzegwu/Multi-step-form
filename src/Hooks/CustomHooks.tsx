import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// export type Plan =
//   | "monthlyArchade"
//   | "monthlyAdvanced"
//   | "monthlyPro"
//   | "yearlyArchade"
//   | "yearlyAdvanced"
//   | "yearlyPro";
export const useHandleGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return handleGoBack;
};

export const useHandleNavigate = () => {
  const navigate = useNavigate();

  const handleNavigateHome = (state: { number: string }) => {
    useEffect(() => {
      if (!state.number) {
        navigate("/");
      }
    }, [state.number, navigate]);
  };

  return handleNavigateHome;
};
