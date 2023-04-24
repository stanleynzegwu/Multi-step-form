import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import state from "../store";
import Button from "../components/Button";

const PersonalInfo = () => {
  let [emptyFields, setEmptyFields] = useState<string[]>([]);
  let { name, email, number } = state;
  const [form, setForm] = useState({ name, email, number });
  const Navigate = useNavigate();

  const handleNext = () => {
    const emptyInputArray = Object.entries(form).filter(([_, value]) => !value);
    if (emptyInputArray.length) {
      setEmptyFields(emptyInputArray.map(([key, _]) => key));
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
    <div className="h-[100%] aside flex flex-col justify-between text-black w-[70%] ">
      <div>
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
                <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
                  This field is required
                </span>
              )}
            </div>
            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-2 ${
                emptyFields.includes("name") && !form.name && `border-[#FF0000]`
              }`}
              type="text"
              placeholder="Enter your name"
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
                <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
                  This field is required
                </span>
              )}
            </div>

            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-2 ${
                emptyFields.includes("email") && !form.email && `border-[#FF0000]`
              }`}
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex w-[100%]">
              <label htmlFor="name" className="w-[50%] text-[#042A5B]">
                Phone Number
              </label>
              {emptyFields.includes("number") && !form.number && (
                <span className="w-[50%] flex justify-end text-[#FF0000] font-medium">
                  This field is required
                </span>
              )}
            </div>
            <input
              className={`border-[1px] border-[#9D9EA2] focus:outline-none focus:border-[#483EEC] focus:text-[#042A5B] rounded-md p-2 ${
                emptyFields.includes("number") && !form.number && `border-[#FF0000]`
              }`}
              type="text"
              placeholder="+124 9999 000000"
              name="number"
              value={form.number}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-end">
        <Button text="Next Step" bgColor="bg-[#042A5B]" textColor="white" action={handleNext} />
      </div>
    </div>
  );
};

export default PersonalInfo;
