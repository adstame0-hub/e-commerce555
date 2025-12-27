
import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
  { id: 1, name: "นิยาย (Fiction)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/fiction.png" },
  { id: 2, name: "การ์ตูน (Manga)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/comics-manga.png" },
  { id: 3, name: "หนังสือเรียน (Textbooks)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/textbooks.png" },
  { id: 4, name: "พัฒนาตนเอง (Self-Help)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/self-development-self-help.png" },
  { id: 5, name: "ภาษา (Language)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/language.png" },
  { id: 6, name: "วรรณกรรม (Literature)", image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/literature.webp" },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-2">รับซื้อตามหมวดหมู่</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">เรารับซื้อหนังสือหลากหลายประเภท สภาพดี-พอใช้ ยินดีตีราคาให้ทุกเล่ม</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md mb-4 border-4 border-white group-hover:border-primary transition-all duration-300">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-sans font-bold text-gray-700 group-hover:text-primary transition-colors uppercase tracking-tight text-xs md:text-sm text-center">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
