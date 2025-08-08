import { Info, Target, HelpCircle, Gift, Eye, Users, HeartHandshake } from "lucide-react";

export default function About() {
  const sections = [
    {
      icon: <Info size={32} className="text-blue-600" />,
      title: "Introduction: Who We Are",
      desc: `SkillSpirit is a student-centric platform designed to bridge the gap between college academics and industry-ready skills.
      We empower students with structured roadmaps, resources, and community-driven initiatives to shape their career journey.`,
    },
    {
      icon: <Target size={32} className="text-green-600" />,
      title: "Our Mission",
      desc: `To make skill development easy, accessible, and personalized for every college student.
      Helping you navigate from confusion to clarity, and from theory to hands-on practice.`,
    },
    {
      icon: <HelpCircle size={32} className="text-orange-500" />,
      title: "Why SkillSpirit Exists?",
      desc: `College life can be overwhelming with endless career options and learning paths.
      Lack of proper guidance often leads to wasted efforts.
      SkillSpirit curates clear, actionable roadmaps so you can focus on learning, building, and growing confidently.`,
    },
    {
      icon: <Gift size={32} className="text-purple-600" />,
      title: "What We Offer",
      desc: `• Roadmap Generator: Personalized learning path based on your year and goals.
      • Mini Projects & Challenges: Practical tasks to strengthen your portfolio.
      • Resources Repository: Hand-picked tutorials, guides, and tools for different domains.
      • Community & Collaboration: Connect with like-minded peers and mentors.`,
    },
    {
      icon: <Eye size={32} className="text-pink-600" />,
      title: "Our Vision",
      desc: `To build a thriving community where learning by doing is the norm.
      To ensure no student feels lost in their career journey.
      SkillSpirit is more than a platform — it’s a movement towards proactive, self-paced learning.`,
    },
    {
      icon: <Users size={32} className="text-yellow-600" />,
      title: "Who is SkillSpirit For?",
      desc: `• First-year students unsure where to start.
      • Second & Third-year students looking to upskill & build projects.
      • Final-year students preparing for internships, placements, and real-world challenges.
      • Anyone who wants a clear path to becoming industry-ready.`,
    },
    {
      icon: <HeartHandshake size={32} className="text-red-600" />,
      title: "Our Belief",
      desc: `“Skills are the real Spirit.” Degrees give you eligibility, but skills give you identity.`,
    },
  ];

  return (
    <section className="w-full px-6 py-12 bg-orange-50 text-slate-700">
      <h1 className="text-4xl font-extrabold text-center mb-12">About SkillSprit</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
