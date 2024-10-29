function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon */}
      <div>{icon}</div>
      {/* Title */}
      <div className="text-xl font-medium leading-tight text-slate-900">
        <h1>{title}</h1>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg leading-relaxed text-slate-900">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
