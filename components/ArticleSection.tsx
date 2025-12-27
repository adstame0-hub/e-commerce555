
import React from 'react';

const ArticleSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 leading-tight mb-6">
            อยากเปลี่ยนหนังสือในบ้านให้เป็นทุน <br/>
            <span className="text-primary italic">ต้องเลือกบริการ รับซื้อหนังสือมือสอง ทุกชนิด ที่เป็นมืออาชีพ</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <h3 className="text-2xl font-serif font-semibold text-gray-700 mb-6">
            ปัญหาหนังสือล้นบ้านและทางออกที่คุ้มค่าที่สุดสำหรับคนรักหนังสือ
          </h3>
          
          <p className="mb-6 text-lg">
            สำหรับคนรักหนังสือ ปัญหาที่หลีกเลี่ยงไม่ได้เลยคือการที่ <strong className="text-gray-800">"หนังสือเต็มบ้าน"</strong> 
            จากตอนแรกที่มีเพียงชั้นเดียว พอนานวันเข้าหนังสือก็เริ่มงอกออกมาวางบนโต๊ะ ข้างเตียง จนลามไปถึงพื้นห้อง 
            การเก็บหนังสือไว้นานๆ โดยไม่ได้หยิบมาอ่านอีกเลย นอกจากจะทำให้บ้านดูรกและทำความสะอาดยากแล้ว 
            หนังสือเหล่านั้นยังเสี่ยงต่อการถูกปลวกกิน กระดาษเหลืองกรอบ หรือสะสมฝุ่นจนทำลายสุขภาพของคุณและคนในครอบครัว
          </p>

          <div className="bg-light/40 p-8 rounded-2xl border-l-4 border-primary mb-8 shadow-sm">
            <p className="text-lg italic">
              หากคุณเริ่มรู้สึกว่าถึงเวลาแล้วที่จะต้องเคลียร์พื้นที่ และอยากจะส่งต่อความรู้เหล่านี้ให้คนอื่นได้อ่านต่อ 
              พร้อมกับได้รับเงินกลับคืนมา คำถามสำคัญที่มักจะเกิดขึ้นคือ <span className="font-bold text-primary">"มีที่ไหนที่ รับซื้อหนังสือมือสอง ทุกชนิด บ้าง?"</span> 
              เพราะคุณคงไม่อยากแบกหนังสือหนักๆ หลายกิโลกรัมไปเดินหาที่ขายทีละเล่ม 
              หรือต้องมานั่งโพสต์ขายทีละเล่มในกลุ่มเฟซบุ๊กที่ต้องรอนานกว่าจะมีคนมาซื้อ
            </p>
          </div>

          <p className="text-lg">
            เราเข้าใจถึงคุณค่าของหนังสือทุกเล่ม บริการของเราจึงเน้นความเป็นมืออาชีพ ให้ราคาสูง ยุติธรรม 
            และมีบริการรับซื้อถึงบ้าน เพื่อให้การเปลี่ยนตู้หนังสือเก่าเป็นเงินทุนใหม่ของคุณกลายเป็นเรื่องง่ายและสะดวกสบายที่สุด
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
