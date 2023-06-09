const Button = ({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  action,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  action?: any;
}) => {
  return (
    <button
      className={`${bgColor} text-${textColor} hover:${hoverBgColor} px-4 py-2 rounded-md`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
