import {state} from "../store";
import { toast } from "react-toastify";

import { addOnArray } from "../constants";
import { Plan } from "../Types";

export const planAmount = (selectedPlan:Plan | string) => {

    const selectedPlanAmount = selectedPlan === "monthlyArchade" ? 9 : selectedPlan === "monthlyAdvanced" ? 12 : selectedPlan === "monthlyPro" ? 15 : 
    selectedPlan === "yearlyArchade" ? 90 : selectedPlan === "yearlyAdvanced" ? 120 : selectedPlan === "yearlyPro" ? 150 : 0

    return selectedPlanAmount
}

export const monthlyOrYearly = (selectedPlan:Plan | string) => {
    return selectedPlan.includes('monthly') ? 'mo' : 'yr'
}

export const selectedAddOns = () => {

    const arr = Object.entries(state)
    const isMonthly = state.selectedPlan.includes('monthly')
    
    const filteredArr = arr.filter(
        ([key, _]) =>
          (key === "onlineService" && state[key]) ||
          (key === "largerStorage" && state[key]) ||
          (key === "customizableProfile" && state[key])
      );
      return filteredArr.map(([key,_]) => key == "onlineService" && isMonthly ? addOnArray[0] :
      key == "largerStorage" && isMonthly ? addOnArray[1] : key == "customizableProfile" && isMonthly ? addOnArray[2] :
      key == "onlineService" && !isMonthly ? addOnArray[3] : key == "largerStorage" && !isMonthly ? addOnArray[4] : addOnArray[5]
      )
}

export const calculateTotal = ():number => {
    let chosenPlanAmount = planAmount(state.selectedPlan)
    let selectedAdds = selectedAddOns()
    const selectedAddOnAmount = selectedAdds.length ? selectedAdds.reduce((acc,{amount}) => acc + amount,0 ) : 0
    return chosenPlanAmount + selectedAddOnAmount
}

export const chosenPlanName = () => {
    const isMonthly = state.selectedPlan.includes('monthly')
    return isMonthly ? `${state.selectedPlan.split('monthly')[1]} (Monthly)`  : `${state.selectedPlan.split('yearly')[1]} (Yearly)`
}

export const defaultStoreState = {
    name: '',
    email: '',
    number: '',
    frequency: 'Monthly',
    selectedPlan: '',
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
}

export const activeNumber = (pathname:string,index: number) => {
     return pathname === "/" && index === 0
      ? "bg-[#BDE2FB] text-black border-none"
      : pathname === "/plan" && index === 1
      ? "bg-[#BDE2FB] text-black border-none"
      : pathname === "/addOns" && index === 2
      ? "bg-[#BDE2FB] text-black border-none"
      : pathname === "/summary" && index === 3
      ? "bg-[#BDE2FB] text-black border-none"
      : pathname === "/success" && index === 3
      ? "bg-[#BDE2FB] text-black border-none"
      : "";
  }

export const isValidEmail = (email:string) => {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    const lastDotIndex = email.length - dotIndex - 1;
  
    return (
      atIndex > 0 && dotIndex > atIndex && lastDotIndex >= 2 && lastDotIndex <= 4
    );
}

export const returnValidationError = (text:string) => {
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    })
}
  