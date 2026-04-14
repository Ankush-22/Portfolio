const Experience = () => {
    const timeline = [
        {
            role: "Aspiring Data Scientist",
            company: "AI & ML Enthusiast",
            duration: "Present",
            description: "Currently pursuing a degree in Data Science and honing skills in Python, TensorFlow, and Scikit-learn to design effective data-driven solutions.",
            type: "work"
        },
        {
            role: "B.Tech in Computer Science & Engineering",
            company: "University of Engineering & Management (UEM), Jaipur",
            duration: "Ongoing",
            description: "Developing a strong foundation in core Computer Science fundamentals including DSA, DBMS, OOPS, and OS while specializing in AI and Machine Learning.",
            type: "education"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-100/30 dark:bg-slate-900/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-slate-900 dark:text-white mb-4">Experience & Education</h2>
                    <p className="text-slate-500 dark:text-slate-400">My professional journey and academic background.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                    {timeline.map((item, i) => (
                        <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                            {/* Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-purple-500 shadow-lg shadow-purple-500/10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                {item.type === 'work' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h20v14H2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                                )}
                            </div>
                            
                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-3xl shadow-xl transition-all hover:scale-[1.02]">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-white">{item.role}</div>
                                    <time className="text-xs font-semibold uppercase tracking-wider text-purple-500">{item.duration}</time>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-3">{item.company}</div>
                                <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
