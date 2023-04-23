const Button = ({
  text,
  bgColor,
  textColor,
  action,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  action?: any;
}) => {
  return (
    <button className={`bg-[${bgColor}] text-${textColor} px-4 py-2 rounded-md`} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
