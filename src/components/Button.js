const Button = ({
  icon,
  title = "button",
  className = "btn",
  onClick,
  children,
}) => {
  return (
    <button onClick={onClick} className={className} type="button" title={title}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
