function FeatureCard({ shape, icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:items-start">
      <div className="relative">
        <div className="absolute top-0 w-45 h-45 -right-5">{shape}</div>
        <div>{icon}</div>
      </div>
      <div className="text-xl font-medium leading-tight text-slate-900">
        <h1>{title}</h1>
      </div>
      <div className="text-center md:text-start">
        <p className="text-lg leading-relaxed text-slate-900">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
