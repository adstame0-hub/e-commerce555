
import React from 'react';
// Added CheckCircle to imports
import { ShieldCheck, UserCheck, Star, ThumbsUp, CheckCircle } from 'lucide-react';

const TrustSection: React.FC = () => {
  const stats = [
    { icon: <UserCheck size={28} className="text-blue-600" />, label: "ผู้ขายยืนยันตัวตน", value: "2,500+" },
    { icon: <ThumbsUp size={28} className="text-primary" />, label: "รีวิวลูกค้าพอใจ", value: "98%" },
    { icon: <ShieldCheck size={28} className="text-accent" />, label: "เงินประกันสินค้า", value: "100%" },
    { icon: <Star size={28} className="text-yellow-500" />, label: "หนังสือคุณภาพสูง", value: "10,000+" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-16 border border-primary/5 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                ซื้อมั่นใจ ขายปลอดภัย <br/>
                <span className="text-primary">ด้วยระบบคัดกรองมืออาชีพ</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                เพราะเราเชื่อว่า "ความไว้ใจ" คือหัวใจสำคัญของการส่งต่อหนังสือ 
                เราจึงมีระบบ Verification Badge เพื่อยืนยันว่าผู้ขายมีตัวตนจริง 
                และระบบรีวิวที่โปร่งใสเพื่อให้คุณตัดสินใจได้ง่ายขึ้น
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-gray-50 p-3 rounded-xl">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">RE-BOOK Protection</h4>
                    <p className="text-sm text-gray-500">คุ้มครองทุกการซื้อ-ขาย 100%</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "ตรวจสอบตัวตนผู้ขายด้วยระบบ E-KYC",
                    "ระบบพักเงิน ปลอดภัยต่อผู้ซื้อ",
                    "การันตีสินค้าตรงตามรูปที่แจ้งในแชท",
                    "มีระบบรีวิวและประวัติการขายย้อนหลัง"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        {/* CheckCircle is now correctly imported */}
                        <CheckCircle size={14} className="text-green-600" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-8 bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-lg hover:-translate-y-1">
                  สมัครเป็นผู้ขายที่ยืนยันตัวตน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
