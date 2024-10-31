import { LuShoppingCart } from 'react-icons/lu';
import Button from '../SharedElements/Button';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="overflow-hidden shadow-2xl rounded-xl shadow-gray-600">
      <div className="relative">
        <img src={image} alt="Product image" className="w-full h-auto" />
      </div>

      <div className="flex flex-col gap-4 px-8 pt-8 pb-0">
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>

      <div className="p-8">
        <Button
          full={true}
          text="Buy Now"
          color="white"
          iconLeft={<LuShoppingCart />}
        ></Button>
      </div>
    </div>
  );
};

export default ProductCard;
