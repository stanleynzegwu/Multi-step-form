import { iconArcade, iconAdvanced, iconPro } from '../assets'

const plan = {
  monthly:[
    { id: "monthlyArchade", icon: iconArcade, amount: "$9/mo", name: "Archade " },
    { id: "monthlyAdvanced", icon: iconAdvanced, amount: "$12/mo", name: "Advanced" },
    { id: "monthlyPro", icon: iconPro, amount: "$15/mo", name: "Pro" },
  ], 
  yearly:[
    { id: "yearlyArchade", icon: iconArcade, amount: "$90/yr", name: "Archade " },
    { id: "yearlyAdvanced", icon: iconAdvanced, amount: "$120/yr", name: "Advanced" },
    { id: "yearlyPro", icon: iconPro, amount: "$150/yr", name: "Pro" },
  ]
}


const addOnArray = [{
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
export { plan, addOnArray }