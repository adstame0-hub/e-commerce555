
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gray-100">
      {/* Background Image - Scholarly/Bookstore feel */}
      <img 
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" 
        alt="Library Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-8 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="block text-sm md:text-base tracking-[0.2em] uppercase mb-4 text-accent font-bold">
              Professional Book Buyback Service
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              เปลี่ยนหนังสือเก่า <br />
              <span className="font-light italic text-light">ให้เป็นทุนเล่มใหม่</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-2">
              รับซื้อหนังสือมือสอง ทุกประเภท ให้ราคาสูง ยุติธรรม
            </p>
            <p className="text-3xl md:text-5xl font-bold mb-8">
              เริ่มที่เล่มละ <span className="text-light">฿50 บาท</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-secondary text-white text-sm md:text-base font-bold py-4 px-8 md:px-12 rounded-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                ประเมินราคาฟรี (Sell to Us)
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-sm md:text-base font-bold py-4 px-8 md:px-12 rounded-sm uppercase tracking-widest transition-all duration-300">
                ลงขายหนังสือ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="w-8 h-2 bg-primary rounded-full cursor-pointer"></span>
        <span className="w-2 h-2 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100"></span>
        <span className="w-2 h-2 bg-white rounded-full cursor-pointer opacity-50 hover:opacity-100"></span>
      </div>
    </section>
  );
};

export default Hero;
