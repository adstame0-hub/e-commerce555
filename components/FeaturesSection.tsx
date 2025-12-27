
import React from 'react';
import { Truck, BadgeCheck, Zap, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} className="text-gray-700" />,
    title: "บริการรับถึงบ้าน",
    description: "รับซื้อถึงที่ใน กทม. และปริมณฑล เมื่อยอดขั้นต่ำถึงกำหนด"
  },
  {
    icon: <BadgeCheck size={32} className="text-gray-700" />,
    title: "ราคาที่เป็นธรรม",
    description: "ประเมินตามสภาพจริงและราคาตลาดปัจจุบัน ไม่กดราคา"
  },
  {
    icon: <Zap size={32} className="text-gray-700" />,
    title: "ประเมินราคาไว",
    description: "ส่งรูปผ่าน Line ทราบราคาเบื้องต้นได้ภายใน 24 ชม."
  },
  {
    icon: <HeartHandshake size={32} className="text-gray-700" />,
    title: "รับซื้อทุกแนว",
    description: "นิยาย, การ์ตูน, หนังสือสอบ, ภาษา, หนังสือหายาก"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <div className="group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
