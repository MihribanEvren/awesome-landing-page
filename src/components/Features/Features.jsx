import { Trophy, Tv, Sailboat } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: 'Nibh viverra',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <Trophy />,
    },
    {
      title: 'Cursus amet',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <Sailboat />,
    },
    {
      title: 'Ipsum fermentum',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <Tv />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full gap-20 pt-20 mt-20 md:flex-row">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default Features;
