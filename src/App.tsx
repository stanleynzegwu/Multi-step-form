import { Routes, Route } from "react-router-dom";
import Tab from "./components/Tab";
import InfoField from "./components/InfoField";
import Plan from "./components/Plan";
import { AddOns } from "./pages";

function App() {
  return (
    <div className="max-w-[1500px] h-screen my-0 mx-auto min-h-screen p-5 w-[100%] flex items-center justify-center">
      <div className="flex h-[100%] w-[100%] rounded-md">
        <Tab />
        <div className="px-40 py-10 w-[100%] ">
          <Routes>
            <Route path="/" element={<InfoField />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addOns" element={<AddOns />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
