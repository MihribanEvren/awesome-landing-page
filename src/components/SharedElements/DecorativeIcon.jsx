import React from 'react';

const Pattern = ({
  color = 'bg-blue-200',
  width = 'w-16',
  height = 'h-16',
  rotation = 'rotate-0',
}) => {
  return (
    <div
      className={`absolute ${width} ${height} ${color} ${rotation} rounded-full opacity-50`}
      style={{ zIndex: -1 }}
    />
  );
};

const DecorativeIcon = ({
  IconComponent,
  patternProps,
  iconSize = 'text-4xl',
}) => {
  return (
    <div className="relative flex items-center">
      <Pattern {...patternProps} />
      <IconComponent className={`z-10 ${iconSize} text-gray-700`} />
    </div>
  );
};

export default DecorativeIcon;
