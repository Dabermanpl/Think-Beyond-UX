"use client";

import { useState } from "react";
import { Sparkles, X, Send, User } from "lucide-react";

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Cześć! Jestem Edu Cloud AI. Jak mogę pomóc w transformacji Twojej uczelni?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages, { role: "user", content: inputValue }];
    setMessages(newMessages);
    setInputValue("");

    // Simple mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        content: "To świetne pytanie! Nasz zespół ekspertów Edu Cloud chętnie omówi te szczegóły podczas darmowej konsultacji. Czy chcesz, abym pomógł Ci przejść do formularza?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-body">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
          title="Porozmawiaj z AI"
        >
          <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-800 border-2 border-white rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white border-2 border-black w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-black text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-sm font-bold">Edu Cloud AI</h3>
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">Online · Higher Ed Expert</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                  msg.role === "user" 
                    ? "bg-black text-white rounded-tr-none" 
                    : "bg-white border border-zinc-200 text-black rounded-tl-none shadow-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-zinc-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Zadaj pytanie..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="w-full bg-zinc-100 border-none rounded-2xl px-4 py-3 pr-12 text-sm focus:ring-2 focus:ring-black transition-all"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black text-white rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
            <p className="text-[9px] text-center text-zinc-400 mt-3 uppercase tracking-tighter">
              AI może generować błędy. Zweryfikuj dane z naszym ekspertem.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
