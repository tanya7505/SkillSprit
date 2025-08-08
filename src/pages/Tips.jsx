export default function Tips() {
  const tips = [
    { icon: "📚", title: "Manage Your Time", description: "Plan your week ahead and balance study with fun activities." },
    { icon: "🤝", title: "Join Clubs", description: "Get involved in activities to network and build new skills." },
    { icon: "📝", title: "Take Good Notes", description: "Write clear notes during lectures to revise easily later." },
    { icon: "💡", title: "Ask Questions", description: "Don’t hesitate to clarify doubts with professors or peers." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
        College Tips to Thrive
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {tips.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transform hover:scale-[1.03] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
              <span className="text-2xl">{icon}</span> {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
