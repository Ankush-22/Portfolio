const Hero = () => {
    // We'll update the typing effect to be more smooth and cinematic based on the user's feedback
    const phrases = [
        "Building intelligent systems with AI/ML",
        "Solving real-world problems with data",
        "Architecting Agentic AI solutions"
    ];
    
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);

    // Typing Effect
    React.useEffect(() => {
        if (subIndex === phrases[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2500);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 50)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <span className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 border border-white/10">
                                AI ENGINEER
                            </span>
                        </div>
                        
                        <h1 
                            className="text-6xl md:text-9xl font-['Outfit'] font-bold text-white leading-tight relative inline-block glitch-hover group"
                            data-text="Ankush Kumar Mallick"
                        >
                            Ankush Kumar Mallick
                        </h1>
                        
                        <div className="h-16 flex items-center justify-center">
                            <span className="text-2xl md:text-4xl font-light text-slate-400 font-['Inter'] tracking-tight">
                                <span className="text-white font-medium">{phrases[index].substring(0, subIndex)}</span>|
                            </span>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Pursuing B.Tech in CSE from UEM, Jaipur. Specializing in Deep Learning and Agentic Systems 
                         to bridge the gap between complex data and elegant intelligence.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-10">
                        <a 
                            href="#projects" 
                            className="px-12 py-5 btn-white rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-white/10"
                        >
                            View Projects
                        </a>
                        <a 
                            href="Ankush_Kumar_Mallick_Resume.pdf" 
                            download="Ankush_Kumar_Mallick_Resume.pdf"
                            className="px-12 py-5 glass text-white rounded-2xl font-bold text-[12px] uppercase tracking-widest hover:bg-white/5 transition-all border border-white/10 flex items-center"
                        >
                            Download Resume
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88 2.303M5 21l1.414-1.414M3 21l1.414-1.414M17 11V7a4 4 0 00-8 0v4M5 11V7a4 4 0 018 0v4m-9 8l4.5 4.5 4.5-4.5M12 11v8" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-20">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-slate-500">Explore Portfolio</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
