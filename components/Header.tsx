
import React, { useState } from 'react';
import { Phone, Mail, Search, BookOpen, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-gray-300 text-xs py-2 hidden md:block border-b border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-primary" />
              <span>(+66) 081-BOOK-HELP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-primary" />
              <span>buyback@rebookstore.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span className="font-medium">รับซื้อหนังสือถึงบ้าน! <a href="#" className="underline text-white ml-1">เช็คราคาฟรีทาง Line!</a></span>
            <div className="flex items-center space-x-4">
              <span>TH | EN</span>
              <div className="flex items-center cursor-pointer hover:text-white transition-colors">
                <User size={14} className="mr-1" />
                <span>บัญชีของฉัน</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-4 shadow-sm sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <button className="md:hidden mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center gap-2">
                 <div className="text-3xl font-serif font-bold text-gray-800 tracking-wider flex items-center gap-2">
                  RE<span className="text-primary">BOOK</span>
                  <BookOpen className="text-primary" size={28} />
                 </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wide text-gray-700">
              <a href="#" className="hover:text-primary transition-colors">นิยาย</a>
              <a href="#" className="hover:text-primary transition-colors">การ์ตูน</a>
              <a href="#" className="hover:text-primary transition-colors">หนังสือเรียน</a>
              <a href="#" className="hover:text-primary transition-colors">ภาษา</a>
              <a href="#" className="hover:text-primary transition-colors">ของสะสม</a>
              <a href="#" className="hover:text-primary transition-colors text-primary border-b-2 border-primary">ขายหนังสือ</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-5 text-gray-600">
              <Search size={20} className="cursor-pointer hover:text-primary transition-transform hover:scale-110" />
              <div className="relative cursor-pointer hover:text-primary hidden sm:block">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
              <div className="relative cursor-pointer hover:text-primary">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 border-t z-50">
            <a href="#" className="text-gray-800 font-medium">หมวดหมู่นิยาย</a>
            <a href="#" className="text-gray-800 font-medium">หมวดหมู่การ์ตูน</a>
            <a href="#" className="text-gray-800 font-medium">หนังสือเรียน & สอบ</a>
            <a href="#" className="text-gray-800 font-medium">บทความ</a>
            <a href="#" className="text-primary font-bold text-lg">ส่งรูปประเมินราคา (Line)</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
