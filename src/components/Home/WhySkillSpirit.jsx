import { Link } from 'react-router-dom';
import { BookOpen, PartyPopper, Route, Briefcase } from 'lucide-react';

export default function WhySkillSpirit() {
  return (
    <section className="flex flex-col items-center bg-[#F9FAFB] py-12 px-4">
      <div className="text-4xl font-bold font-serif text-[#0F172A] p-5">
        <h1>“Kickstart Your College Journey.”</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Smart Study Resources */}
        <Link to="/studyResources">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
            <BookOpen size={60} className="text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Smart Study Resources</h2>
            <p className="text-gray-600 text-center">
              Notes, DSA prep, semester-wise guides, and helpful tools to ace your academics.
            </p>
          </div>
        </Link>

        {/* Campus Made Easy */}
        <Link to="/campusMadeEasy">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
            <PartyPopper size={60} className="text-green-600 mb-4" />
            <h2 className="text-xl font-semibold text-green-600 mb-2">Campus Made Easy</h2>
            <p className="text-gray-600 text-center">
              Discover college clubs, events, and ways to get involved with your batchmates.
            </p>
          </div>
        </Link>

        {/* Learn & Build Skills */}
        <Link to="/learnAndBuild">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
            <Route size={60} className="text-yellow-600 mb-4" />
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Learn & Build Skills</h2>
            <p className="text-gray-600 text-center">
              Explore roadmaps and beginner projects in coding, design, or soft skills.
            </p>
          </div>
        </Link>

        {/* Explore Career Paths */}
        <Link to="/roadmapForm">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center">
            <Briefcase size={60} className="text-red-600 mb-4" />
            <h2 className="text-xl font-semibold text-red-600 mb-2">Explore Career Paths</h2>
            <p className="text-gray-600 text-center">
              Get early exposure to career options, internships, and skill-building tips for a confident future.
            </p>
          </div>
        </Link>

      </div>
    </section>
  );
}
