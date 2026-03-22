import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-blue-600 rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img 
                  src="https://picsum.photos/seed/about/800/800" 
                  alt="Team working" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 border-2 border-blue-600 rounded-3xl -rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-10 rounded-3xl border border-blue-100"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower students with practical skills, industry exposure, and professional mentorship, enabling them to build successful careers in the ever-evolving technology landscape.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-indigo-50 p-10 rounded-3xl border border-indigo-100"
            >
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To become India's leading platform for practical tech education, building a massive talent pool of industry-ready professionals who drive innovation and growth globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <p className="text-slate-600">The visionaries behind Aarivya Labs.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img 
                src="https://picsum.photos/seed/founder/400/600" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-2/3 p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Aryan Sharma</h3>
              <p className="text-blue-600 font-medium mb-6">Founder & CEO</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                "At Aarivya Labs, we are committed to creating an ecosystem where curiosity meets opportunity. Our goal is to ensure that every student has access to the tools and guidance they need to succeed in the tech world."
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award size={16} className="text-blue-600" />
                  <span>15+ Years Industry Exp.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Users size={16} className="text-blue-600" />
                  <span>Ex-Google, Ex-Microsoft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Student-First</h4>
              <p className="text-slate-600 text-sm">Everything we do is focused on providing the best possible learning experience for our students.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Excellence</h4>
              <p className="text-slate-600 text-sm">We maintain high standards in our curriculum, mentorship, and project quality.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Community</h4>
              <p className="text-slate-600 text-sm">We foster a collaborative environment where students can learn from each other and grow together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
