import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Tab from "./components/Tab";
import { AddOns, PersonalInfo, Plan, Success, Summary } from "./pages";

function App() {
  return (
    <div className="container font-ubuntu h-screen max-xs:h-[680px] max-w-[1500px] overflow-hidden md:p-5 w-screen md:mx-auto flex items-center justify-center relative bg-[#EEF5FF] md:bg-[#FFFFFF]">
      <ToastContainer limit={1} />
      <div className="flex flex-col h-full md:flex-row w-screen rounded-2xl">
        <Tab />

        <div className="sm:p-10 md:px-20 lg:px-40 w-[100%] md:w-[80%] bg-[#EEF5FF] md:bg-[#FFFFFF]">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addOns" element={<AddOns />} />
            <Route path="/success" element={<Success />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
