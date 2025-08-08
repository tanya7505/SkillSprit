import {Link} from 'react-router-dom'



export default function LearnAndBuild(){


    return(
        <section className="bg-slate-100 min-h-screen py-12 px-6">
              <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
  Learn & Build with SkillSprit
</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Explore career projects*/}
            <Link to="/careerProjects" className="cursor-pointer">
             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
    <h2 className="text-xl font-bold text-slate-700 mb-2">Explore Career Projects</h2>
    <p className="text-slate-500">Discover real-world career-oriented project ideas to boost your portfolio.</p>
  </div>
            </Link>
            {/* Projects*/}

            <Link to= "/projects"  className="cursor-pointer">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
    <h2 className="text-xl font-bold text-slate-700 mb-2">Mini Projects</h2>
    <p className="text-slate-500">Practice some projects to sharp your Developer Skills.</p>
  </div>
                </Link>
            {/* Roadmap Generator*/}
           <Link to="/roadmapForm" className="cursor-pointer">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
    <h2 className="text-xl font-bold text-slate-700 mb-2">Roadmap Generator</h2>
    <p className="text-slate-500">Generate a path for the Road you choosen.</p>
  </div>
                </Link >
            {/* Smart Study Resources*/}
            <Link to="/studyResources" className="cursor-pointer">
             <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
    <h2 className="text-xl font-bold text-slate-700 mb-2">Study Resources</h2>
    <p className="text-slate-500">Get the best resources On the YouTube. Direct links available here.</p>
  </div>
                </Link>
                </div>
        </section>
    )
}