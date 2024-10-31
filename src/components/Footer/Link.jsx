const Link = ({ href, children }) => (
  <a
    href={href}
    className="py-2 text-gray-300 transition-colors duration-200 hover:text-white"
  >
    {children}
  </a>
);

export default Link;
