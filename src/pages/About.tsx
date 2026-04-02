import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Target, Eye, Award, Users, Heart, Rocket, Lightbulb, ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "Who can apply for the internship program?",
    answer: "Our internship programs are open to students from all colleges, branches, and academic years. Whether you're a first-year student or a final-year graduate, if you have the passion to learn and innovate, you're welcome to apply."
  },
  {
    question: "What is the typical duration of an internship at Aarivya Labs?",
    answer: "Internships typically range from 2 to 6 months, depending on the domain and project complexity. We also offer flexible durations for research-based projects and patent development."
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes, all successful interns receive a globally recognized certificate from Aarivya Labs, powered by H&P Projects and NextGenCare Foundation. Top performers may also receive a Letter of Recommendation."
  },
  {
    question: "Is the internship program remote or in-person?",
    answer: "We offer both remote and hybrid internship models to accommodate students from different locations. Most of our technical projects are designed to be executed efficiently in a remote-first environment."
  },
  {
    question: "How can industry partners collaborate with Aarivya Labs?",
    answer: "Partners can collaborate with us for talent acquisition, joint research projects, patent development, or corporate social responsibility initiatives. Please reach out through our contact page for partnership inquiries."
  },
  {
    question: "What technologies will I work on?",
    answer: "Depending on your chosen domain, you'll work with industry-standard technologies. This includes React, Node.js, and Tailwind CSS for Web Dev; Python, TensorFlow, and PyTorch for AI/ML; and various specialized tools for Cyber Security and Data Science."
  },
  {
    question: "Is there any stipend or fee for the internship?",
    answer: "Our internship programs are designed to be accessible. Some specialized research and training tracks may have associated costs for resources and certification, while others may offer stipends based on project performance and duration. Specific details are provided during the selection process."
  },
  {
    question: "What are the working hours?",
    answer: "We follow a flexible working model. Interns are expected to dedicate 15-20 hours per week, which can be managed according to their academic schedule. We prioritize project milestones over fixed clock-in times."
  }
];

interface FAQItemProps {
  key?: any;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 group-hover:text-blue-600"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="pt-24 pb-20 overflow-x-hidden relative bg-white">
      {/* Background Decorative Elements with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: blob1Y }}
          animate={{ 
            rotate: [0, 5, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: blob2Y }}
          animate={{ 
            rotate: [0, -5, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl"
        />
      </div>

      {/* Hero */}
      <section className="py-20 bg-white relative z-10">
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
              <div className="aspect-square bg-white p-4 rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-100">
                <img 
                  src="https://res.cloudinary.com/dodhvvewu/image/upload/v1774203845/f04cf0dd-2df9-47fc-a367-de32c43af3e4_vyswxk.png" 
                  alt="Aarivya Labs Vision" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl -rotate-3 -z-10 opacity-10 blur-xl"></div>
              <div className="absolute -inset-1 border-2 border-blue-600/10 rounded-3xl rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Reverse Animation Layout */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
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
              className="group bg-white p-12 rounded-[2.5rem] border border-slate-100 hover:border-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                <Eye size={36} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To become India's leading platform for practical tech education, building a massive talent pool of industry-ready professionals who drive innovation and growth globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Ecosystem Section - Generalized */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Learning Ecosystem</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col"
            >
              <div className="p-12 md:p-20 flex flex-col justify-center bg-white">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Bridging the Gap</h3>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-8">Theory to Industry</p>
                  <p className="text-xl text-slate-600 leading-relaxed italic mb-10 border-l-4 border-blue-600 pl-6">
                    "At Aarivya Labs, we are committed to creating an environment where curiosity meets opportunity, ensuring every intern has access to the tools and guidance needed to excel in the global tech landscape."
                  </p>
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Rocket size={20} />
                      </div>
                      <span className="font-semibold text-slate-700">Industry Standards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <Lightbulb size={20} />
                      </div>
                      <span className="font-semibold text-slate-700">Innovation First</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Staggered Reveal */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our every decision and action.</p>
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
                <div className={`w-24 h-24 bg-${value.color}-50 text-${value.color}-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-${value.color}-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-${value.color}-500/10`}>
                  <value.icon size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find answers to common questions about our internship programs and partnerships.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
