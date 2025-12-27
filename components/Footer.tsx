
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <BookOpen className="text-primary" size={24} />
                <h3 className="text-xl font-serif font-bold text-gray-800 tracking-wider">RE<span className="text-primary">BOOK</span></h3>
            </div>
            <div className="text-gray-500 text-sm space-y-4">
              <p>บริการรับซื้อ หนังสือมือสอง ทุกชนิด ครบวงจร ให้ราคาสูง จ่ายสดทันที</p>
              <p>456 ถนนสุขุมวิท 71, แขวงพระโขนงเหนือ</p>
              <p>เขตวัฒนา, กรุงเทพมหานคร 10110</p>
              <p>info@rebookstore.com</p>
              <div className="mt-6">
                 <p className="mb-2">มีคำถาม? ปรึกษาเราได้ 24 ชม.</p>
                 <p className="text-2xl text-primary font-bold">(+66) 081-BOOK-HELP</p>
              </div>
              <div className="flex space-x-4 mt-6">
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
              <li><a href="#" className="hover:text-primary transition-colors">ประเมินราคาผ่านไลน์</a></li>
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
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 RE-BOOK Store - ซื้อ-ขายหนังสือมือสองครบวงจร
          </p>
          <div className="flex space-x-4 opacity-50 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
            <span className="text-xs font-bold text-gray-500">PROMPT PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
