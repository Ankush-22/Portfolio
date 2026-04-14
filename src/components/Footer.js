const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <a href="#" className="text-xl font-['Outfit'] font-bold text-slate-900 dark:text-white">
                            Ankush<span className="text-accent">Kumar.</span>
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                            AI Engineer | ML Enthusiast
                        </p>
                    </div>

                    <div className="flex space-x-8">
                        {['About', 'Skills', 'Projects', 'Experience'].map(link => (
                            <a 
                                key={link} 
                                href={`#${link.toLowerCase()}`} 
                                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-accent transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="https://www.linkedin.com/in/ankush-mallick750/" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-accent transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="https://github.com/Ankush-22" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-accent transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                    </div>
                </div>
                
                <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-600">
                    © {new Date().getFullYear()} Ankush Kumar Mallick. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
