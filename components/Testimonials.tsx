
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "คุณกนกพร",
    comment: "มีหนังสือสะสมเยอะมากจนไม่มีที่เก็บ เลยลองใช้บริการรับซื้อของที่นี่ ประทับใจมากค่ะ ทีมงานมาประเมินถึงบ้าน ให้ราคาดีและเป็นธรรมมาก ไม่ต้องเหนื่อยแบกไปขายเองเลยค่ะ",
    rating: 5,
    avatar: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/mother-butter.png"
  },
  {
    id: 2,
    name: "คุณวิภาวรรณ น.",
    comment: "ส่งรูปประเมินราคาผ่าน Line สะดวกมากค่ะ ตอบไวมาก พอตกลงราคากันได้ก็นัดวันมารับหนังสือถึงที่ ได้เงินสดทันทีเลย แนะนำสำหรับใครที่อยากเคลียร์ตู้หนังสือค่ะ",
    rating: 5,
    avatar: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/nadias-mother.png"
  },
  {
    id: 3,
    name: "คุณพี่ สำอาง",
    comment: "เคยขายที่อื่นแล้วโดนกดราคา แต่ที่ RE-BOOK ให้ราคาสูงตามสภาพจริง คุยง่าย จบไว แถมพนักงานสุภาพมากค่ะ ช่วยย้ายหนังสือออกจากบ้านให้ด้วย สะดวกสุดๆ",
    rating: 5,
    avatar: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/mother-gift.png"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-2">เสียงตอบรับจากนักอ่าน</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 shadow-sm border border-gray-100 rounded-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < item.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{item.comment}"</p>
              <div className="flex items-center">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20" />
                <h4 className="font-bold text-gray-800">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
