import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

import state from "../store";
import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";
import Button from "../components/Button";
import { useHandleGoBack } from "../Hooks/CustomHooks";

const monthly = [
  { id: "monthlyArchade", icon: iconArcade, amount: "$9/mo", name: "Archade " },
  { id: "monthlyAdvanced", icon: iconAdvanced, amount: "$12/mo", name: "Advanced" },
  { id: "monthlyPro", icon: iconPro, amount: "$15/mo", name: "Pro" },
];
const yearly = [
  { id: "yearlyArchade", icon: iconArcade, amount: "$90/yr", name: "Archade " },
  { id: "yearlyAdvanced", icon: iconAdvanced, amount: "$120/yr", name: "Advanced" },
  { id: "yearlyPro", icon: iconPro, amount: "$150/yr", name: "Pro" },
];

const Plan = () => {
  const snap = useSnapshot(state);
  const Navigate = useNavigate();
  let selectedFrequency = state.frequency === "Monthly" ? monthly : yearly;

  const handleGoBack = useHandleGoBack();

  const handleSetFrequency = () => {
    state.frequency === "Monthly" ? (state.frequency = "Yearly") : (state.frequency = "Monthly");
  };

  return (
    <div className="aside h-[100%] w-[70%] flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="mb-5">
          <h1 className="header">Select your plan</h1>
          <p className="heading-about">You have the option of monthly or yearly billing.</p>
        </div>

        {/* PLAN CARDS */}
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between ">
          {selectedFrequency.map(({ id, icon, amount, name }, index) => (
            <div
              key={index}
              className={`border border-[#483EEC] p-5 w-[30%] h-[12rem] rounded-md flex flex-col justify-between ${
                snap.selectedPlan === id && "bg-[#F8F9FE] border-[#9C9CA4]"
              }`}
              onClick={() => (state.selectedPlan = id)}
            >
              <img className="w-9 h-9" src={icon} alt="icon" />
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[#0B274C]">{name}</span>
                <span className="text-[#9D9EA2]">{amount}</span>
                {id.includes("yearly") && (
                  <span className="font-medium text-[#0B274C]">2 months free</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* TOGGLE PLAN */}
        <div className="flex justify-center items-center gap-5 bg-[#F8F9FE] py-5 rounded-md">
          <span className={`${snap.frequency === "Monthly" && "font-semibold"}`}>Monthly</span>
          {state.frequency === "Monthly" ? (
            <MdToggleOff className={`text-4xl`} onClick={handleSetFrequency} />
          ) : (
            <MdToggleOn className={`text-4xl`} onClick={handleSetFrequency} />
          )}
          <span className={`${snap.frequency === "Yearly" && "font-semibold"}`}>Yearly</span>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="black" action={handleGoBack} />
        <Button
          text="Next Step"
          bgColor="bg-[#042A5B]"
          textColor="white"
          action={() => state.selectedPlan && Navigate("/addOns")}
        />
      </div>
    </div>
  );
};

export default Plan;
