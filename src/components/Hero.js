const Hero = () => {
    const occupations = ["ML Engineer", "AI Engineer", "Data Scientist"];
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);

    // Typing Effect
    React.useEffect(() => {
        if (subIndex === occupations[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % occupations.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === occupations[index].length ? 1000 : 150, parseInt(Math.random() * 50)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Abstract Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in inline-block px-4 py-1 glass rounded-full mb-4">
                            Welcome to my universe
                        </h2>
                        
                        <h1 className="text-5xl md:text-8xl font-['Outfit'] font-bold text-slate-900 dark:text-white leading-tight">
                            Hi, I'm <span className="text-gradient">Ankush Kumar Mallick</span>
                        </h1>
                        
                        <div className="h-16 flex items-center justify-center">
                            <span className="text-3xl md:text-4xl font-medium text-slate-600 dark:text-slate-400">
                                Aspiring {occupations[index].substring(0, subIndex)}
                                <span className="inline-block w-1.5 h-10 ml-2 bg-gradient-to-b from-purple-500 to-blue-500 animate-pulse"></span>
                            </span>
                        </div>
                    </div>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Dedicated to building intelligent systems that push the boundaries of what's possible. 
                        My focus lies at the intersection of Machine Learning, Deep Learning, and Generative AI.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <a 
                            href="#projects" 
                            className="px-10 py-5 btn-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all flex items-center group shadow-2xl"
                        >
                            View Portfolio
                            <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a 
                            href="#contact" 
                            className="px-10 py-5 glass text-slate-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
                        >
                            Get In Touch
                        </a>
                    </div>
                    
                    {/* Social Quick Links */}
                    <div className="flex items-center justify-center space-x-8 pt-12">
                        <a href="https://github.com/Ankush-22" className="text-slate-500 hover:text-accent font-medium transition-all hover:-translate-y-1">GitHub</a>
                        <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                        <a href="https://www.linkedin.com/in/ankush-mallick750/" className="text-slate-500 hover:text-accent font-medium transition-all hover:-translate-y-1">LinkedIn</a>
                    </div>
                </div>

                {/* Decorative Scroll Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                    <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
