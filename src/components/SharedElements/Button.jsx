import React from 'react';

const Button = ({
  text = 'Sign up now',
  size = 'm',
  color = 'amber-900',
  outline = true,
  iconLeft = null,
  iconRight = null,
  full = false,
  onClick,
  children,
}) => {
  const sizeStyles = {
    m: {
      button: 'p-3 text-base font-medium',
      text: 'px-4',
      iconButton: 'p-2',
      iconSize: 'w-5 h-5',
    },
    md: {
      button: 'p-3 text-base font-medium',
      text: 'px-4',
      iconButton: 'p-2',
      iconSize: 'w-5 h-5',
    },
    l: {
      button: 'p-4 text-xl font-medium',
      text: 'px-4',
      iconButton: 'p-3',
      iconSize: 'w-6 h-6',
    },
    lg: {
      button: 'p-4 text-xl font-medium',
      text: 'px-4',
      iconButton: 'p-3',
      iconSize: 'w-6 h-6',
    },
    xl: {
      button: 'py-5 px-6 text-2xl font-bold',
      text: 'px-6',
      iconButton: 'p-4',
      iconSize: 'w-7 h-7',
    },
  };
  const colorVariants = {
    'amber-900': 'text-amber-900 border-amber-900',
  };

  const getButtonStyles = () => {
    const sizeStyle = sizeStyles[size] || sizeStyles.m;
    const colorClasses = colorVariants[color] || colorVariants['amber-900'];

    if ((iconLeft || iconRight) && !text && !children) {
      const baseStyles = `flex items-center justify-center rounded-full text-${color} bg-transparent`;

      if (outline) {
        return `${baseStyles} ${sizeStyle.iconButton} border-2 ${colorClasses}`;
      }
      return `${baseStyles} ${sizeStyle.iconButton}`;
    }

    const baseStyles = ` flex items-center justify-center rounded-lg text-${color} bg-transparent leading-6`;
    const selectedSizeStyle = !full
      ? sizeStyle.button
      : 'w-full p-4 text-xl font-medium';

    if (outline) {
      return `${baseStyles} ${selectedSizeStyle} border-2 border-${color}`;
    }
    return `${baseStyles} font-medium px-2 py-3`;
  };

  const getIconWrapperClass = () => {
    const sizeStyle = sizeStyles[size] || sizeStyles.m;
    return iconLeft ? 'mr-2' : 'ml-2';
  };

  return (
    <button onClick={onClick} className={getButtonStyles()}>
      {iconLeft && (
        <span className={getIconWrapperClass()}>
          {React.cloneElement(iconLeft, {
            className: (sizeStyles[size] || sizeStyles.m).iconSize,
          })}
        </span>
      )}
      {(text || children) && (
        <span
          className={outline ? (sizeStyles[size] || sizeStyles.m).text : ''}
        >
          {text || children}
        </span>
      )}
      {iconRight && (
        <span className={getIconWrapperClass()}>
          {React.cloneElement(iconRight, {
            className: (sizeStyles[size] || sizeStyles.m).iconSize,
          })}
        </span>
      )}
    </button>
  );
};

export default Button;
