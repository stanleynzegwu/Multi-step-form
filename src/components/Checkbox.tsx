// import { useState } from "react";
// import { useSnapshot } from "valtio";
// import state from "../store";

// const Checkbox = ({
//   labelBold,
//   labelThin,
//   amount,
//   checked,
//   name,
// }: {
//   labelBold: string;
//   labelThin: string;
//   amount: string;
//   checked: boolean;
//   name: string;
// }) => {
//   //   const snap = useSnapshot(state);

//   //const [isChecked, setIsChecked] = useState(checked);

//   const handleChange = () => {
//     // setIsChecked((prev) => !prev);
//     if ((name = "online service")) {
//       state["online service"] = !state["online service"];
//     } else if (name === "larger storage") {
//       state["larger storage"] = !state["larger storage"];
//     } else if (name === "customizable profile") {
//       state["customizable profile"] = !state["customizable profile"];
//     }
//   };
//   console.log(state);
//   return (
//     <div className="checkbox-wrapper w-[100%]">
//       <label className="w-[100%] flex">
//         <input type="checkbox" checked={checked} onChange={handleChange} />
//         <div className="w-[100%] flex justify-between">
//           <div className="flex flex-col">
//             <span>{labelBold}</span>
//             <span>{labelThin}</span>
//           </div>
//           <span>{amount}</span>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default Checkbox;
