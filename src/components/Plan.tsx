import state from "../store";
import iconArcade from "../assets/icon-arcade.svg";
import iconAdvanced from "../assets/icon-advanced.svg";
import iconPro from "../assets/icon-pro.svg";
import { BsToggleOn } from "react-icons/bs";
import Button from "./Button";

const Plan = () => {
  console.log(state);
  return (
    <div className="aside h-[100%] w-[70%] flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="mb-5">
          <h1 className="header">Select your plan</h1>
          <p className="heading-about">You have the option of monthly or yearly billing.</p>
        </div>

        {/* PLAN CARDS */}
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          {[
            { icon: iconArcade, amountPerMonth: "$9/mo", name: "Archade " },
            { icon: iconAdvanced, amountPerMonth: "$12/mo", name: "Advanced" },
            { icon: iconPro, amountPerMonth: "$15/mo", name: "Pro" },
          ].map(({ icon, amountPerMonth, name }, index) => (
            <div key={index} className="border border-[#483EEC] p-5 rounded-md">
              <img src={icon} alt="icon" />
              <div className="flex flex-col gap-2">
                <span className="block mb-8">{name}</span>
                <span>{amountPerMonth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* TOGGLE PLAN */}
        <div className="flex justify-center gap-5 bg-[#F8F9FE] py-5 rounded-md">
          <span>Monthly</span>
          <BsToggleOn />
          <span>Yearly</span>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="black" />
        <Button text="Next Step" bgColor="#042A5B" textColor="white" />
      </div>
    </div>
  );
};

export default Plan;
