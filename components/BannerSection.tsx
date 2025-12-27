
import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Banner 1 - Sell Books */}
          <div className="relative h-[350px] group overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop" 
              alt="Sell Old Books" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-8 md:p-12">
              <div className="max-w-xs text-white">
                <span className="text-sm uppercase tracking-widest mb-2 block text-white font-bold">Fast Cash</span>
                <h3 className="text-3xl font-serif font-medium mb-4 leading-tight">
                  ขายหนังสือเก่า <br/> ง่ายๆ แค่ <span className="text-อ italic font-bold">แอดไลน์</span>
                </h3>
                <p className="text-sm text-gray-300 mb-6">ประเมินราคาไว รับเงินทันที พร้อมบริการรับถึงหน้าบ้านทั่วกรุงเทพฯ</p>
                <button className="bg-primary hover:bg-secondary text-white text-xs font-bold py-3 px-8 rounded-full uppercase tracking-widest transition-colors">
                  ประเมินราคาเลย
                </button>
              </div>
            </div>
          </div>

          {/* Banner 2 - Buy Collections */}
          <div className="relative h-[350px] group overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop" 
              alt="Buy rare books" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent flex items-center justify-end p-8 md:p-12 text-right">
              <div className="max-w-xs text-white">
                <span className="text-sm uppercase tracking-widest mb-2 block text-white font-bold">Rare Finds</span>
                <h3 className="text-3xl font-serif font-medium mb-4 leading-tight">
                  ตามหาเล่มหายาก <br/> ในราคา <span className="text-white italic font-bold">มิตรภาพ</span>
                </h3>
                <p className="text-sm text-gray-300 mb-6">คลัง หนังสือมือสอง คุณภาพ คัดกรองสภาพดีเยี่ยมเหมือนใหม่</p>
                <button className="bg-primary hover:bg-secondary text-white text-xs font-bold py-3 px-8 rounded-full uppercase tracking-widest transition-colors">
                  เลือกชมสินค้า
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
