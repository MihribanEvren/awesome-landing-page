import FeatureCard from './FeatureCard';
import Trophy from '../../assets/icons/trophy.svg';
import Tunnel from '../../assets/icons/tunnel.svg';
import TV from '../../assets/icons/tv.svg';
import Shape1 from '../../assets/shapes/Rectangle 25.svg';
import Shape2 from '../../assets/shapes/Rectangle 26.svg';
import Shape3 from '../../assets/shapes/Rectangle 27.svg';

const Features = () => {
  const features = [
    {
      title: 'Nibh viverra',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <img src={Trophy} alt="Trophy icon" />,
      shape: <img src={Shape1} alt="Shape 1" />,
    },
    {
      title: 'Cursus amet',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <img src={Tunnel} alt="Tunnel icon" />,
      shape: <img src={Shape2} alt="Shape 2" />,
    },
    {
      title: 'Ipsum fermentum',
      description:
        'Sit bibendum donec dolor fames neque vulputate non vit aliquam. Consequat turpis natoque leo, massa.',
      icon: <img src={TV} alt="TV icon" />,
      shape: <img src={Shape3} alt="Shape 3" />,
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
          shape={feature.shape}
        />
      ))}
    </div>
  );
};

export default Features;
