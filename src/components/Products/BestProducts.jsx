import Button from '../SharedElements/Button';
import Products from '../../data/Products';
import ProductCard from './ProductCard';

function BestProducts() {
  return (
    <div className="bg-bgDark">
      {/* top */}
      <div className="flex items-center justify-between px-20 pt-20 text-white">
        <h2 className="text-[56px] font-extrabold leading-tight">
          The best of the best
        </h2>
        <Button size="xl" color="gray-50"></Button>
      </div>
      {/* bottom */}
      <div>
        {/* backlights */}

        {/* cards */}
        <div className="p-20 text-white">
          <div className="flex items-center justify-center gap-12">
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
