import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import Button from "../components/Button";
import { useHandleGoBack, useHandleNavigate } from "../Hooks/CustomHooks";

const AddOns = () => {
  const handleNavigateHome = useHandleNavigate();
  handleNavigateHome(state);

  const Navigate = useNavigate();
  const snap = useSnapshot(state);
  const handleGoBack = useHandleGoBack();
  let { onlineService, largerStorage, customizableProfile } = snap;
  const [isCheckedArray, setIsCheckedArray] = useState<{
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }>({
    onlineService,
    largerStorage,
    customizableProfile,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setIsCheckedArray((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };
  const handleNext = () => {
    const { onlineService, largerStorage, customizableProfile } = isCheckedArray;
    state.onlineService = onlineService;
    state.largerStorage = largerStorage;
    state.customizableProfile = customizableProfile;
    Navigate("/summary");
  };
  console.log(state);
  function checkPlan(num: number): string {
    return snap.selectedPlan.includes("monthly") ? `+$${num}/mo` : `+$${num}0/yr`;
  }

  return (
    <div className="h-[100%] aside flex flex-col justify-between text-black w-[70%] ">
      <div>
        <div className="mb-5">
          <h1 className="header">Pick add-ons</h1>
          <p className="heading-about">Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="flex flex-col gap-5">
          {/* FIRST CHECKBOX */}
          <div
            className={`w-[100%] border-[1px] border-[#342db3] p-5 rounded-md ${
              isCheckedArray.onlineService && "bg-[#F8F9FE]"
            }`}
          >
            <label className="w-[100%] flex items-center">
              <input
                type="checkbox"
                checked={isCheckedArray.onlineService}
                name="onlineService"
                onChange={handleChange}
                className={`${
                  isCheckedArray.onlineService && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-5 rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0B274C]">{"Online service"}</span>
                  <span className="text-[#9D9EA2]">{"Access to multiple games"}</span>
                </div>
                <span className="flex items-center text-[#483EEC]">{checkPlan(1)}</span>
              </div>
            </label>
          </div>
          {/* SECOND CHECKBOX */}
          <div
            className={`w-[100%] border-[1px] border-[#342db3] p-5 rounded-md ${
              isCheckedArray.largerStorage && "bg-[#F8F9FE]"
            }`}
          >
            <label className="w-[100%] flex items-center">
              <input
                type="checkbox"
                checked={isCheckedArray.largerStorage}
                name="largerStorage"
                onChange={handleChange}
                className={`${
                  isCheckedArray.largerStorage && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-5 rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0B274C]">{"Larger storage"}</span>
                  <span className="text-[#9D9EA2]">{"Extra 1T of file save"}</span>
                </div>
                <span className="flex items-center text-[#483EEC]">{checkPlan(2)}</span>
              </div>
            </label>
          </div>
          {/* THIRD CHECKBOX */}
          <div
            className={`w-[100%] border-[1px] border-[#342db3] p-5 rounded-md ${
              isCheckedArray.customizableProfile && "bg-[#F8F9FE]"
            }`}
          >
            <label className="w-[100%] flex items-center">
              <input
                type="checkbox"
                checked={isCheckedArray.customizableProfile}
                name="customizableProfile"
                onChange={handleChange}
                className={`${
                  isCheckedArray.customizableProfile && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-5 rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0B274C]">{"Customizable profile"}</span>
                  <span className="text-[#9D9EA2]">{"Custom theme on your profile"}</span>
                </div>
                <span className="flex items-center text-[#483EEC]">{checkPlan(2)}</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="[#9D9EA2]" action={handleGoBack} />
        <Button text="Next Step" bgColor="bg-[#042A5B]" textColor="white" action={handleNext} />
      </div>
    </div>
  );
};

export default AddOns;
