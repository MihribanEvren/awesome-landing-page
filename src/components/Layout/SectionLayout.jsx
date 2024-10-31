const SectionLayout = ({
  children,
  className = '',
  containerClassName = '',
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div
        className={`mx-auto px-4 md:px-20 py-12 md:py-20  ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
