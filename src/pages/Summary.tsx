import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../store";
import Button from "../components/Button";
import { useHandleGoBack, useHandleNavigate } from "../Hooks/CustomHooks";
import {
  planAmount,
  monthlyOrYearly,
  selectedAddOns,
  calculateTotal,
  chosenPlanName,
} from "../Utils";

const Summary = () => {
  const handleNavigateHome = useHandleNavigate();
  handleNavigateHome(state);
  const handleGoBack = useHandleGoBack();
  const snap = useSnapshot(state);

  const addOns = selectedAddOns();
  const { selectedPlan } = snap;
  const isMonthylyPlan = selectedPlan.includes("monthly");
  return (
    <div className="h-[100%] aside flex flex-col justify-between text-black w-[70%] ">
      <div>
        <div className="mb-5">
          <h1 className="header">Finishing up</h1>
          <p className="heading-about">Double check everything looks OK before confirming.</p>
        </div>
      </div>

      <div className="">
        <div className="my-10">
          <div className="bg-[#F8F9FE] p-5">
            <div className="flex justify-between items-center border-b-[1px] border-[#9D9EA2]">
              <div className="flex flex-col gap-2">
                <span className="text-[#2c425d] font-semibold">{chosenPlanName()}</span>
                <Link to="/plan" className="text-[#9D9EA2] underline hover:text-[#4c479c] pb-5">
                  Change
                </Link>
              </div>
              <span>{`$${planAmount(selectedPlan)}/${monthlyOrYearly(selectedPlan)}`}</span>
            </div>
          </div>
          {addOns.length > 0 && (
            <div className="bg-[#F8F9FE] flex flex-col gap-3 p-5">
              {addOns.map(({ name, amount }, index) => (
                <div className="flex justify-between" key={index}>
                  <span>{name}</span>
                  <span>{`+$${amount}/${monthlyOrYearly(selectedPlan)}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between p-5">
          <span>{`Total (per ${isMonthylyPlan ? "month" : "year"})`}</span>
          <span>{`$${calculateTotal()}/${monthlyOrYearly(selectedPlan)}`}</span>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="[#9D9EA2]" action={handleGoBack} />
        <Button
          text="Confirm"
          bgColor="bg-[#483EFF]"
          textColor="white"
          hoverBgColor="bg-[#8e8ae6]"
        />
      </div>
    </div>
  );
};

export default Summary;
