const TestimonialCard = ({ logo, description, person }) => {
  return (
    <div className="flex flex-col w-[319px] h-[296px] md:h-[430px] md:w-[384px] p-4 md:p-8 bg-white rounded-2xl shadow-lg">
      <div className="w-full h-16 py-4 md:my-6">
        <img src={logo} alt="Company logo" className="" />
      </div>

      <div className="flex-1">
        <p className="text-base leading-relaxed md:text-2xl">{description}</p>
      </div>

      <div className="flex items-center pt-4 space-x-3">
        <img
          src={person.avatar}
          alt={person.name}
          className="object-cover w-16 h-16 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-medium leading-relaxed text-gray-900">
            {person.name}
          </h4>
          <p className="text-base text-gray-600">{person.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
