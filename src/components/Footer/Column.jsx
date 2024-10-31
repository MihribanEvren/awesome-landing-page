const Column = ({ title, children }) => (
  <div className="flex flex-col items-center w-full md:items-start md:w-auto">
    <h3 className="mb-4 text-base font-medium text-white">{title}</h3>
    <div className="flex flex-col items-center w-full mb-8 space-y-2 md:mb-0 md:items-start">
      {children}
    </div>
  </div>
);
export default Column;
