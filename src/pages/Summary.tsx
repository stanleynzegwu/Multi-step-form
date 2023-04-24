import { useSnapshot } from "valtio";
import state from "../store";
import Button from "../components/Button";
import { useHandleGoBack } from "../Hooks/CustomHooks";
import {
  planAmount,
  monthlyOrYearly,
  selectedAddOns,
  calculateTotal,
  chosenPlanName,
} from "../Utils";

const Summary = () => {
  const handleGoBack = useHandleGoBack();
  const snap = useSnapshot(state);

  console.log(state);
  const addOns = selectedAddOns();
  const { selectedPlan } = snap;

  return (
    <div className="h-[100%] aside flex flex-col justify-between text-black w-[70%] ">
      <div>
        <div className="mb-5">
          <h1 className="header">Finishing up</h1>
          <p className="heading-about">Double check everything looks OK before confirming.</p>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span>{chosenPlanName()}</span>
              <span>change</span>
            </div>
            <span>{`$${planAmount(selectedPlan)}/${monthlyOrYearly(selectedPlan)}`}</span>
          </div>
          {addOns.length > 0 && (
            <div>
              {addOns.map(({ name, amount }, index) => (
                <div className="flex justify-between" key={index}>
                  <span>{name}</span>
                  <span>{`+$${amount}/${monthlyOrYearly(selectedPlan)}`}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between">
            <span>Total (per month)</span>
            <span>{`$${calculateTotal()}/${monthlyOrYearly(selectedPlan)}`}</span>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between">
        <Button text="Go Back" bgColor="" textColor="[#9D9EA2]" action={handleGoBack} />
        <Button text="Confirm" bgColor="bg-[#483EFF]" textColor="white" />
      </div>
    </div>
  );
};

export default Summary;
