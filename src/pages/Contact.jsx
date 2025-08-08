import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full px-6 py-12 bg-lime-50 text-slate-800">
      <h1 className="text-4xl font-extrabold text-center mb-10">Get in Touch</h1>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Info</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p className="flex items-center gap-3">
              <Mail className="text-green-500" /> skillsprit1234@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-green-500" /> 7845965845
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-green-500" /> Meerut, Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
