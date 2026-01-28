
import React from 'react';
import { Info, CheckCircle2, AlertCircle, FileText, Banknote, ArrowUpRight } from 'lucide-react';

const PriceTableSection: React.FC = () => {
  const priceData = [
    { category: "นิยายไทย (ปกอ่อน/เล่มเดียวจบ)", range: "80 - 180", collector: "50-60%", good: "35-45%", fair: "15-25%" },
    { category: "นิยายแปล / Best Seller", range: "150 - 450", collector: "40-55%", good: "30-40%", fair: "15-20%" },
    { category: "การ์ตูนยกชุด (เฉลี่ยต่อเล่ม)", range: "30 - 65", collector: "60-75%", good: "45-55%", fair: "25-35%" },
    { category: "หนังสือต่างประเทศ (Foreign Books)", range: "250 - 850+", collector: "50-65%", good: "35-50%", fair: "20-30%" },
    { category: "หนังสือเรียน / คู่มือเตรียมสอบ", range: "100 - 550", collector: "35-45%", good: "25-30%", fair: "10-15%" },
    { category: "บริหาร / จิตวิทยา (Non-Fiction)", range: "120 - 320", collector: "40-50%", good: "25-35%", fair: "15-20%" },
    { category: "หนังสือสะสม / Rare Item", range: "1,000 - 10,000+", collector: "100%++", good: "70-90%", fair: "40-60%" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full text-primary mb-4 animate-bounce">
            <Banknote size={20} className="mr-2" />
            <span className="text-xs font-bold uppercase tracking-widest">Update: Jan 2025 Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">ตารางประมาณการราคารับซื้อ</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            เราให้ราคาที่ยุติธรรมที่สุด โดยอิงจากเปอร์เซ็นต์ของราคาปก 
            และ "ราคาประเมินเบื้องต้น" ตามความต้องการของตลาดในปัจจุบัน
          </p>
        </div>

        {/* Price Table Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative overflow-x-auto rounded-[2rem] border border-gray-100 shadow-2xl bg-white mb-12">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-8 font-serif text-xl font-medium">หมวดหมู่หนังสือ</th>
                  <th className="p-8 font-serif text-xl font-medium text-center bg-secondary/80">ราคาโดยประมาณ (บาท)</th>
                  <th className="p-8 font-serif text-xl font-medium">สภาพสะสม (A+)</th>
                  <th className="p-8 font-serif text-xl font-medium">สภาพดี (B)</th>
                  <th className="p-8 font-serif text-xl font-medium">สภาพอ่าน (C)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {priceData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/80 transition-all group/row">
                    <td className="p-8 font-bold text-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover/row:opacity-100 transition-opacity"></div>
                        {row.category}
                      </div>
                    </td>
                    <td className="p-8 text-center bg-gray-50/30">
                      <span className="text-2xl font-bold text-primary tabular-nums">
                        ฿{row.range}
                      </span>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="text-green-600 font-bold text-lg">{row.collector}</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">จากราคาปก</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="text-gray-700 font-semibold text-lg">{row.good}</span>
                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">จากราคาปก</span>
                      </div>
                    </td>
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-lg">{row.fair}</span>
                        <span className="text-[10px] text-gray-300 uppercase font-bold tracking-widest mt-1">จากราคาปก</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Condition Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-bold text-xl text-gray-800">สภาพสะสม (A+)</h4>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                <span>กระดาษขาวสะอาด ไม่มีจุดเหลืองหรือคราบฝุ่น</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                <span>สันหนังสือคมกริบ ปกไม่มีรอยยับหรือรอยขีดข่วน</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                <span>อุปกรณ์ครบถ้วน (ที่คั่น, โปสการ์ด, ของแถม)</span>
              </li>
            </ul>
          </div>

          <div className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Info size={28} />
              </div>
              <h4 className="font-bold text-xl text-gray-800">สภาพดี (B)</h4>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                <span>มีรอยใช้งานทั่วไปเพียงเล็กน้อยจากการอ่าน</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                <span>กระดาษอาจเริ่มเปลี่ยนเป็นสีนวลตามธรรมชาติ</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                <span>ตัวเล่มแข็งแรง สันหนังสือไม่พองหรือไม่บวมน้ำ</span>
              </li>
            </ul>
          </div>

          <div className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertCircle size={28} />
              </div>
              <h4 className="font-bold text-xl text-gray-800">สภาพอ่าน (C)</h4>
            </div>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                <span>มีจุดเหลืองชัดเจน หรือขอบกระดาษสีเข้มขึ้น</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                <span>ปกมีรอยพับ รอยเทป หรือตราประทับชื่อเจ้าของเดิม</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0"></div>
                <span className="font-bold text-gray-900 italic">*ไม่รับซื้อสภาพเปียกน้ำ มีรา หรือหน้าขาดหาย*</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <FileText size={48} className="mx-auto text-primary mb-6" />
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
              ส่งรูปมาให้เราประเมินราคาจริง <br className="hidden md:block" />
              <span className="text-primary">ทราบราคาภายใน 30 นาที!</span>
            </h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              ราคาในตารางเป็นเพียงค่าประมาณการเบื้องต้น ทีมงานของเราพร้อมให้ราคาที่ดีที่สุดตาม "ความหายาก" และ "ความนิยม" ณ ปัจจุบัน
            </p>
            <a 
              href="https://inlnk.co/frtCs" 
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-12 py-5 rounded-2xl hover:bg-white hover:text-gray-900 transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(45,90,39,0.4)] group"
            >
              <span>แชทประเมินราคาทาง Line</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTableSection;
