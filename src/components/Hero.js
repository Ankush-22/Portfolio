const Hero = () => {
    const occupations = ["ML Engineer", "AI Engineer"];
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
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
            {/* Galaxy Star Background handled by globals.css or can be added as component here */}
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <span className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border border-white/10">
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
                                Building intelligent systems with <span className="font-bold text-white">{occupations[index].substring(0, subIndex)}</span>|
                            </span>
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Specializing in Gen AI, Machine Learning, Data Science, and Agentic AI. 
                        Transforming complex problems into elegant solutions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-10">
                        <a 
                            href="#projects" 
                            className="px-12 py-5 btn-white rounded-2xl text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10"
                        >
                            View Projects
                        </a>
                        <a 
                            href="#" 
                            className="px-12 py-5 glass text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-all border border-white/10 flex items-center"
                        >
                            View Resume
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-slate-500">Scroll to explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
