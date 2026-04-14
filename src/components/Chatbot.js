const Chatbot = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
        { type: 'bot', text: "Hello! I'm Ankush's AI Assistant. Ask me anything about his technical expertise." }
    ]);
    const [isTyping, setIsTyping] = React.useState(false);

    const questions = [
        { q: "What is your main expertise?", a: "Ankush specializes in Generative AI, Large Language Models (LLMs), and semantic search architectures like RAG." },
        { q: "Tell me about ResuScore.", a: "ResuScore is an AI-powered ATS system that uses Sentence Transformers to match resumes with 95% accuracy. It's built with Python and NLP libraries." },
        { q: "What tech stack do you use?", a: "He primarily develops in Python (TensorFlow, PyTorch, Langchain) and C++, with high proficiency in data science pipelines." }
    ];

    const handleQuestion = (q, a) => {
        setMessages(prev => [...prev, { type: 'user', text: q }]);
        setIsTyping(true);
        
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { type: 'bot', text: a }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-10 right-10 z-[1000]">
            {/* FAB */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border-4 border-black"
            >
                {isOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <div className="relative">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
                    </div>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[400px] h-[600px] glass rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border-white/10 flex flex-col overflow-hidden animate-fade-in-up">
                    <div className="p-8 bg-white/5 border-b border-white/5">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold uppercase tracking-widest text-white">Neural Assistant</span>
                        </div>
                    </div>

                    <div className="flex-grow p-8 overflow-y-auto space-y-6 scrollbar-hide">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                                    m.type === 'user' 
                                        ? 'bg-white text-black font-medium' 
                                        : 'bg-white/5 text-slate-300 border border-white/5'
                                }`}>
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 px-5 py-4 rounded-3xl border border-white/5 flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-8 space-y-3 bg-white/5 border-t border-white/5">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Preset Inquiries</div>
                        <div className="flex flex-col space-y-2">
                            {questions.map((q, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => handleQuestion(q.q, q.a)}
                                    className="text-left px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 hover:text-white hover:border-white/20 transition-all"
                                >
                                    {q.q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
