
import React from 'react';
import { PackageCheck, Truck, Banknote, ClipboardCheck } from 'lucide-react';

const BenefitSection: React.FC = () => {
  const benefits = [
    {
      icon: <PackageCheck className="text-primary" size={32} />,
      title: "จบในที่เดียว ไม่ต้องแยกขาย",
      description: "ไม่ว่าคุณจะมีหนังสือการ์ตูนยกชุด นิยายรักที่อ่านจบแล้ว หนังสือพัฒนาตนเอง หรือแม้แต่ตำราเรียนเก่าๆ ร้านรับซื้อแบบครบวงจรจะรับไว้ทั้งหมด ช่วยให้คุณเคลียร์บ้านได้จบภายในวันเดียว"
    },
    {
      icon: <Truck className="text-primary" size={32} />,
      title: "บริการรับซื้อถึงบ้าน (On-site Service)",
      description: "หนังสือเป็นสินค้าที่มีน้ำหนักมาก หากคุณมีหนังสือเป็นร้อยๆ เล่ม การขนไปขายเองอาจจะไม่คุ้มค่าเหนื่อยและค่ารถ บริการ รับซื้อหนังสือมือสอง ยุคใหม่มักจะมีรถกระบะหรือรถขนส่งเข้าไปรับถึงหน้าบ้านคุณ"
    },
    {
      icon: <Banknote className="text-primary" size={32} />,
      title: "ได้เงินสดทันที",
      description: "เมื่อมีการตกลงราคาและเช็กสภาพหนังสือเสร็จสิ้น คุณจะได้รับเงินสดหรือเงินโอนเข้าบัญชีทันที ไม่ต้องฝากขาย ไม่ต้องรอคิวให้เสียเวลา"
    },
    {
      icon: <ClipboardCheck className="text-primary" size={32} />,
      title: "ประเมินราคาได้มาตรฐาน",
      description: "ร้านมืออาชีพจะมีเกณฑ์การประเมินราคาที่ชัดเจนตามราคาปก สภาพหนังสือ และความต้องการของตลาด ทำให้คุณมั่นใจได้ว่าจะไม่โดนกดราคาอย่างไม่เป็นธรรม"
    }
  ];

  return (
    <section className="py-20 bg-[#f8f9f1]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-800 leading-tight mb-8">
            ทำไมการเลือกบริการ <span className="text-primary">รับซื้อหนังสือมือสอง ทุกชนิด</span> <br className="hidden md:block" />
            ถึงเป็นทางออกที่ดีที่สุด?
          </h3>
          <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              หลายคนอาจจะเคยลองประกาศขายหนังสือเองตามสื่อโซเชียลมีเดีย แต่สุดท้ายก็ต้องถอดใจเพราะความยุ่งยาก 
              ไม่ว่าจะเป็นการต้องถ่ายรูปหนังสือทีละหน้าเพื่อแสดงสภาพ การตอบคำถามลูกค้าที่ถามแล้วไม่ซื้อ 
              การแพ็คของส่งไปรษณีย์ที่แสนจะลำบากหากหนังสือมีจำนวนมาก และที่สำคัญคือ <strong className="text-gray-800">"ขายไม่ออก"</strong> 
              เพราะเล่มที่เรามีอาจจะไม่ใช่เล่มที่อยู่ในกระแส
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 mb-4">
            <p className="text-xl font-medium text-gray-800 text-center md:text-left border-l-4 border-primary pl-4">
              การเลือกใช้บริการร้านที่ รับซื้อหนังสือมือสอง ทุกชนิด จะช่วยตัดปัญหาเหล่านี้ทิ้งไปได้ทันที:
            </p>
          </div>
          
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-light p-4 rounded-xl shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
