import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Award, Users, Rocket, Code, Brain, Database, Shield, Microscope, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1774207478/892863fa-0496-4d7f-9158-c9207418d150_uphi2c.png",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1774207448/654052281_914616747865242_7210948664801015668_n_wa6r77.png"
];

const domains = [
  { name: 'Web Development', icon: Code, color: 'blue' },
  { name: 'AI & ML', icon: Brain, color: 'indigo' },
  { name: 'Data Science', icon: Database, color: 'cyan' },
  { name: 'Cyber Security', icon: Shield, color: 'red' },
  { name: 'R & D', icon: Microscope, color: 'purple' },
  { name: 'Innovation', icon: Lightbulb, color: 'amber' },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Web Dev Intern",
    content: "The mentorship at Aarivya Labs was exceptional. I worked on a real-world project that is now live!",
    image: "https://picsum.photos/seed/rahul/100/100"
  },
  {
    name: "Priya Patel",
    role: "Data Science Intern",
    content: "Learned more in 2 months here than in a year of college. The focus on practical skills is amazing.",
    image: "https://picsum.photos/seed/priya/100/100"
  },
  {
    name: "Ankit Verma",
    role: "AI/ML Intern",
    content: "Challenging projects and a very supportive environment. Highly recommend for any tech student.",
    image: "https://picsum.photos/seed/ankit/100/100"
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-24 bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                Future-Ready Internships
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Bridging Learning with <span className="text-blue-600">Real-World</span> Experience
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Aarivya Labs provides students with high-impact internships in cutting-edge domains. 
                Gain practical skills, work on live projects, and get mentored by industry experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link
                  to="/internship"
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] md:aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={carouselImages[currentSlide]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-contain bg-slate-50"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === i ? 'w-8 bg-blue-600' : 'bg-white/50 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
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
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Industry Expert Mentors</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Live Project Access</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Global Certification</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Career Guidance</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1774204184/e52195d5-0cde-4b5c-9c38-b9fdfbcd3dee_i4uwpf.png" 
                  alt="Engineering and Technology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Domains</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose from our wide range of specialized internship programs designed to make you industry-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <Award className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">Certification</h4>
                  <p className="text-sm text-slate-600">Receive a globally recognized certificate upon successful completion.</p>
                </div>
                <div className="p-6 bg-indigo-50 rounded-2xl">
                  <Rocket className="text-indigo-600 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">Live Projects</h4>
                  <p className="text-sm text-slate-600">Work on actual industry projects that add value to your portfolio.</p>
                </div>
                <div className="p-6 bg-cyan-50 rounded-2xl">
                  <Users className="text-cyan-600 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">Mentorship</h4>
                  <p className="text-sm text-slate-600">Get 1-on-1 guidance from professionals working in top tech companies.</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-2xl">
                  <CheckCircle2 className="text-purple-600 mb-4" size={32} />
                  <h4 className="font-bold text-slate-900 mb-2">Flexible</h4>
                  <p className="text-sm text-slate-600">Self-paced learning with flexible schedules to balance your studies.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
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
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-green-500" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Interns Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Hear from students who transformed their careers with Aarivya Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
              >
                <p className="text-slate-300 italic mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join hundreds of students who are already building their future with Aarivya Labs. 
              Applications for the next cohort are now open!
            </p>
            <Link
              to="/internship"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all relative z-10"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
