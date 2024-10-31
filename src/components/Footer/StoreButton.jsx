const StoreButton = ({ icon: Icon, storeName, subtitle, href }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2.5 pl-1.5 pr-3 py-1 mb-3 bg-black hover:bg-gray-900 rounded-lg transition-colors border border-white/50"
  >
    <Icon className="w-6 h-6 text-white" />
    <div className="flex flex-col -space-y-1.5">
      <span className="text-[9px] text-gray-200 whitespace-nowrap">
        {subtitle}
      </span>
      <span className="text-base font-medium tracking-wide text-gray-100 whitespace-nowrap">
        {storeName}
      </span>
    </div>
  </a>
);
export default StoreButton;
