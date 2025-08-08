export default function Footer(){
    return(
        <footer className="bg-slate-900 text-slate-300 py-10">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
    
  
    <div>
      <h3 className="text-2xl font-bold text-white mb-2">SkillSprit</h3>
      <p className="text-sm">
        Empowering students to lead with skills, not just scores.
      </p>
    </div>

    
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#home" className="text-teal-400 hover:text-white">Home</a></li>
        <li><a href="#why" className="text-teal-400 hover:text-white">Why SkillSprit?</a></li>
        <li><a href="#testimonials" className="text-teal-400 hover:text-white">Testimonials</a></li>
        <li><a href="#contact" className="text-teal-400 hover:text-white">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
      <form className="flex flex-col space-y-2 text-sm">
        <input 
          type="email" 
          placeholder="Your email" 
          className="p-2 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      </form>
    </div>

   
  </div>

  <div className="text-center text-xs text-slate-500 mt-10">
    © Build by Tanya Bansal 2025 SkillSprit. All rights reserved.
  </div>
</footer>

    )
}