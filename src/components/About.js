const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                I am an AI enthusiast and aspiring Engineer dedicated to building intelligent systems that push the boundaries of what's possible. My focus lies at the intersection of Machine Learning, Deep Learning, and Generative AI.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                I specialize in developing AI-driven applications and exploring advanced architectures like LLMs and Agentic workflows. My goal is to design effective, data-driven solutions that solve complex real-world challenges.
                            </p>
                            <div className="p-6 glass rounded-2xl border-l-4 border-accent">
                                <p className="italic text-slate-700 dark:text-slate-200">
                                    "I am a perpetual learner, trying to hone my skills to design effective AI solutions with a focus on intelligent automation."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Projects', value: '10+' },
                                { label: 'ML Models', value: '20+' },
                                { label: 'GitHub Repos', value: '4' },
                                { label: 'Cups of Coffee', value: '∞' },
                            ].map((stat, i) => (
                                <div key={i} className="glass p-6 rounded-2xl text-center hover:bg-purple-500/5 transition-all border border-white/5 hover:border-purple-500/20 glass-card">
                                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
