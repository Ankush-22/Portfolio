const Projects = () => {
    const projects = [
        {
            title: "ResuScore - AI ATS",
            description: "An AI-powered ATS system using Sentence Transformers and Plotly for semantic resume matching and skill gap analysis.",
            tags: ["Python", "NLP", "Transformers", "Plotly"],
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
            link: "https://github.com/Ankush-22/ResuScore",
            github: "https://github.com/Ankush-22/ResuScore"
        },
        {
            title: "ReviewLens",
            description: "A hybrid AI web application designed to detect deceptive hotel reviews using Semantic NLP (TF-IDF) and Stylometric Analysis.",
            tags: ["NLP", "Machine Learning", "Python", "Scikit-Learn"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
            link: "https://github.com/Ankush-22/ReviewLens",
            github: "https://github.com/Ankush-22/ReviewLens"
        },
        {
            title: "Heart Disease Prediction",
            description: "End-to-end heart disease risk prediction system using Machine Learning and Streamlit for real-time diagnostics.",
            tags: ["Machine Learning", "Streamlit", "Pandas", "Healthcare AI"],
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
            link: "https://github.com/Ankush-22/Heart-Disease-Risk-Prediction",
            github: "https://github.com/Ankush-22/Heart-Disease-Risk-Prediction"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                        <p className="text-slate-500 dark:text-slate-400">A collection of things I've built that I'm particularly proud of.</p>
                    </div>
                    <a href="#" className="text-accent font-bold hover:underline underline-offset-8">See all my projects →</a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <a 
                            key={i} 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative glass rounded-3xl overflow-hidden glass-card flex flex-col hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-purple-500/30"
                        >
                            {/* Project Image */}
                            <div className="aspect-video overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.5] group-hover:grayscale-0 shadow-2xl shadow-purple-500/10"
                                />
                            </div>

                            {/* Content Info */}
                            <div className="p-8 space-y-4 flex-grow relative overflow-hidden">
                                {/* Subtle background glow on hover */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-purple-500/10 text-purple-500 rounded-md border border-purple-500/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold dark:text-white group-hover:text-purple-500 transition-colors">{project.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 line-clamp-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="pt-4 flex items-center text-purple-500 font-bold text-sm">
                                    Source Code <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
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
