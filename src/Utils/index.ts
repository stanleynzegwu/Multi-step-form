import state from "../store";
  
type Plan = "monthlyArchade" | "monthlyAdvanced" | "monthlyPro" | "yearlyArchade" | "yearlyAdvanced" | "yearlyPro"

export const planAmount = (selectedPlan:Plan | string) => {

    const selectedPlanAmount = selectedPlan === "monthlyArchade" ? 9 : selectedPlan === "monthlyAdvanced" ? 12 : selectedPlan === "monthlyPro" ? 15 : 
    selectedPlan === "yearlyArchade" ? 90 : selectedPlan === "yearlyAdvanced" ? 120 : selectedPlan === "yearlyPro" ? 150 : 0

    return selectedPlanAmount
}

export const monthlyOrYearly = (selectedPlan:Plan | string) => {
    return selectedPlan.includes('monthly') ? 'mo' : 'yr'
}
export const selectedAddOns = () => {

    let array = [{
            name: "Online service",
            amount: 1
        },{
            name: "Larger storage",
            amount: 2
        },{
            name: "Customizable profile",
            amount: 2
        },
        {
            name: "Online service",
            amount: 10
        },
        {
            name: "Larger storage",
            amount: 20
        },
        {
            name: "Customizable profile",
            amount: 30
        }
    ]

    const arr = Object.entries(state)
    const isMonthly = state.selectedPlan.includes('monthly')
    
    const filteredArr = arr.filter(
        ([key, _]) =>
          (key === "onlineService" && state[key]) ||
          (key === "largerStorage" && state[key]) ||
          (key === "customizableProfile" && state[key])
      );
      return filteredArr.map(([key,_]) => key == "onlineService" && isMonthly ? array[0] :
      key == "largerStorage" && isMonthly ? array[1] : key == "customizableProfile" && isMonthly ? array[2] :
      key == "onlineService" && !isMonthly ? array[3] : key == "largerStorage" && !isMonthly ? array[4] : array[5]
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