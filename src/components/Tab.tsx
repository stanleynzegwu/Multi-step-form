import { useLocation } from "react-router-dom";

const Tab = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <aside
      className={`bg-image-mobile md:bg-image-desktop bg-no-repeat bg-cover object-contain relative min-h-[30%]  md:w-[30%] md:h-[100%] md:rounded-2xl bg-slate-400`}
    >
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[30%] md:top-10 md:left-5 md:-translate-x-0 md:-translate-y-0 text-white flex flex-row md:flex-col gap-5">
        {["your info", "select plan", "add-ons", "summary"].map((val, index) => (
          <div key={index} className="flex gap-5">
            <span
              className={`flex justify-center items-center sm:font-semibold border-2 w-8 h-8 rounded-full ${
                pathname === "/" && index === 0
                  ? "bg-[#BDE2FB] text-black border-none"
                  : pathname === "/plan" && index === 1
                  ? "bg-[#BDE2FB] text-black border-none"
                  : pathname === "/addOns" && index === 2
                  ? "bg-[#BDE2FB] text-black border-none"
                  : pathname === "/summary" && index === 3
                  ? "bg-[#BDE2FB] text-black border-none"
                  : pathname === "/success" && index === 3
                  ? "bg-[#BDE2FB] text-black border-none"
                  : ""
              }`}
            >
              {index + 1}
            </span>
            <div className="uppercase hidden md:block">
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
