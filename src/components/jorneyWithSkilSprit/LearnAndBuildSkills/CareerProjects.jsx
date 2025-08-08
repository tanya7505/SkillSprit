export default function CareerProjects() {
  const projects = [
    {
      title: "AI-Powered Resume Analyzer",
      description:
        "A web app where users upload their resume, and the AI evaluates it based on job descriptions, ATS scoring, and skill gap analysis. Provides feedback on improving keywords, formatting, and highlighting strengths. Boost: Enhances portfolio with AI + NLP skills, and showcases job-readiness tools."
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A dashboard that helps users manage income, expenses, and savings goals. Includes charts, budget insights, and financial health score. Boost: Showcases data visualization & real-world problem-solving."
    },
    {
      title: "Smart Agriculture Dashboard",
      description:
        "Real-time crop data, weather predictions, and market price trends for farmers. Boost: Demonstrates integration of APIs, data analytics, and UI/UX design."
    },
    {
      title: "AI Interview Coach",
      description:
        "AI-driven mock interview simulator with feedback on answers, tone, and confidence. Boost: Combines AI + web dev skills with career enhancement tools."
    }
  ];

  return (
    <section className="px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Career Boosting Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 
            hover:shadow-2xl transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-800">
              {project.title}
            </h2>

            <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
