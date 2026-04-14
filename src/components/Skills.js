const Skills = () => {
    const skillCategories = [
        {
            title: "Machine Learning & AI",
            skills: [
                { name: "Langchain & Langgraph", level: 85, color: "#F7931E" },
                { name: "TensorFlow / Keras", level: 85, color: "#FF6F00" },
                { name: "Scikit-learn", level: 90, color: "#F7931E" },
                { name: "NLTK / NLP", level: 90, color: "#06B6D4" },
                { name: "Generative AI", level: 80, color: "#E11D48" },
            ]
        },
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 95, color: "#3776AB" },
                { name: "C / C++", level: 85, color: "#00599C" },
                { name: "SQL", level: 85, color: "#4479A1" },
            ]
        },
        {
            title: "Technical Fundamentals",
            skills: [
                { name: "DSA", level: 85, color: "#61DAFB" },
                { name: "DBMS", level: 80, color: "#4169E1" },
                { name: "OOPS", level: 90, color: "#339933" },
                { name: "Operating Systems", level: 75, color: "#2496ED" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/20 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
                    <p className="text-slate-500 dark:text-slate-400">Tools and technologies I use to bring ideas to life.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="glass p-8 rounded-3xl space-y-8 glass-card border-white/5 hover:border-purple-500/20">
                            <h3 className="text-xl font-bold dark:text-white flex items-center">
                                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mr-3 text-purple-500 border border-purple-500/20 shadow-lg">
                                    {i === 0 ? '🤖' : i === 1 ? '💻' : '📚'}
                                </span>
                                {cat.title}
                            </h3>
                            <div className="space-y-6">
                                {cat.skills.map((skill, index) => (
                                    <div key={index} className="space-y-2 group/skill">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover/skill:text-purple-500 transition-colors">{skill.name}</span>
                                            <span className="text-slate-400 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Visual grid of common tool icons */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {['VS Code', 'Git', 'Figma', 'Postman', 'Vercel', 'Netlify'].map(tool => (
                        <div key={tool} className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center font-bold text-xs text-center">{tool}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
