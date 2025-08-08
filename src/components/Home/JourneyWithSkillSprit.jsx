import { Compass, Code2, Users, TrendingUp } from "lucide-react";

export default function JourneyWithSKillSprit() {
  return (
    <section className="flex flex-col items-center bg-[#F9FAFB] py-12 px-4">
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl font-bold font-serif text-slate-700 p-5">
          “From Freshman to Final Year: Your Growth Path.”
        </h1>
        <p className="text-xl text-slate-500 mt-4">
          A step-by-step guide to help you grow from a newcomer to a confident,
          skilled student — with SkillSprit by your side.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Getting Started */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center">
          <Compass size={64} className="text-blue-600 mb-4" />
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Getting Started
          </h2>
          <p className="text-sm text-slate-600">
            Settle into college life with helpful guides, campus tips, and student connect features.
          </p>
        </div>

        {/* Skill Up */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center">
          <Code2 size={64} className="text-green-600 mb-4" />
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Skill Up
          </h2>
          <p className="text-sm text-slate-600">
            Sharpen your talents with access to beginner-friendly coding, design, and soft skill resources.
          </p>
        </div>

        {/* Get Involved */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center">
          <Users size={64} className="text-purple-600 mb-4" />
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Get Involved
          </h2>
          <p className="text-sm text-slate-600">
            Join communities, take part in fests, and contribute to real projects.
          </p>
        </div>

        {/* Level Up */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center">
          <TrendingUp size={64} className="text-red-600 mb-4" />
          <h2 className="text-lg font-semibold text-slate-700 mb-2">
            Level Up
          </h2>
          <p className="text-sm text-slate-600">
            Build your resume, work on capstone projects, and prepare for your dream career.
          </p>
        </div>

      </div>
    </section>
  );
}
