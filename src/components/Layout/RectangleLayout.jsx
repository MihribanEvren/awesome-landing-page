const RectangleLayout = ({
  children,
  className = '',
  containerClassName = '',
}) => {
  return (
    <section className={`w-full relative ${className}`}>
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-yellow-100 rectangle-background"></div>
      </div>
      <div
        className={`mx-auto px-4 md:px-20 py-12 md:py-20 relative z-10 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default RectangleLayout;
