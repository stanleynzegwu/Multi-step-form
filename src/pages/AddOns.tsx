import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { useSnapshot } from "valtio";

import state from "../store";
import Button from "../components/Button";
import { useHandleGoBack } from "../Hooks/CustomHooks";

const AddOns = () => {
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
  console.log(isCheckedArray);

  return (
    <div className="h-[100%] aside flex flex-col justify-between text-black w-[70%] ">
      <div>
        <div className="mb-5">
          <h1 className="header">Pick add-ons</h1>
          <p className="heading-about">Add-ons help enhance your gaming experience.</p>
        </div>
        <div>
          {/* FIRST CHECKBOX */}
          <div className="checkbox-wrapper w-[100%]">
            <label className="w-[100%] flex">
              <input
                type="checkbox"
                checked={isCheckedArray.onlineService}
                name="onlineService"
                onChange={handleChange}
                className={`${
                  isCheckedArray.onlineService && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-[0.5em] rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span>{"Online service"}</span>
                  <span>{"Access to multiple games"}</span>
                </div>
                <span>{"+$1/mo"}</span>
              </div>
            </label>
          </div>
          {/* SECOND CHECKBOX */}
          <div className="checkbox-wrapper w-[100%]">
            <label className="w-[100%] flex">
              <input
                type="checkbox"
                checked={isCheckedArray.largerStorage}
                name="largerStorage"
                onChange={handleChange}
                className={`${
                  isCheckedArray.largerStorage && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-[0.5em] rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span>{"Larger storage"}</span>
                  <span>{"Extra 1T of file save"}</span>
                </div>
                <span>{"+$2/mo"}</span>
              </div>
            </label>
          </div>
          {/* THIRD CHECKBOX */}
          <div className="checkbox-wrapper w-[100%]">
            <label className="w-[100%] flex">
              <input
                type="checkbox"
                checked={isCheckedArray.customizableProfile}
                name="customizableProfile"
                onChange={handleChange}
                className={`${
                  isCheckedArray.customizableProfile && "checked"
                } appearance-none w-[1.6em] h-[1.6em] mr-[0.5em] rounded-md border-[0.15em] border-[#9D9EA2] outline-none cursor-pointer `}
              />
              <div className="w-[100%] flex justify-between">
                <div className="flex flex-col">
                  <span>{"Customizable profile"}</span>
                  <span>{"Custom theme on your profile"}</span>
                </div>
                <span>{"+$2/mo"}</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="black" action={handleGoBack} />
        <Button text="Next Step" bgColor="#042A5B" textColor="white" action={handleNext} />
      </div>
    </div>
  );
};

export default AddOns;
