const Navbar = ({ isDark, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${
            isScrolled ? 'w-[auto] translate-y-0' : 'w-full max-w-5xl translate-y-0'
        }`}>
            <div className={`mx-auto px-6 py-3 glass rounded-full flex items-center transition-all duration-500 ${
                isScrolled ? 'shadow-2xl shadow-black/50 border-white/10' : 'bg-transparent border-transparent'
            }`}>
                <div className="flex items-center space-x-12 mx-auto">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    {/* Minimalist Theme Toggle */}
                    <button 
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/5 transition-all text-slate-400 hover:text-white"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.661l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
