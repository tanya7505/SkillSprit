import { Link } from "react-router-dom";
import { BookOpen, Lightbulb, Laptop, GraduationCap, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Student Roadmap",
      desc: "Get a personalized roadmap based on your year & career goals.",
      icon: <GraduationCap className="w-10 h-10 text-indigo-600" />,
      link: "/roadmapForm",
      bg: "bg-indigo-50",
    },
    {
      title: "College Life Tips",
      desc: "Practical tips & hacks to make your campus life easier.",
      icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
      link: "/Tips",
      bg: "bg-yellow-50",
    },
    {
      title: "Study Resources",
      desc: "Best curated YouTube resources for every subject.",
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      link: "/studyResources",
      bg: "bg-green-50",
    },
    {
      title: "Mini & Major Projects",
      desc: "Work on exciting beginner to advanced projects.",
      icon: <Laptop className="w-10 h-10 text-blue-600" />,
      link: "/projects",
      bg: "bg-blue-50",
    },
    {
      title: "Campus Made Easy",
      desc: "Know about clubs, committees, events, and hackathons.",
      icon: <Users className="w-10 h-10 text-pink-600" />,
      link: "/campusMadeEasy",
      bg: "bg-pink-50",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Explore Features
      </h1>
      <div className="grid gap-6 max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`${item.bg} p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300`}
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h2 className="text-xl font-semibold mt-4 text-gray-900">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
