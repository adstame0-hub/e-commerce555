
import React from 'react';
import { Product } from '../types';
import { Star, Tag } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white group rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            Sale
          </span>
        )}
      </div>

      <div className="p-4 text-center flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-400 text-xs uppercase mb-1">{product.category}</p>
          <h3 className="text-gray-800 font-serif font-medium text-lg leading-snug mb-2 hover:text-primary cursor-pointer line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex justify-center items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < product.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"} 
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-lg font-bold text-gray-900">฿{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">฿{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Button always visible on mobile, visible on group hover on desktop or styled as full width */}
      <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
        <Tag size={16} />
        ลงขายสินค้า
      </button>
    </div>
  );
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, bgColor = "bg-white" }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-2">{title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
