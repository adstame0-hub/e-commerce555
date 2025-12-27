import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { X, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "วิธีถนอมหนังสือเก่าให้ดูเหมือนใหม่ไปอีก 10 ปี",
    excerpt: "เคล็ดลับการเก็บรักษาหนังสือในอากาศเมืองไทย ป้องกันปลวกและความชื้น...",
    content: "การรักษาหนังสือในประเทศไทยที่มีสภาพอากาศร้อนชื้นถือเป็นความท้าทายอย่างมาก ขั้นตอนสำคัญประกอบด้วย:\n\n1. การควบคุมความชื้น: พยายามเก็บในที่ที่อากาศถ่ายเทสะดวก หลีกเลี่ยงมุมอับหรือติดผนังที่มีความชื้น\n2. การป้องกันแสงแดด: แสง UV จะทำให้กระดาษเหลืองกรอบและสีปกซีดจาง ควรเก็บในตู้ที่มีบานปิดหรือพ้นจากแสงแดดโดยตรง\n3. การทำความสะอาด: ใช้แปรงขนนุ่มปัดฝุ่นที่ขอบด้านบนของหนังสือเป็นประจำ เพื่อป้องกันฝุ่นฝังตัวลงในเนื้อกระดาษ\n4. การห่อปก: เลือกใช้พลาสติกห่อปกที่ไม่มีกรด (Acid-free) เพื่อป้องกันปฏิกิริยาเคมีกับตัวปกหนังสือในระยะยาว\n\nการดูแลที่ดีจะช่วยเพิ่มมูลค่าให้กับหนังสือของคุณเมื่อต้องการนำมาขายต่อในอนาคต",
    date: "12 ต.ค. 2025",
    image: "https://maternitybaby0.wordpress.com/wp-content/uploads/2025/12/how-to-preserve-old-books-to-keep-them-looking-new-for-another-10-years.jpg"
  },
  {
    id: 2,
    title: "10 อันดับหนังสือหายากที่ราคาสูงที่สุดในตลาดปีนี้",
    excerpt: "มาดูกันว่าหนังสือเล่มไหนที่คุณอาจจะมีเก็บไว้ในชั้น แล้วราคาพุ่งกระฉูด...",
    content: "ปี 2025 ตลาดหนังสือสะสมมีการเติบโตอย่างก้าวกระโดด โดยเฉพาะกลุ่ม:\n\n1. นิยายปกแข็งพิมพ์ครั้งที่ 1: เช่น งานเขียนรุ่นแรกของนักเขียนชื่อดังที่เลิกผลิตไปแล้ว\n2. หนังสือที่มีลายเซ็นต์นักเขียน: มูลค่าจะเพิ่มขึ้น 2-5 เท่าหากเป็นลายเซ็นต์จริงพร้อมหลักฐาน\n3. การ์ตูนชุดคลาสสิก: ชุดที่พิมพ์ในสมัยก่อนที่มีการทำปกพิเศษหรือเล่มที่ถูกแบนไปในอดีต\n4. หนังสือเรียนโบราณ: ที่มีภาพประกอบหายากหรืองานกราฟิกที่เป็นเอกลักษณ์ของยุคสมัย\n\nการตรวจสอบราคาตลาดก่อนขายเป็นสิ่งสำคัญ ร้าน RE-BOOK ของเราใช้ฐานข้อมูลราคาประมูลล่าสุดในการประเมินเพื่อให้ลูกค้าได้ราคาที่ยุติธรรมที่สุด",
    date: "05 ต.ค. 2025",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "ทำไมการอ่าน หนังสือมือสอง ถึงช่วยลดโลกร้อนได้มากกว่าที่คิด",
    excerpt: "บทบาทของตลาด หนังสือมือสอง กับการช่วยรักษาสิ่งแวดล้อมและลดการตัดต้นไม้...",
    content: "อุตสาหกรรมการผลิตกระดาษเป็นหนึ่งในอุตสาหกรรมที่ใช้ทรัพยากรน้ำและต้นไม้สูงที่สุดในโลก การเลือกซื้อหรือขาย หนังสือมือสอง ช่วยในด้าน:\n\n- ลดการตัดต้นไม้: หนังสือ 1 เล่มช่วยรักษาต้นไม้และลดการใช้พลังงานในกระบวนการผลิตใหม่\n- ลดคาร์บอนฟุตพริ้นท์: การหมุนเวียนหนังสือภายในประเทศช่วยลดมลพิษจากการขนส่งระหว่างประเทศและการผลิต\n- แนวคิด Zero Waste: เป็นการใช้ทรัพยากรให้คุ้มค่าที่สุดจนหมดอายุขัยของสิ่งของนั้นๆ\n\nการขายหนังสือที่ไม่ใช้แล้วให้กับเรา ไม่ใช่แค่การเคลียร์บ้าน แต่คือการร่วมรับผิดชอบต่อสิ่งแวดล้อมอย่างเป็นรูปธรรม",
    date: "28 ก.ย. 2025",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "เทคนิคการจัดชั้นหนังสือให้สวยเหมือนใน Pinterest",
    excerpt: "ไอเดียแต่งบ้านด้วยหนังสือและการจัดหมวดหมู่ให้หยิบหาง่ายและดูดี...",
    content: "การจัดชั้นหนังสือไม่ใช่แค่เรื่องของการเก็บ แต่คือศิลปะการตกแต่งบ้าน เทคนิคที่ได้รับความนิยมคือ:\n\n1. จัดตามโทนสี (Rainbow Shelf): สร้างความโดดเด่นสะดุดตาและดูทันสมัย\n2. การจัดแบบแนวตั้งสลับแนวนอน: ช่วยสร้างจังหวะสายตาและทำให้ชั้นหนังสือไม่ดูอึดอัดจนเกินไป\n3. การตกแต่งด้วยของสะสม: วางโมเดลหรือต้นไม้เล็กๆ แทรกระหว่างกองหนังสือ\n4. การคัดกรองหนังสือ: ควรคัดหนังสือที่ไม่อ่านแล้วออกมาขายต่อ เพื่อให้มีพื้นที่เหลือสำหรับหนังสือเล่มใหม่ๆ และทำให้ชั้นดูสะอาดตาเสมอ\n\nหากคุณมีหนังสือที่ต้องการคัดออก ติดต่อ RE-BOOK เพื่อรับประเมินราคาถึงบ้านได้เลยครับ",
    date: "15 ก.ย. 2025",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400"
  }
];

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-2">บทความและสาระน่ารู้</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] shadow-sm relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-primary text-white p-2 rounded-full shadow-lg block">
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
              <div className="text-xs text-primary font-bold mb-2 flex items-center gap-1 uppercase tracking-wider">
                <Calendar size={12} />
                {post.date}
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                {post.excerpt}
              </p>
              <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/30 pb-1 self-start group-hover:border-primary transition-all">
                อ่านรายละเอียด
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setSelectedPost(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col animate-scale-up">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-primary hover:text-white p-2 rounded-full transition-all shadow-md group"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto">
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="flex items-center gap-4 text-xs md:text-sm font-medium opacity-90 mb-2">
                       <span className="flex items-center gap-1"><Calendar size={14}/> {selectedPost.date}</span>
                       <span className="flex items-center gap-1"><User size={14}/> โดย RE-BOOK Admin</span>
                       <span className="flex items-center gap-1"><Clock size={14}/> อ่าน 3 นาที</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold leading-tight">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-800 font-serif font-medium mb-8 leading-relaxed italic border-l-4 border-primary pl-6">
                    {selectedPost.excerpt}
                  </p>
                  
                  <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                  <div className="bg-light p-6 rounded-xl border border-primary/10 w-full">
                    <h4 className="font-bold text-gray-800 mb-2">สนใจขายหนังสือกับเรา?</h4>
                    <p className="text-sm text-gray-600 mb-4">ถ่ายรูปส่งมาให้เราประเมินราคาเบื้องต้นได้ทันที ให้ราคาสูง จ่ายสด</p>
                    <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-secondary transition-colors">
                      แอดไลน์ @REBOOK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;