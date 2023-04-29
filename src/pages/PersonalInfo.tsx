import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { state } from "../store";
import Button from "../components/Button";
import { isValidEmail, isValidPhoneNumber, returnValidationError } from "../Utils";

const PersonalInfo = () => {
  let [emptyFields, setEmptyFields] = useState<string[]>([]);
  let { name, email, number } = state;
  const [form, setForm] = useState({ name, email, number });
  const Navigate = useNavigate();

  const handleNext = () => {
    const emptyInputArray = Object.entries(form).filter(([_, value]) => !value);
    if (emptyInputArray.length) {
      setEmptyFields(emptyInputArray.map(([key, _]) => key));
    } else if (!isValidEmail(form.email)) {
      returnValidationError("Ouch 🙃 Email is not valid");
      return;
    } else if (!isValidPhoneNumber(form.number)) {
      returnValidationError("Ouch 🙃 Phone Number is not valid");
      return;
    } else {
      const { name, email, number } = form;
      state.name = name;
      state.email = email;
      state.number = number;
      Navigate("/plan");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setForm((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return (
    <div className="aside md:h-[100%] flex flex-col justify-between text-black w-[100%] ">
      <div className="w-[80%] max-xs:w-[90%] md:w-[100%] absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0 md:relative bg-[#FFFFFF] rounded-lg p-5 md:p-0">
        <div className="mb-5">
          <h1 className="header">Personal info</h1>
          <p className="heading-about">Please provide your name, email address, and phone number</p>
        </div>

        <form className="flex flex-col gap-6 ">
          <div className="flex flex-col">
            <div className="flex w-[100%]">
              <label htmlFor="name" className="w-[50%] text-[#042A5B]">
                Name
              </label>
              {emptyFields.includes("name") && !form.name && (
                <span className="w-[50%] flex justify-end text-Strawberry-red font-medium">
                  <span className="max-sm:hidden">This field is </span>
                  &nbsp;<span>required</span>
                </span>
              )}
            </div>
            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
                emptyFields.includes("name") && !form.name && `border-Strawberry-red`
              }`}
              type="text"
              placeholder="e.g Stephen King"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex w-[100%]">
              <label htmlFor="name" className="w-[50%] text-[#042A5B]">
                Email Address
              </label>
              {emptyFields.includes("email") && !form.email && (
                <span className="w-[50%] flex justify-end text-Strawberry-red font-medium">
                  <span className="max-sm:hidden">This field is </span>
                  &nbsp;<span>required</span>
                </span>
              )}
            </div>

            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
                emptyFields.includes("email") && !form.email && `border-Strawberry-red`
              }`}
              type="email"
              placeholder="e.g stephenking@lorem.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <div className="flex w-[100%]">
              <label htmlFor="name" className="w-[50%] text-[#042a5b]">
                Phone Number
              </label>
              {emptyFields.includes("number") && !form.number && (
                <span className="w-[50%] flex justify-end text-Strawberry-red font-medium">
                  <span className="max-sm:hidden">This field is</span>
                  &nbsp;<span>required</span>
                </span>
              )}
            </div>
            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-1 md:p-2 ${
                emptyFields.includes("number") && !form.number && `border-Strawberry-red`
              }`}
              type="text"
              placeholder="e.g +124 9999 000000"
              name="number"
              value={form.number}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end w-screen left-0 md:w-[100%] absolute bottom-0 bg-[#FFFFFF] md:relative md:bg-transparent max-md:py-2">
        <div className="max-md:w-[80%] max-md:mx-auto max-md:text-end max-md:my-3">
          <Button
            text="Next Step"
            bgColor="bg-[#042A5B]"
            textColor="white"
            hoverBgColor="bg-[#243f62]"
            action={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
