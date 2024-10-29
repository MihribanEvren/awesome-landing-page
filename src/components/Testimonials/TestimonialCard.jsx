const TestimonialCard = ({ logo, description, person }) => {
  return (
    <div className="flex flex-col h-[430px] w-[384px] p-8 bg-white rounded-2xl shadow-lg">
      <div className="py-4">
        <img src={logo} alt="Company logo" className="w-32 h-8" />
      </div>

      <p className="flex-grow text-2xl leading-relaxed">{description}</p>

      <div className="flex items-center mt-4 space-x-3">
        <img
          src={person.avatar}
          alt={person.name}
          className="object-cover w-16 h-16 rounded-full"
        />
        <div>
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
