// const InpuField = ({ emptyFields, form, handleChange }) => {
//   return (
//     <form className="flex flex-col gap-6 ">
//       <div className="flex flex-col">
//         <div className="flex w-[100%]">
//           <label htmlFor="name" className="w-[50%] text-[#042A5B]">
//             Name
//           </label>
//           {emptyFields.includes("name") && !form.name && (
//             <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
//               <span className="max-sm:hidden">This field is </span>
//               &nbsp;<span>required</span>
//             </span>
//           )}
//         </div>
//         <input
//           className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
//             emptyFields.includes("name") && !form.name && `border-[#FF0000]`
//           }`}
//           type="text"
//           placeholder="e.g Stephen King"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="flex flex-col">
//         <div className="flex w-[100%]">
//           <label htmlFor="name" className="w-[50%] text-[#042A5B]">
//             Email Address
//           </label>
//           {emptyFields.includes("email") && !form.email && (
//             <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
//               <span className="max-sm:hidden">This field is </span>
//               &nbsp;<span>required</span>
//             </span>
//           )}
//         </div>

//         <input
//           className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
//             emptyFields.includes("email") && !form.email && `border-[#FF0000]`
//           }`}
//           type="email"
//           placeholder="e.g stephenking@lorem.com"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="flex flex-col">
//         <div className="flex w-[100%]">
//           <label htmlFor="name" className="w-[50%] text-[#042a5b]">
//             Phone Number
//           </label>
//           {emptyFields.includes("number") && !form.number && (
//             <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
//               <span className="max-sm:hidden">This field is</span>
//               &nbsp;<span>required</span>
//             </span>
//           )}
//         </div>
//         <input
//           className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
//             emptyFields.includes("number") && !form.number && `border-[#FF0000]`
//           }`}
//           type="text"
//           placeholder="e.g +124 9999 000000"
//           name="number"
//           value={form.number}
//           onChange={handleChange}
//         />
//       </div>
//     </form>
//   );
// };

// export default InpuField;
