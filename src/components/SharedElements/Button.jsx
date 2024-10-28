const Button = ({
  text = 'Sign up now',
  size = 'm',
  outline = true,
  iconLeft = null,
  iconRight = null,
  onClick,
}) => {
  const sizeStyles = {
    m: {
      button: 'p-3 text-base font-medium',
      text: 'px-4',
    },
    l: {
      button: 'p-4 text-xl font-medium',
      text: 'px-4',
    },
    xl: {
      button: 'py-5 px-6 text-2xl font-bold',
      text: 'px-6',
    },
  };

  const getButtonStyles = () => {
    const baseStyles =
      'flex items-center justify-center rounded-lg text-amber-900 bg-transparent leading-6';
    const selectedSizeStyle = sizeStyles[size].button;

    if (outline) {
      return `${baseStyles} ${selectedSizeStyle} border-2 border-amber-900   hover:bg-amber-100`;
    }

    return `${baseStyles} font-medium px-2 py-3`;
  };

  return (
    <button onClick={onClick} className={getButtonStyles()}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      <div className={outline ? sizeStyles[size].text : ''}>{text}</div>
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
