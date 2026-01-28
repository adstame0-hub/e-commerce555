
import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rebook_cookie_consent');
    if (!consent) {
      // Small delay to make the entrance feel more natural
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rebook_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('rebook_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100] md:max-w-md animate-slide-up-fade">
      <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="bg-primary/10 p-3 rounded-xl shrink-0">
            <Cookie className="text-primary" size={24} />
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              การใช้งานคุกกี้ (Cookies)
              <ShieldCheck size={16} className="text-blue-500" />
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              RE-BOOK ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพ และประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถศึกษารายละเอียดเพิ่มเติมได้ที่ 
              <a href="#" className="text-primary font-bold hover:underline ml-1">นโยบายความเป็นส่วนตัว</a>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAccept}
                className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md flex-1 text-center"
              >
                ยอมรับทั้งหมด
              </button>
              <button 
                onClick={handleDecline}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex-1 text-center"
              >
                ตั้งค่าคุกกี้
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
