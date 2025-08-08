export default function CampusMadeEasy() {
  const clubs = [
    { name: "CXI", desc: "Technical club focusing on innovation and projects.", type: "Tech Club" },
    { name: "MLSA MIET", desc: "Microsoft Learn Student Ambassadors club.", type: "Society" },
  ];

  const committees = [
    { name: "Ahimsa", desc: "Social committee promoting welfare & awareness.", type: "Social Committee" },
    { name: "Abhivyakti", desc: "Literary committee for writing, debates & public speaking.", type: "Literary Committee" },
    { name: "Swarang", desc: "Music committee organizing cultural and music events.", type: "Music Committee" },
    { name: "Sanskriti", desc: "Cultural committee for dance, drama, and traditions.", type: "Cultural Committee" },
  ];

  const events = [
    { name: "Kolahaal", desc: "Annual college fest with cultural, tech, and fun activities.", type: "Mega Event" },
    { name: "Hackathons", desc: "Competitive coding and problem-solving events.", type: "Tech Event" },
  ];

  const sectionStyle = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform duration-300";

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800">Campus Made Easy</h1>

      {/* Clubs Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Clubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div key={index} className={sectionStyle}>
              <h3 className="text-xl font-bold">{club.name}</h3>
              <p className="mt-2 text-sm">{club.desc}</p>
              <span className="mt-4 inline-block text-xs bg-white text-purple-600 px-3 py-1 rounded-full">
                {club.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Committees Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Committees</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <div key={index} className={sectionStyle}>
              <h3 className="text-xl font-bold">{committee.name}</h3>
              <p className="mt-2 text-sm">{committee.desc}</p>
              <span className="mt-4 inline-block text-xs bg-white text-purple-600 px-3 py-1 rounded-full">
                {committee.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className={sectionStyle}>
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="mt-2 text-sm">{event.desc}</p>
              <span className="mt-4 inline-block text-xs bg-white text-purple-600 px-3 py-1 rounded-full">
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
