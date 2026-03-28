import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Brain, Database, Shield, Microscope, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';

const domains = [
  {
    name: 'Web Development',
    icon: Code,
    description: 'Master the art of building scalable web applications. From crafting intuitive user interfaces with React and Tailwind CSS to developing robust server-side logic with Node.js and Express. You will learn the full development lifecycle, including database integration and cloud deployment.',
    skills: ['Full-Stack React & Node.js', 'Responsive UI/UX Design', 'RESTful API Development', 'Cloud Deployment (AWS/Vercel)'],
    highlights: ['Build a real-world E-commerce platform', 'Implement secure JWT authentication', 'Optimize web performance & SEO', 'Version control with Git/GitHub'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    duration: '2-3 Months',
    level: 'Beginner to Intermediate'
  },
  {
    name: 'AI & ML',
    icon: Brain,
    description: 'Explore the frontier of artificial intelligence. Gain hands-on experience with Python-based frameworks like TensorFlow and PyTorch. Learn to build, train, and optimize neural networks for computer vision, natural language processing, and predictive analytics.',
    skills: ['Deep Learning & Neural Nets', 'Computer Vision (OpenCV)', 'Natural Language Processing', 'Model Optimization & Tuning'],
    highlights: ['Develop an Image Recognition system', 'Build a Sentiment Analysis tool', 'Deploy models using Flask/FastAPI', 'Work with large-scale datasets'],
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    duration: '3 Months',
    level: 'Intermediate'
  },
  {
    name: 'Data Analyst',
    icon: BarChart3,
    description: 'Transform raw data into actionable business insights. Learn advanced SQL for data extraction, use Python for data manipulation, and master visualization tools like Tableau or PowerBI. Focus on statistical methods and trend analysis.',
    skills: ['Advanced SQL Querying', 'Data Visualization (Tableau)', 'Statistical Hypothesis Testing', 'Business Intelligence Reporting'],
    highlights: ['Create interactive executive dashboards', 'Perform market trend analysis', 'Automate data cleaning pipelines', 'Present data-driven business strategies'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    duration: '2 Months',
    level: 'Beginner'
  },
  {
    name: 'Data Science',
    icon: Database,
    description: 'The intersection of statistics, programming, and domain expertise. Dive deep into complex datasets using big data technologies. Learn to build sophisticated predictive models and communicate complex findings through data storytelling.',
    skills: ['Predictive Modeling (Scikit-learn)', 'Big Data Processing (Spark)', 'Exploratory Data Analysis', 'Data Storytelling & Reporting'],
    highlights: ['Build a recommendation engine', 'Implement time-series forecasting', 'Handle unstructured data at scale', 'A/B testing and experimentation'],
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    duration: '3-4 Months',
    level: 'Intermediate to Advanced'
  },
  {
    name: 'Cyber Security',
    icon: Shield,
    description: 'Protect the digital world from evolving threats. Learn the fundamentals of ethical hacking, penetration testing, and network defense. Understand cryptography, secure coding practices, and risk assessment frameworks.',
    skills: ['Ethical Hacking & Pen Testing', 'Network Security Protocols', 'Cryptography Fundamentals', 'Incident Response Planning'],
    highlights: ['Conduct vulnerability assessments', 'Simulate real-world cyber attacks', 'Implement secure network architectures', 'Learn digital forensics basics'],
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    duration: '3 Months',
    level: 'Intermediate'
  },
  {
    name: 'Patent & Research',
    icon: Microscope,
    description: 'Bridge the gap between technology, innovation, and research. Includes patent development, research paper writing, publication support, and innovation-driven project execution. Learn to navigate intellectual property rights and scientific research methods.',
    skills: ['Intellectual Property Strategy', 'Scientific Research Methods', 'Drafting Technical Claims', 'Technical Paper Writing'],
    highlights: ['Draft a complete patent application', 'Publish a technical research paper', 'Conduct global prior-art searches', 'Collaborate on IP-focused projects'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    duration: '4-6 Months',
    level: 'Advanced'
  }
];

export default function Domains() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
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
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl hover:border-blue-500/50 transition-all group flex flex-col h-full relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${domain.color} ${domain.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <domain.icon size={32} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                      {domain.duration}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                      {domain.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{domain.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  {domain.description}
                </p>
                
                <div className="grid grid-cols-1 gap-8 mb-8 flex-grow">
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Key Skills</h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {domain.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <div className={`w-2 h-2 rounded-full ${domain.iconColor.replace('text', 'bg')} shadow-sm`} />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Curriculum Highlights</h4>
                    <ul className="space-y-2.5">
                      {domain.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/internship"
                  className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all group-hover:shadow-xl group-hover:shadow-blue-100 border border-slate-100 hover:border-blue-500"
                >
                  Apply for {domain.name} <ArrowRight size={18} />
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
