export default function Projects() {
  const miniProjects = [
    {
      title: "To-Do List App",
      description: "A simple app to add, edit, and delete tasks with local storage support.",
    },
    {
      title: "Weather App",
      description: "Fetch real-time weather data using a public API and display it beautifully.",
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses and visualize them with charts.",
    },
    {
      title: "Quiz App",
      description: "Interactive quiz with multiple-choice questions and score tracking.",
    },
    {
      title: "Recipe Finder",
      description: "Search recipes from an API based on ingredients you have.",
    },
    {
      title: "Digital Clock",
      description: "A stylish clock showing time, date, and greeting messages.",
    },
  ];

  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Mini Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {miniProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-indigo-500 group"
            >
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-gray-100">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
