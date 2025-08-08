import { Link } from "react-router-dom"


export default function HeroSection () {
    return (
      <div className="shadow-xl flex justify-between items-center animate-fade-in bg-gradient-to-br from-[#E0F2FE] to-[#F9FAFB]
">
           <div className="p-4 ">
            <h1 className="py-5 text-4xl text-[#1E293B] font-extrabold font-serif">
            Welcome to SkillSprit!
              </h1>
            <h2 className="text-2xl font-bold text-[#475569]">
            Your College Journey Starts Here.
              </h2>
            <p className="  text-pretty text-indigo-800 font-semibold">Resources, tips, and tools for every college newcomer.</p>
            <button className="hover:bg-blue-600 bg-[#3B82F6] p-4 my-3 rounded-2xl text-lg font-semibold text-gray-900"> 
                <Link to='/features'>
            Explore!
            </Link>
            </button>
           </div>
          
      </div>
    )
}