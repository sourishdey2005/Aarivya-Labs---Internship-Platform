import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Brain, Database, Shield, Microscope, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';

const domains = [
  {
    name: 'Web Development',
    icon: Code,
    description: 'Build modern, responsive web applications using React, Node.js, and the latest technologies.',
    skills: ['React & Next.js', 'Node.js & Express', 'Tailwind CSS', 'Database Design'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Dive into neural networks, deep learning, and computer vision. Build intelligent systems.',
    skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Model Deployment'],
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    name: 'Data Analyst',
    icon: BarChart3,
    description: 'Learn to extract insights from data, create visualizations, and help businesses make decisions.',
    skills: ['SQL & NoSQL', 'Tableau/PowerBI', 'Statistical Analysis', 'Data Cleaning'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    name: 'Data Science',
    icon: Database,
    description: 'Master statistical analysis, predictive modeling, and big data processing to uncover patterns.',
    skills: ['Python/R', 'Predictive Modeling', 'Big Data', 'Machine Learning'],
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    name: 'Cyber Security',
    icon: Shield,
    description: 'Learn ethical hacking, network security, and cryptography to protect digital assets.',
    skills: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Risk Management'],
    color: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
  {
    name: 'Research & Development',
    icon: Microscope,
    description: 'Contribute to cutting-edge research in emerging technologies and push innovation boundaries.',
    skills: ['Literature Review', 'Experimentation', 'Technical Writing', 'Prototyping'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Patent & Innovation',
    icon: Lightbulb,
    description: 'Learn about intellectual property, patent filing, and turning ideas into protected assets.',
    skills: ['IP Law Basics', 'Patent Searching', 'Drafting Claims', 'Innovation Strategy'],
    color: 'bg-amber-50',
    iconColor: 'text-amber-600'
  }
];

export default function Domains() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Explore Our <span className="text-blue-600">Domains</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-8"
            >
              We offer specialized internship programs across various technology sectors. 
              Choose the path that aligns with your passion and career goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/internship?all=true"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Express Interest in All Domains <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${domain.color} ${domain.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <domain.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{domain.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {domain.description}
                </p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What you'll learn</h4>
                  <ul className="space-y-2">
                    {domain.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className={`w-1.5 h-1.5 rounded-full ${domain.iconColor.replace('text', 'bg')}`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/internship"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors group-hover:shadow-lg group-hover:shadow-blue-100"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Not sure which domain to pick?</h2>
          <p className="text-slate-600 mb-10">
            Our career counselors can help you choose the right path based on your current skills and future aspirations. 
            Reach out to us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            Talk to an Expert <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
