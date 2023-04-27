import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useSnapshot } from "valtio";
import { Link, useNavigate } from "react-router-dom";

import state from "../store";
import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";
import Button from "../components/Button";
import { useHandleNavigate } from "../Hooks/CustomHooks";
import { returnValidationError } from "../Utils";

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
  const handleNavigateHome = useHandleNavigate();
  handleNavigateHome(state);
  const snap = useSnapshot(state);
  const Navigate = useNavigate();
  let selectedFrequency = state.frequency === "Monthly" ? monthly : yearly;

  const handleSetFrequency = () => {
    state.frequency === "Monthly" ? (state.frequency = "Yearly") : (state.frequency = "Monthly");
  };

  const handleNext = () => {
    !state.selectedPlan
      ? returnValidationError("Please you need to select a plan 😉")
      : Navigate("/addOns");
  };

  return (
    <div className="aside md:h-[100%] flex flex-col justify-between text-black w-[100%] ">
      <div
        className={`flex flex-col absolute ${
          state.frequency === "monthly"
            ? "top-[40%] -translate-y-[40%]"
            : "top-[50%] -translate-y-[50%]"
        } left-[50%] -translate-x-[50%]  md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0 md:relative gap-1 md:gap-5 bg-[#FFFFFF] w-[90%] sm:w-[80%] md:w-[100%] p-2 md:p-0 rounded-lg`}
      >
        <div className="mb-2 md:mb-5">
          <h1 className="header">Select your plan</h1>
          <p className="heading-about">You have the option of monthly or yearly billing.</p>
        </div>

        {/* PLAN CARDS */}
        <div className="flex flex-col gap-2 md:gap-5 md:flex-row sm:justify-between w-[100%]">
          {selectedFrequency.map(({ id, icon, amount, name }, index) => (
            <div
              key={index}
              className={`border hover:border-[#483EEC] p-2 md:p-5 w-[100%] md:w-[30%] md:h-[12rem] rounded-md flex md:flex-col gap-5 md:gap-1.5 max-md:justify-start justify-between cursor-pointer ${
                snap.selectedPlan === id ? "bg-[#F8F9FE] border-[#483EEC]" : "border-[#9D9EA2]"
              }`}
              onClick={() => (state.selectedPlan = id)}
            >
              <img className="w-6 h-6 md:w-9 md:h-9" src={icon} alt="icon" />
              <div className="flex flex-col gap-1 md:gap-2">
                <span className="font-semibold text-[#0B274C] text-sm md:text-[1rem]">{name}</span>
                <span className="text-[#9D9EA2]">{amount}</span>
                {id.includes("yearly") && (
                  <span className="text-sm md:font-medium text-[#0B274C]">2 months free</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* TOGGLE PLAN */}
        <div className="flex justify-center items-center gap-5 bg-[#F8F9FE] py-2 md:py-5 rounded-md">
          <span className={`${snap.frequency === "Monthly" && "font-semibold"}`}>Monthly</span>
          {state.frequency === "Monthly" ? (
            <MdToggleOff className={`text-4xl cursor-pointer`} onClick={handleSetFrequency} />
          ) : (
            <MdToggleOn className={`text-4xl cursor-pointer`} onClick={handleSetFrequency} />
          )}
          <span className={`${snap.frequency === "Yearly" && "font-semibold"}`}>Yearly</span>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-end w-screen left-0 md:w-[100%] absolute bottom-0 bg-[#FFFFFF] md:relative md:bg-transparent max-md:py-2">
        <div className="max-md:w-[80%] max-md:mx-auto flex justify-between items-center max-md:my-1 md:w-[100%]">
          <Link to="/" className="text-[#9D9EA2] hover:text-[#042A5B]">
            Go Back
          </Link>
          <Button text="Next Step" bgColor="bg-[#042A5B]" textColor="white" action={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Plan;
