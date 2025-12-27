
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ArticleSection from './components/ArticleSection';
import ProductSection from './components/ProductSection';
import BannerSection from './components/BannerSection';
import BenefitSection from './components/BenefitSection';
import FeaturesSection from './components/FeaturesSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { Product } from './types';

// Mock Data for Books
const featuredBooks: Product[] = [
  {
    id: 1,
    name: "ดั่งดวงหฤทัย (ปกแข็ง ลิมิเต็ด)",
    category: "นิยายโรแมนติก",
    price: 850,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/like-my-heart-hardcover-limited-edition.jpg",
    isNew: false
  },
  {
    id: 2,
    name: "One Piece เล่ม 1-100 ครบเซ็ต",
    category: "การ์ตูน",
    price: 4500,
    originalPrice: 6500,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/one-piece-volumes-1-100-complete-set.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "สรุปชีววิทยา ม.ปลาย (Bio Beam)",
    category: "หนังสือเรียน",
    price: 250,
    rating: 4,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/summary-of-high-school-biology-bio-beam.jpg",
    isNew: false
  },
  {
    id: 4,
    name: "Harry Potter and the Philosopher's Stone (1st Ed)",
    category: "วรรณกรรมเยาวชน",
    price: 1200,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/harry-potter-and-the-philosophers-stone-1st-ed.jpeg",
    isNew: true
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
    isNew: true
  },
  {
    id: 6,
    name: "Sapiens: A Brief History of Humankind",
    category: "สารคดี",
    price: 380,
    originalPrice: 550,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/sapiens-a-brief-history-of-humankind.png",
    isNew: false
  },
  {
    id: 7,
    name: "Dictionary Oxford Advanced 10th Ed",
    category: "ภาษา",
    price: 950,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/dictionary-oxford-advanced-10th-ed.png",
    isNew: true
  },
  {
    id: 8,
    name: "Attack on Titan เล่ม 1-34 จบ",
    category: "การ์ตูน",
    price: 1800,
    rating: 5,
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/attack-on-titan-volumes-1-34-complete.jpg",
    isNew: false
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-700 bg-[#fdfdfd]">
      <Header />
      <Hero />
      <CategorySection />
      <ArticleSection />
      <ProductSection title="หนังสือแนะนำ / ของสะสม" products={featuredBooks} />
      <ProductSection title="หนังสือเข้าใหม่วันนี้" products={newArrivals} bgColor="bg-gray-50" />
      <BannerSection />
      
      {/* ส่วนบทความใหม่ที่เพิ่มเข้ามาตามคำขอ */}
      <BenefitSection />

      <ProductSection title="สินค้ายอดนิยม (Best Sellers)" products={featuredBooks} />
      <FeaturesSection />
      <Testimonials />
      
      {/* Brand Partners - Publishing Houses */}
      <div className="py-12 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto gap-12 text-center">
           <div className="text-xl font-serif font-bold whitespace-nowrap">JAMSai</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">SIAM INTER COMICS</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">SE-ED EDUCATION</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">AMARIN BOOKS</div>
           <div className="text-xl font-serif font-bold whitespace-nowrap">NANMEEBOOKS</div>
        </div>
      </div>

      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;
