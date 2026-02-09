
import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const SELL_URL = "https://inlnk.co/frtCs";
  const LINE_ID = "@887ujsyt";

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <img 
                  src="https://raw.githubusercontent.com/adstame0-hub/e-commerce555/bb62b8a97c4e4637917e49a720770463c07a5acd/RE%20BOOK-logo.png" 
                  alt="RE-BOOK Logo" 
                  className="h-6 w-auto object-contain"
                />
                <h3 className="text-xl font-serif font-bold text-gray-800 tracking-wider">RE<span className="text-primary">BOOK</span></h3>
            </div>
            <div className="text-gray-500 text-sm space-y-4">
              <p>บริการ รับซื้อหนังสือมือสอง ทุกชนิด ครบวงจร ให้ราคาสูง จ่ายสดทันที</p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span>(+66) 081-REBOOK-MARKET</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span>info@rebookstore.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase">ดำเนินงานโดย</span>
                    <span className="font-bold text-gray-700">ห้างหุ้นส่วนจำกัด มิสเตอร์บุ๊ค</span>
                    <span className="font-bold text-gray-700 mb-1">MR.BOOK LIMITED PARTNERSHIP</span>
                    <span className="text-xs font-bold text-gray-400 uppercase mt-2">ที่ตั้งบริษัท</span>
                    <span className="leading-relaxed">127,129 ถนนมะกรูด ตำบลสะบารัง อำเภอเมืองปัตตานี จ.ปัตตานี 94000</span>
                  </div>
                </div>
                {/* Line@ Section */}
                <div className="flex items-center gap-3 group">
                  <div className="bg-[#06C755] p-1.5 rounded-lg text-white">
                    <MessageCircle size={18} fill="currentColor" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase">Line Official</span>
                    <a href={SELL_URL} className="text-lg font-bold text-[#06C755] hover:underline">
                      {LINE_ID}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={SELL_URL}
                  className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={18} />
                  เพิ่มเพื่อนประเมินราคา
                </a>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-6">หมวดหมู่หนังสือ</h3>
            <ul className="text-gray-500 text-sm space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">นิยายแปล / นิยายไทย</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">การ์ตูนยกชุด</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">หนังสือเรียน & คู่มือสอบ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">พัฒนาตนเอง / บริหาร</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">หนังสือภาษาต่างประเทศ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">หนังสือเด็กและเยาวชน</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-6">บริการของเรา</h3>
            <ul className="text-gray-500 text-sm space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">ขั้นตอนการขายหนังสือ</a></li>
              <li><a href={SELL_URL} className="hover:text-primary transition-colors">ประเมินราคาผ่านไลน์</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">พื้นที่ให้บริการรับถึงบ้าน</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">คำถามที่พบบ่อย (FAQ)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-6">รับข่าวสาร/โปรโมชั่น</h3>
            <p className="text-gray-500 text-sm mb-6">
              สมัครรับข่าวสารอัปเดตหนังสือเข้าใหม่และเทคนิคการดูแลรักษาหนังสือ
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="อีเมลของคุณ" 
                className="bg-gray-100 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full rounded-md"
              />
              <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-4 uppercase tracking-wider text-sm transition-colors rounded-md">
                ติดตามข่าวสาร
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 ห้างหุ้นส่วนจำกัด มิสเตอร์บุ๊ค (MR.BOOK LIMITED PARTNERSHIP)
            </p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">
              REBOOK.MARKET - ซื้อ-ขายหนังสือมือสอง ครบวงจร
            </p>
          </div>
          <div className="flex space-x-4 opacity-50 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <span className="text-xs font-bold text-gray-500">PROMPT PAY</span>
          </div>
        </div>
      </div>

      {/* Floating Line Button for Mobile/Desktop convenience */}
      <a 
        href={SELL_URL}
        className="fixed bottom-6 right-6 z-[60] bg-[#06C755] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Contact on Line"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
          ประเมินราคาทาง Line
        </span>
      </a>
    </footer>
  );
};

export default Footer;
