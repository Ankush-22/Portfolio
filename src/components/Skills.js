const Skills = () => {
    const categories = [
        {
            title: "ML and AI",
            skills: [
                "Supervised Learning", "Unsupervised Learning", "XGBoost", 
                "Neural Networks", "Transformers", "GPT", "BERT", "GenAI"
            ],
            size: "md:col-span-2 md:row-span-2"
        },
        {
            title: "Libraries and Framework",
            skills: [
                "TensorFlow", "Keras", "PyTorch", "Scikit-learn", 
                "NLTK", "Langchain", "Langgraph"
            ],
            size: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Programming",
            skills: ["Python", "C", "C++", "SQL"],
            size: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Technical Skills",
            skills: ["DBMS", "DSA", "OOPS", "OS", "Fundamentals"],
            size: "md:col-span-1 md:row-span-1"
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-500">Inventory</span>
                    <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold text-white">Technical Arsenal</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px]">
                    {categories.map((cat, i) => (
                        <div 
                            key={i} 
                            className={`glass p-8 rounded-[2.5rem] flex flex-col justify-between glass-card border-white/5 group ${cat.size}`}
                        >
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                                    {cat.title}
                                </h3>
                                <div className="h-[1px] w-12 bg-white/20 group-hover:w-24 transition-all duration-500"></div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-8">
                                {cat.skills.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Visual Filler for Bento Feel */}
                    <div className="glass p-8 rounded-[2rem] glass-card border-white/5 flex items-center justify-center col-span-1 row-span-1">
                        <div className="text-center space-y-2 opacity-30">
                            <div className="text-3xl">🧩</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Problem Solver</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
