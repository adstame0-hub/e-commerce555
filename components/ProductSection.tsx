
import React, { useState } from 'react';
import { Product } from '../types';
import { Star, Tag, CheckCircle, MessageCircle, ShieldCheck, X } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  products: Product[];
  bgColor?: string;
  onChatOpen?: (product: Product) => void;
}

const ProductCard: React.FC<{ product: Product; onChatOpen?: (product: Product) => void }> = ({ product, onChatOpen }) => {
  return (
    <div className="bg-white group rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full relative">
      {/* Seller Header Info */}
      {product.seller && (
        <div className="px-3 py-2 bg-gray-50/80 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img src={product.seller.avatar} alt={product.seller.name} className="w-6 h-6 rounded-full object-cover" />
              {product.seller.isVerified && (
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
                  <CheckCircle size={10} className="text-blue-500 fill-blue-500" />
                </div>
              )}
            </div>
            <span className="text-[10px] font-bold text-gray-700 truncate max-w-[80px]">{product.seller.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-accent text-accent" />
            <span className="text-[10px] font-bold text-gray-600">{product.seller.rating}</span>
          </div>
        </div>
      )}

      <div className="relative overflow-hidden aspect-[4/5]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-green-500 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm">
              New Arrival
            </span>
          )}
          {product.seller?.isVerified && (
            <span className="bg-blue-600 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm flex items-center gap-1">
              <ShieldCheck size={10} /> Verified
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <p className="text-primary text-[10px] font-bold uppercase mb-1 tracking-widest">{product.category}</p>
        <h3 className="text-gray-800 font-serif font-bold text-base leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold text-gray-900">฿{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">฿{product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => onChatOpen?.(product)}
              className="flex items-center justify-center gap-1 py-2 px-1 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-bold transition-all"
            >
              <MessageCircle size={14} /> แชทเลย
            </button>
            <button className="bg-primary text-white py-2 px-1 rounded-lg text-xs font-bold hover:bg-secondary transition-all shadow-md">
              ลงขายหนังสือ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, bgColor = "bg-white", onChatOpen }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">{title}</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            ดูทั้งหมด <Tag size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 reveal-stagger">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onChatOpen={onChatOpen} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
