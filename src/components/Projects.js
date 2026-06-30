const Projects = () => {
    const projects = [
        {
            title: "YouTube RAG Assistant",
            subtitle: "AI Video Research Tool",
            description: "A modular RAG application extracting YouTube transcripts into a searchable FAISS index for AI-powered Q&A using LangChain, Streamlit, and Groq.",
            tags: ["LangChain", "Streamlit", "FAISS"],
            github: "https://github.com/Ankush-22/YouTube-Video-RAG-Assistant",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
            size: "md:col-span-2 md:row-span-2"
        },
        {
            title: "ResuScore",
            subtitle: "Semantic AI ATS",
            description: "A high-performance recruitment engine using Sentence Transformers to semantically match resumes to job descriptions with 95% accuracy.",
            tags: ["Python", "Transformers", "NLP"],
            github: "https://github.com/Ankush-22/ResuScore",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
            size: "md:col-span-1 md:row-span-1"
        },
        {
            title: "ReviewLens",
            subtitle: "Deceptive Hotel Detection",
            description: "ML pipeline identifying fake hotel reviews using semantic analysis and NLP techniques.",
            tags: ["Machine Learning", "NLP"],
            github: "https://github.com/Ankush-22/ReviewLens",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
            size: "md:col-span-1 md:row-span-1"
        },
        {
            title: "Heart Risk AI",
            subtitle: "Medical Diagnostics",
            description: "Predictive analytics for early heart disease detection with Streamlit UI.",
            tags: ["Streamlit", "Scikit-Learn"],
            github: "https://github.com/Ankush-22/Heart-Disease-Risk-Prediction",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
            size: "md:col-span-3 md:row-span-1"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-500">Exhibit</span>
                    <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold text-white">Intelligent Systems</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-[300px]">
                    {projects.map((p, i) => (
                        <a 
                            key={i} 
                            href={p.github} 
                            target="_blank" 
                            className={`group relative glass rounded-[2.5rem] overflow-hidden glass-card border-white/5 flex flex-col ${p.size}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
                            
                            <img 
                                src={p.image} 
                                alt={p.title} 
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />

                            <div className="relative z-20 p-10 h-full flex flex-col justify-end space-y-4">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-500">{p.subtitle}</div>
                                    <h3 className="text-3xl font-bold dark:text-white group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                                </div>
                                
                                <p className="text-slate-400 text-sm leading-relaxed max-w-md line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {p.tags.map(t => (
                                        <span key={t} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 text-white rounded-md border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="pt-4 flex items-center text-white/50 group-hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                                    Source Artifacts <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
