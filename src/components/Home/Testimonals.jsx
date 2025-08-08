import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Rocket, BookOpen, Lightbulb, Star, Target, Code, Users } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  const testimonials = [
    {
      icon: Rocket,
      quote: "The best way to get started is to quit talking and begin doing.",
      name: "Walt Disney",
      title: "Entrepreneur & Animator",
    },
    {
      icon: BookOpen,
      quote: "Learning never exhausts the mind.",
      name: "Leonardo da Vinci",
      title: "Renaissance Polymath",
    },
    {
      icon: Lightbulb,
      quote: "If you're not embarrassed by the first version of your product, you've launched too late.",
      name: "Reid Hoffman",
      title: "Co-founder, LinkedIn",
    },
    {
      icon: Star,
      quote: "No dream is too big. No idea is too small. Just start.",
      name: "Falguni Nayar",
      title: "Founder & CEO, Nykaa",
    },
    {
      icon: Target,
      quote: "You don’t need a big team to build something great. You need belief, clarity, and relentless execution.",
      name: "Bhavish Aggarwal",
      title: "Co-founder, Ola Cabs",
    },
    {
      icon: Users,
      quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
      name: "Mark Zuckerberg",
      title: "Founder & CEO, Meta",
    },
    {
      icon: Code,
      quote: "Talk is cheap. Show me the code.",
      name: "Linus Torvalds",
      title: "Creator of Linux Kernel & Git, Open Source Pioneer",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <h2 className="text-4xl font-bold text-center text-slate-700 mb-10">Words That Inspire</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6 max-w-7xl mx-auto"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-300 rounded-xl shadow-lg p-6 text-center">
              <t.icon className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
              <p className="italic text-slate-800 mb-4">“{t.quote}”</p>
              <h4 className="font-bold text-slate-800">{t.name}</h4>
              <p className="text-sm text-slate-500">{t.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
