export default function StudyResources() {
  const resources = [
    {
      title: "HTML & CSS Crash Course",
      description: "Complete beginner-friendly guide to mastering HTML and CSS from scratch.",
      link: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
      color: "from-pink-500 to-red-400"
    },
    {
      title: "JavaScript Full Course",
      description: "Covers JavaScript basics to advanced DOM manipulation and ES6+ concepts.",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      color: "from-blue-500 to-indigo-400"
    },
    {
      title: "React.js Tutorial",
      description: "Hands-on React.js course with projects for beginners.",
      link: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Java Full Course",
      description: "Covers Java fundamentals, OOP, and basic project building.",
      link: "https://www.youtube.com/watch?v=grEKMHGYyns",
      color: "from-yellow-500 to-orange-400"
    },
    {
      title: "Data Structures & Algorithms",
      description: "DSA concepts explained in an easy and beginner-friendly manner.",
      link: "https://www.youtube.com/watch?v=8hly31xKli0",
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          📚 Study Resources
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res, index) => (
            <a
              key={index}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${res.color} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300`}
            >
              <h2 className="text-2xl font-semibold mb-2">{res.title}</h2>
              <p className="opacity-90">{res.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
