const Button = ({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  action,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  action?: any;
}) => {
  return (
    <button
      className={`${bgColor} text-${textColor} hover:${hoverBgColor} hover:${hoverTextColor} px-4 py-2 rounded-md`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
