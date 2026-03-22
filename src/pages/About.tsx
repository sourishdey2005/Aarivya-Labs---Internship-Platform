import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Award, Users, Heart } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="pt-24 pb-20 overflow-x-hidden relative">
      {/* Background Decorative Elements with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: blob1Y }}
          animate={{ 
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: blob2Y }}
          animate={{ 
            rotate: [0, -5, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] -right-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hero */}
      <section className="py-20 bg-slate-50/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                About <span className="text-blue-600">Aarivya Labs</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Aarivya Labs was founded with a single vision: to transform the way students learn and prepare for their professional careers. We noticed a significant gap between what is taught in classrooms and what is required in the tech industry.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform serves as a bridge, providing hands-on experience, mentorship, and exposure to real-world challenges that help students become industry-ready from day one.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square bg-white p-4 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1774203845/f04cf0dd-2df9-47fc-a367-de32c43af3e4_vyswxk.png" 
                  alt="Aarivya Labs Vision" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl -rotate-3 -z-10 opacity-20 blur-xl"></div>
              <div className="absolute -inset-1 border-2 border-blue-600/20 rounded-3xl rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Reverse Animation Layout */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-100/50"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Target size={36} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower students with practical skills, industry exposure, and professional mentorship, enabling them to build successful careers in the ever-evolving technology landscape.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-slate-900 p-12 rounded-[2.5rem] border border-slate-800 hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-900/20"
            >
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                <Eye size={36} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To become India's leading platform for practical tech education, building a massive talent pool of industry-ready professionals who drive innovation and growth globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section - Reverse Layout */}
      <section className="py-24 bg-slate-50/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Meet Our Leadership</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row-reverse"
            >
              <div className="md:w-2/5 relative group">
                <img 
                  src="https://picsum.photos/seed/founder/600/800" 
                  alt="Founder" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              </div>
              <div className="md:w-3/5 p-12 md:p-20 flex flex-col justify-center bg-white">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Dr. Aryan Sharma</h3>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-8">Founder & CEO</p>
                  <p className="text-xl text-slate-600 leading-relaxed italic mb-10 border-l-4 border-blue-600 pl-6">
                    "At Aarivya Labs, we are committed to creating an ecosystem where curiosity meets opportunity. Our goal is to ensure that every student has access to the tools and guidance they need to succeed in the tech world."
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Award size={20} />
                      </div>
                      <span className="font-semibold text-slate-700">15+ Years Exp.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Users size={20} />
                      </div>
                      <span className="font-semibold text-slate-700">Ex-Google, Ex-Microsoft</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Staggered Reveal */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The principles that guide our every decision and action.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: "Student-First", color: "blue", desc: "Everything we do is focused on providing the best possible learning experience for our students." },
              { icon: Award, title: "Excellence", color: "indigo", desc: "We maintain high standards in our curriculum, mentorship, and project quality." },
              { icon: Users, title: "Community", color: "cyan", desc: "We foster a collaborative environment where students can learn from each other and grow together." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className={`w-24 h-24 bg-${value.color}-50 text-${value.color}-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-${value.color}-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-${value.color}-100`}>
                  <value.icon size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
