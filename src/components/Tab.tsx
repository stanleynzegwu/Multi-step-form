import { useLocation } from "react-router-dom";
import bgDesktop from "../assets/desktop.png";
//import bgMobile from "../assets/bg-sidebar-mobile.svg";

const Tab = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <aside className="relative w-[30%] h-[100%]">
      <img
        className="min-h-[100%] max-h-[100%] contain rounded-md"
        src={bgDesktop}
        alt="background"
      />
      <div className="absolute top-10 left-4 text-white flex flex-col gap-5">
        {["your info", "select plan", "add-ons", "summary"].map((val, index) => (
          <div key={index} className="flex gap-5">
            <span
              className={`flex justify-center items-center border-2 w-8 h-8 rounded-full ${
                pathname === "/" && index === 0
                  ? "bg-[#BDE2FB] text-black border-none"
                  : pathname === "/plan" && index === 1
                  ? "bg-[#BDE2FB] text-black border-none"
                  : ""
              }`}
            >
              {index + 1}
            </span>
            <div className="uppercase">
              <span className="font-light">step {index + 1}</span>
              <p className="font-bold">{val}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Tab;
