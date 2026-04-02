import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Award, Users, Rocket, Code, Brain, Database, Shield, Microscope, Lightbulb, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';

const carouselImages = [
  "https://res.cloudinary.com/dbjjili1c/image/upload/v1774683108/2545d3c3-7656-417b-a950-44a725964121_zplmfo.jpg",
  "https://res.cloudinary.com/dbjjili1c/image/upload/v1774683414/1ffe11d0-341e-4d77-9e19-8cb8f0949922_xu6mru.jpg"
];

const domains = [
  { name: 'Web Development', icon: Code, color: 'blue' },
  { name: 'AI & ML', icon: Brain, color: 'indigo' },
  { name: 'Data Analyst', icon: BarChart3, color: 'emerald' },
  { name: 'Data Science', icon: Database, color: 'cyan' },
  { name: 'Cyber Security', icon: Shield, color: 'red' },
  { name: 'Patent & Research', icon: Microscope, color: 'purple' },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Web Dev Intern",
    content: "The mentorship at Aarivya Labs was exceptional. I worked on a real-world project that is now live!"
  },
  {
    name: "Priya Patel",
    role: "Data Science Intern",
    content: "Learned more in 2 months here than in a year of college. The focus on practical skills is amazing."
  },
  {
    name: "Ankit Verma",
    role: "AI/ML Intern",
    content: "Challenging projects and a very supportive environment. Highly recommend for any tech student."
  },
  {
    name: "Sneha Gupta",
    role: "Cyber Security Intern",
    content: "The hands-on experience with real-world projects at Aarivya Labs was a game-changer for my career."
  },
  {
    name: "Vikram Singh",
    role: "R&D Intern",
    content: "Mentorship from industry experts helped me understand the practical applications of AI and ML."
  },
  {
    name: "Neha Reddy",
    role: "Data Analyst Intern",
    content: "Aarivya Labs provides a perfect environment for innovation and research. Highly recommended!"
  },
  {
    name: "Arjun Mehra",
    role: "Web Dev Intern",
    content: "The certification and letter of recommendation helped me land my first job in a top tech firm."
  },
  {
    name: "Kavita Iyer",
    role: "Patent Research Intern",
    content: "Working on patent development was an eye-opening experience. I learned so much about IP."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-24 bg-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100"
              >
                Aarivya Interns Batch 2026
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Empowering Innovation for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Batch 2026</span>
              </h1>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Aarivya Interns Batch 2026 powered by <a href="https://www.hnpprojects.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-blue-600 transition-colors underline decoration-blue-200 underline-offset-4">H&P Projects</a> & <span className="font-bold text-slate-900">NextGenCare Foundation</span>.
              </p>
              <p className="text-slate-500 mb-10 leading-relaxed">
                A unified platform for innovation, development, patents, and research. 
                Open for students from all colleges and branches to participate in real-world projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link
                  to="/internship"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 group"
                >
                  Apply for Internship <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/domains"
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  Explore Domains
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] md:aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={carouselImages[currentSlide]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-contain p-4 bg-white"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Scrolling Banner */}
      <div className="my-8 bg-blue-600 py-4 overflow-hidden whitespace-nowrap relative shadow-lg">
        <div className="flex animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                <Rocket size={16} /> Applications Open for Batch 2026
              </span>
              <span className="text-blue-100 font-medium text-sm uppercase tracking-widest flex items-center gap-3">
                <CheckCircle2 size={16} /> Powered by H&P Projects
              </span>
              <span className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                <Award size={16} /> Research & Patent Support
              </span>
              <span className="text-blue-100 font-medium text-sm uppercase tracking-widest flex items-center gap-3">
                <Users size={16} /> Open for All Branches
              </span>
            </div>
          ))}
        </div>
      </div>
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Unified Domains</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Web Development, AI & ML, Data Analyst, Data Science, Cyber Security – all integrated into one platform with real-world projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Patent & Research</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Includes patent development, research paper writing, publication support, and innovation-driven project execution.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Open for All</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Students from all colleges and branches can apply and participate in this internship program.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About Aarivya Labs
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Aarivya Labs is a premier technology research and training hub dedicated to bridging the gap between academic learning and industry requirements. We believe that true learning happens when knowledge is applied to solve real problems.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our mission is to empower the youth of India with practical skills in emerging technologies, fostering a culture of innovation, research, and professional excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { text: "Industry Expert Mentors", icon: CheckCircle2 },
                  { text: "Live Project Access", icon: CheckCircle2 },
                  { text: "Global Certification", icon: CheckCircle2 },
                  { text: "Career Guidance", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-50 p-1 rounded-full text-blue-600">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.text}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1775126418/Poster1_iun2vd.png" 
                  alt="Engineering and Technology" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Domains
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              Choose from our wide range of specialized internship programs designed to make you industry-ready.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:border-blue-500 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-${domain.color}-50 text-${domain.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <domain.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{domain.name}</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Master the latest tools and technologies in {domain.name} through hands-on practical learning.
                </p>
                <Link to="/domains" className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Banner */}
      <div className="bg-slate-900 py-4 overflow-hidden whitespace-nowrap relative border-y border-slate-800">
        <div className="flex animate-marquee-slow">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {domains.map((domain) => (
                <span key={domain.name} className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                  <domain.icon size={16} className="text-blue-500" /> {domain.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Live Projects", icon: Rocket, color: "blue", desc: "Work on actual industry projects that add value to your portfolio." },
                  { title: "Patent Support", icon: Lightbulb, color: "indigo", desc: "Guidance on patent development and intellectual property protection." },
                  { title: "Research Guidance", icon: Microscope, color: "cyan", desc: "Support for research paper writing and publication in top journals." },
                  { title: "Certification", icon: Award, color: "purple", desc: "Receive a globally recognized certificate upon completion." },
                  { title: "Expert Mentorship", icon: Users, color: "amber", desc: "1-on-1 guidance from professionals working in top tech companies.", full: true },
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-6 bg-white border border-slate-100 rounded-3xl ${benefit.full ? 'sm:col-span-2' : ''}`}
                  >
                    <benefit.icon className={`text-${benefit.color}-600 mb-4`} size={32} />
                    <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Aarivya Labs?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't just teach; we prepare you for the professional world. Our curriculum is designed by industry veterans to ensure you learn what actually matters in the job market.
              </p>
              <ul className="space-y-4">
                {[
                  "Hands-on practical training",
                  "Resume building & Interview prep",
                  "Access to exclusive tech community",
                  "Letter of Recommendation for top performers"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="text-blue-600" size={20} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Interns Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear from students who transformed their careers with Aarivya Labs.
            </p>
          </div>
        </div>

        {/* Testimonial Ribbon */}
        <div className="relative">
          <div className="flex animate-marquee hover:[animation-play-state:paused] py-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {testimonials.map((t, idx) => (
                  <div
                    key={`${i}-${idx}`}
                    className="w-[350px] flex-shrink-0 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <p className="text-slate-600 italic mb-8 text-sm leading-relaxed">"{t.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of students who are already building their future with Aarivya Labs. 
              Applications for the Batch 2026 are now open!
            </p>
            <Link
              to="/internship"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all relative z-10 shadow-xl"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
