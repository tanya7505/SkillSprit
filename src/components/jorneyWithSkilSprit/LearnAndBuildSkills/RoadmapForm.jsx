import { useState } from "react";

export default function RoadmapForm() {
  const [year, setYear] = useState("");
  const [goals, setGoals] = useState([]);
  const [roadmap, setRoadmap] = useState("");



    // Dummy roadmaps
    const roadmapData = {
  "1st": {
    "Web Development": `
- Learn HTML, CSS fundamentals.
- Understand basic JavaScript (DOM, events).
- Build 2-3 beginner-level static websites.
- Learn Git & GitHub basics.
- Start portfolio website.
    `.trim(),

    "Java Developer": `
- Learn Java syntax, OOPs concepts.
- Practice basic Java programs (loops, arrays, strings).
- Learn to use IDEs (IntelliJ, Eclipse).
- Start simple projects like calculator or number games.
    `.trim(),

    "Data Science": `
- Learn Python basics (variables, loops, data structures).
- Understand basic statistics (mean, median, mode).
- Introduction to Jupyter Notebook.
- Start using NumPy and Pandas.
- Watch beginner-level data science projects on Kaggle.
    `.trim(),

    "DSA Focused": `
- Master basic data structures: Arrays, Strings, LinkedList.
- Learn recursion and its basic problems.
- Solve 50+ problems on platforms like LeetCode or CodeStudio.
- Focus on brute force thinking and dry runs.
    `.trim(),
  },

  "2nd": {
    "Web Development": `
- Learn advanced JavaScript (ES6, closures, promises).
- Master frontend frameworks like React.js.
- Learn basics of backend: Node.js + Express.js.
- Create full-stack mini projects with MongoDB.
- Deploy projects using Netlify or Vercel.
    `.trim(),

    "Java Developer": `
- Study Java Collections Framework deeply.
- Start solving DSA questions in Java (Stacks, Queues, Trees).
- Learn JDBC and connect Java with MySQL.
- Start building Swing/JavaFX GUI-based apps.
    `.trim(),

    "Data Science": `
- Deep dive into Python libraries: Matplotlib, Seaborn.
- Learn SQL for data analysis.
- Study ML basics: Regression, Classification.
- Work on 2-3 ML projects.
- Learn EDA (Exploratory Data Analysis) on datasets.
    `.trim(),

    "DSA Focused": `
- Master Trees, Graphs, Hashmaps.
- Understand Time Complexity deeply.
- Practice 150+ problems.
- Start learning 2-pointer, sliding window, and greedy techniques.
- Participate in college-level contests.
    `.trim(),
  },

  "3rd": {
    "Web Development": `
- Work with REST APIs, authentication (JWT).
- Learn deployment: CI/CD, GitHub Actions.
- Start using TailwindCSS, TypeScript (optional).
- Make major full-stack projects.
- Contribute to open-source or freelance.
    `.trim(),

    "Java Developer": `
- Learn Spring Boot (basic CRUD, REST APIs).
- Integrate MySQL or MongoDB in projects.
- Start preparing for backend Java internships.
- Master exception handling, file I/O.
- Build 2 backend-heavy applications.
    `.trim(),

    "Data Science": `
- Learn advanced ML algorithms: Decision Trees, SVM, KNN.
- Start with Deep Learning: TensorFlow or PyTorch basics.
- Create 3-4 serious end-to-end ML projects.
- Publish notebooks on Kaggle or GitHub.
- Learn about data storytelling.
    `.trim(),

    "DSA Focused": `
- Focus on advanced topics: DP, Tries, Segment Trees.
- Solve 300+ problems (including company tags).
- Time-bound solving and contests (Codeforces, LeetCode Weekly).
- Learn about interview prep patterns.
    `.trim(),
  },

  "4th": {
    "Web Development": `
- Polish all projects and build a stunning portfolio.
- Prepare for web dev interviews (HTML/CSS/JS/React/Node).
- Apply for SDE and Frontend Developer roles.
- Learn system design basics.
- Mentor juniors or give mock interviews.
    `.trim(),

    "Java Developer": `
- Build scalable backend projects using Spring Boot.
- Work on multithreading, collections in depth.
- Prepare for SDE interviews (Java + DSA).
- Learn basics of Microservices (optional).
- Contribute to open-source Java repos.
    `.trim(),

    "Data Science": `
- Focus on real-time projects (resume-quality).
- Learn Model Deployment: Flask or Streamlit.
- Apply for Data Analyst/ML Intern roles.
- Learn Big Data basics (Spark, Hadoop – optional).
- Mock interviews and resume building.
    `.trim(),

    "DSA Focused": `
- Complete a 450/Striver DSA Sheet.
- Mock interviews on InterviewBit, Pramp, or peers.
- Focus on company-specific questions.
- Learn System Design basics.
- Apply for SDE roles via off-campus platforms.
    `.trim(),
  },
};

 const handleGoalChange = (e) => {
    const value = e.target.value;
    setGoals((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!year || goals.length === 0) {
      setRoadmap("⚠ Please select your year and at least one goal.");
      return;
    }
    const roadmapText = goals
      .map((goal) => {
        const content = roadmapData[year]?.[goal] || "Roadmap not available.";
        return `👉 ${goal}:\n${content}`;
      })
      .join("\n\n");

    setRoadmap(roadmapText);
  };

  return (
    <section className="w-full py-12 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          🚀 Build Your Personalized Roadmap
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Year Selection */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-4">
              Select Your Year
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["1st", "2nd", "3rd", "4th"].map((y) => (
                <button
                  type="button"
                  key={y}
                  onClick={() => setYear(y)}
                  className={`py-3 rounded-lg font-medium transition-all ${
                    year === y
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {y} Year
                </button>
              ))}
            </div>
          </div>

          {/* Goal Selection */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-4">
              Select Your Goal(s)
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Web Development", "Java Developer", "Data Science", "DSA Focused"].map((goal) => (
                <label
                  key={goal}
                  className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    goals.includes(goal)
                      ? "bg-green-100 border-green-500"
                      : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={goal}
                    checked={goals.includes(goal)}
                    onChange={handleGoalChange}
                    className="w-5 h-5 text-green-600"
                  />
                  <span className="font-medium">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Generate My Roadmap
            </button>
          </div>
        </form>

        {/* Output Roadmap */}
        {roadmap && (
          <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🎯 Your Roadmap
            </h2>
            <pre className="whitespace-pre-wrap text-gray-800">{roadmap}</pre>
          </div>
        )}
      </div>
    </section>
  );
}