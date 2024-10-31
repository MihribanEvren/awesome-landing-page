import Button from '../SharedElements/Button';
import Products from '../../data/Products';
import ProductCard from './ProductCard';

function BestProducts() {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-20">
      <div className="flex flex-col items-center justify-between text-white md:flex-row">
        <h2 className=" text-[32px] md:text-[56px] font-extrabold leading-[1.1] mb-8 md:mb-0">
          The best of the best
        </h2>
        <Button size="xl" color="gray-50"></Button>
      </div>
      <div>
        {/* backlights */}

        <div className="text-white ">
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
            {Products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
