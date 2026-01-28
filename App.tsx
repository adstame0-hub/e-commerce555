
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ArticleSection from './components/ArticleSection';
import ProductSection from './components/ProductSection';
import PriceTableSection from './components/PriceTableSection';
import BannerSection from './components/BannerSection';
import BenefitSection from './components/BenefitSection';
import FeaturesSection from './components/FeaturesSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import TrustSection from './components/TrustSection';
import ChatWidget from './components/ChatWidget';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import { Product, Seller } from './types';

// Mock Sellers
const seller1: Seller = { id: 101, name: "BookLover.BKK", avatar: "https://i.pravatar.cc/150?u=1", isVerified: true, rating: 4.9, totalSales: 450, joinDate: "Jan 2024" };
const seller2: Seller = { id: 102, name: "นิยายมือสองสภาพดี", avatar: "https://i.pravatar.cc/150?u=2", isVerified: true, rating: 4.7, totalSales: 120, joinDate: "Mar 2024" };
const seller3: Seller = { id: 103, name: "MangaCollector", avatar: "https://i.pravatar.cc/150?u=3", isVerified: false, rating: 4.5, totalSales: 85, joinDate: "Jun 2024" };

// Mock Data for Books
const featuredBooks: Product[] = [
  {
    id: 1,
    name: "ดั่งดวงหฤทัย (ปกแข็ง ลิมิเต็ด)",
    category: "นิยายโรแมนติก",
    price: 850,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/like-my-heart-hardcover-limited-edition.jpg",
    isNew: false,
    seller: seller1
  },
  {
    id: 2,
    name: "One Piece เล่ม 1-100 ครบเซ็ต",
    category: "การ์ตูน",
    price: 4500,
    originalPrice: 6500,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/one-piece-volumes-1-100-complete-set.jpg",
    isNew: true,
    seller: seller3
  },
  {
    id: 3,
    name: "สรุปชีววิทยา ม.ปลาย (Bio Beam)",
    category: "หนังสือเรียน",
    price: 250,
    rating: 4,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/summary-of-high-school-biology-bio-beam.jpg",
    isNew: false,
    seller: seller2
  },
  {
    id: 4,
    name: "Harry Potter and the Philosopher's Stone (1st Ed)",
    category: "วรรณกรรมเยาวชน",
    price: 1200,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/harry-potter-and-the-philosophers-stone-1st-ed.jpeg",
    isNew: true,
    seller: seller1
  }
];

const newArrivals: Product[] = [
  {
    id: 5,
    name: "Thinking, Fast and Slow",
    category: "จิตวิทยา/พัฒนาตนเอง",
    price: 320,
    rating: 4,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/thinking-fast-and-slow.png",
    isNew: true,
    seller: seller2
  },
  {
    id: 6,
    name: "Sapiens: A Brief History of Humankind",
    category: "สารคดี",
    price: 380,
    originalPrice: 550,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/sapiens-a-brief-history-of-humankind.png",
    isNew: false,
    seller: seller1
  },
  {
    id: 7,
    name: "Dictionary Oxford Advanced 10th Ed",
    category: "ภาษา",
    price: 950,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/dictionary-oxford-advanced-10th-ed.png",
    isNew: true,
    seller: seller2
  },
  {
    id: 8,
    name: "Attack on Titan เล่ม 1-34 จบ",
    category: "การ์ตูน",
    price: 1800,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/attack-on-titan-volumes-1-34-complete.jpg",
    isNew: false,
    seller: seller3
  }
];

const App: React.FC = () => {
  const [selectedProductForChat, setSelectedProductForChat] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenChat = (product: Product) => {
    setSelectedProductForChat(product);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen font-sans text-gray-700 bg-[#fdfdfd]">
      <Header />
      <Hero />
      <div className="reveal"><CategorySection /></div>
      <div className="reveal"><ArticleSection /></div>
      <div className="reveal">
        <ProductSection 
          title="หนังสือแนะนำจากผู้ขายยืนยันตัวตน" 
          products={featuredBooks} 
          onChatOpen={handleOpenChat}
        />
      </div>
      <div className="reveal">
        <ProductSection 
          title="ลงขายใหม่ล่าสุด" 
          products={newArrivals} 
          bgColor="bg-gray-50" 
          onChatOpen={handleOpenChat}
        />
      </div>
      <div className="reveal"><PriceTableSection /></div>
      <div className="reveal"><TrustSection /></div>
      <div className="reveal"><BannerSection /></div>
      <div className="reveal"><BenefitSection /></div>
      <div className="reveal"><FeaturesSection /></div>
      <div className="reveal"><Testimonials /></div>
      
      {/* Brand Partners - Publishing Houses */}
      <div className="py-12 bg-white border-t border-b border-gray-100 reveal">
        <div className="container mx-auto px-4 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto gap-12 text-center">
           <div className="text-xl font-serif font-bold whitespace-nowrap">JAMSai</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">SIAM INTER COMICS</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">SE-ED EDUCATION</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">AMARIN BOOKS</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">NANMEEBOOKS</div>
        </div>
      </div>

      <div className="reveal"><BlogSection /></div>
      <Footer />

      {/* Chat Component */}
      <ChatWidget 
        product={selectedProductForChat} 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
};

export default App;
