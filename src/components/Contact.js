const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-['Outfit'] font-bold text-slate-900 dark:text-white mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Whether you have a specific project in mind or just want to chat about the latest in technology, I'm always open to new opportunities.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: '📧', label: 'Email', value: 'ankushmallick750@gmail.com' },
                                    { icon: '🔗', label: 'Availability', value: 'Open for new projects' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl shadow-lg border border-white/5 shadow-black/5 transition-all hover:bg-purple-500/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
                                            <div className="font-semibold text-slate-900 dark:text-white">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden group glass-card">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="John Smith" 
                                            className="w-full px-5 py-4 bg-white/5 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                                        <input 
                                            type="email" 
                                            placeholder="john@example.com" 
                                            className="w-full px-5 py-4 bg-white/5 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all dark:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                                    <input 
                                        type="text" 
                                        placeholder="Project Collaboration" 
                                        className="w-full px-5 py-4 bg-white/5 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                                    <textarea 
                                        rows="4" 
                                        placeholder="Tell me more about your project..." 
                                        className="w-full px-5 py-4 bg-white/5 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all dark:text-white resize-none"
                                    ></textarea>
                                </div>
                                <button className="w-full py-4 btn-premium text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
