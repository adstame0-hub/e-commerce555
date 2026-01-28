
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, CheckCircle, ShieldCheck, Phone, Video } from 'lucide-react';
import { Product, ChatMessage } from '../types';

interface ChatWidgetProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ product, isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { id: 1, senderId: 'seller', text: 'สวัสดีครับ สนใจเล่มนี้สอบถามได้เลยนะครับ สภาพนางฟ้าครับ', timestamp: '10:00', isMe: false }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now(),
      senderId: 'me',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setChatHistory([...chatHistory, newMsg]);
    setMessage('');

    // Simulate auto-reply
    setTimeout(() => {
      const reply: ChatMessage = {
        id: Date.now() + 1,
        senderId: 'seller',
        text: 'ขอบคุณครับ สนใจลดหย่อนได้นิดหน่อยครับ สะดวกนัดรับไหมครับ?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false
      };
      setChatHistory(prev => [...prev, reply]);
    }, 1500);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-[100] w-full md:w-[400px] h-[100dvh] md:h-[600px] bg-white md:rounded-2xl shadow-2xl flex flex-col border border-gray-100 animate-slide-up">
      {/* Header */}
      <div className="bg-primary p-4 text-white md:rounded-t-2xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={product.seller?.avatar || "https://i.pravatar.cc/150?u=seller"} 
              alt="Seller" 
              className="w-10 h-10 rounded-full border-2 border-white/50" 
            />
            {product.seller?.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle size={12} className="text-blue-500 fill-blue-500" />
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold flex items-center gap-1">
              {product.seller?.name || "ร้านหนังสือคุณภาพ"}
              {product.seller?.isVerified && <ShieldCheck size={14} className="text-blue-300" />}
            </h4>
            <p className="text-[10px] text-white/80 font-medium">ออนไลน์เมื่อ 5 นาทีที่แล้ว</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={18} className="cursor-pointer hover:text-white/70" />
          <Video size={18} className="cursor-pointer hover:text-white/70" />
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full">
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Product Summary In Chat */}
      <div className="p-3 bg-gray-50 flex items-center gap-3 border-b border-gray-100">
        <img src={product.image} className="w-12 h-16 object-cover rounded shadow-sm" alt="" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-800 truncate">{product.name}</p>
          <p className="text-sm font-bold text-primary">฿{product.price.toLocaleString()}</p>
        </div>
        <button className="bg-white border border-primary text-primary px-3 py-1 rounded-full text-[10px] font-bold">แชร์ลิงก์</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
        <div className="text-center">
          <span className="text-[10px] bg-gray-200 text-gray-500 px-3 py-1 rounded-full font-bold uppercase">วันนี้</span>
        </div>
        
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm relative ${
              msg.isMe ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'
            }`}>
              <p className="text-sm">{msg.text}</p>
              <span className={`text-[8px] mt-1 block ${msg.isMe ? 'text-white/70' : 'text-gray-400'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="พิมพ์ข้อความสอบถามสภาพหนังสือ..."
          className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all"
        />
        <button type="submit" className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors shadow-lg">
          <Send size={20} />
        </button>
      </form>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;
