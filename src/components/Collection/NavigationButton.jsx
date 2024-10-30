const NavigationButton = ({ icon: Icon, text, isActive }) => (
  <button
    className={`
        flex flex-row items-center gap-8 p-4 rounded-lg transition-all 
        w-64 m-4 md:h-full h-12 shadow-md 
        ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'bg-white text-slate-900 hover:bg-gray-50'
        }
      `}
  >
    <Icon className="w-6 h-6" />
    <span className="text-xl font-medium whitespace-nowrap">{text}</span>
  </button>
);

export default NavigationButton;
