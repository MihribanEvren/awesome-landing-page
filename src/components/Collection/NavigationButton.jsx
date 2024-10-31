const NavigationButton = ({ icon: Icon, text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
        flex flex-row items-center gap-8 p-4 rounded-lg transition-all 
        w-64 m-4 md:h-full h-12  text-slate-900
        ${isActive ? 'bg-white shadow-md' : '  hover:bg-gray-300 '}
      `}
  >
    <Icon className="w-6 h-6" />
    <span className="text-xl font-medium whitespace-nowrap">{text}</span>
  </button>
);

export default NavigationButton;
