// import thankYouIcon from "../assets/icon-thank-you.svg";

// const Success = () => {
//   return (
//     <div className="min-h-[100%] flex flex-col justify-center items-center z">
//       <img className="h-50 w-50 mb-10" src={thankYouIcon} alt="good" />
//       <span className="text-3xl font-bold mb-6 text-[#2c425d]">Thank you!</span>
//       <p className="text-[#9D9EA2] text-center">
//         Thanks for confirming your subscription! We hope you have <br /> fun using our platform. If
//         you ever need support, please feel
//         <br /> free to email us at support@loremgaming.com.
//       </p>
//     </div>
//   );
// };

// export default Success;

import thankYouIcon from "../assets/icon-thank-you.svg";

const Success = () => {
  return (
    <div className="md:h-[100%] flex justify-center items-center text-black w-[100%] ">
      <div className="w-[80%] max-xs:w-[90%] md:w-full flex flex-col justify-center items-center gap-5 md:gap-0 absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0 md:relative bg-[#FFFFFF] rounded-lg p-6 sm:p-2 md:p-0">
        <img className="h-50 w-50 md:mb-10" src={thankYouIcon} alt="good" />
        <span className="text-[1.5rem] font-[600] md:text-3xl md:font-bold md:mb-6 text-[#2c425d]">
          Thank you!
        </span>
        <p className="text-[#9D9EA2] text-center">
          Thanks for confirming your subscription! We hope you have <br /> fun using our platform.
          If you ever need support, please feel
          <br /> free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Success;
