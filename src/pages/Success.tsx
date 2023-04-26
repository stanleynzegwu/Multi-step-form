import thankYouIcon from "../assets/icon-thank-you.svg";

const Success = () => {
  return (
    <div className="min-h-[100%] flex flex-col justify-center items-center ">
      <img className="h-50 w-50 mb-10" src={thankYouIcon} alt="good" />
      <span className="text-3xl font-bold mb-6 text-[#2c425d]">Thank you!</span>
      <p className="text-[#9D9EA2] text-center">
        Thanks for confirming your subscription! We hope you have <br /> fun using our platform. If
        you ever need support, please feel
        <br /> free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Success;
