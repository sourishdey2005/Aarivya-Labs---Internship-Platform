import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Clock, Award, Users, Calendar, CheckCircle2, FileText, Send } from 'lucide-react';

export default function InternshipDetails() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    domain: '',
    resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', domain: '', resume: null });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Internship Program Details
            </motion.h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our internship program is designed to provide a comprehensive learning experience 
              that combines theoretical knowledge with practical application on real-world projects.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Clock className="text-blue-600" /> Program Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Duration</h4>
                    <p className="text-slate-600">1 – 3 Months (Flexible)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Mode</h4>
                    <p className="text-slate-600">Remote / Hybrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Certification</h4>
                    <p className="text-slate-600">Industry Recognized</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-xl text-amber-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Eligibility</h4>
                    <p className="text-slate-600">Students & Freshers</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Features</h3>
              <ul className="space-y-4 mb-10">
                {[
                  "Hands-on experience with live industry projects",
                  "Weekly mentorship sessions with tech professionals",
                  "Access to premium learning resources and tools",
                  "Flexible working hours to suit your academic schedule",
                  "Performance-based Letter of Recommendation",
                  "Networking opportunities with industry leaders"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-6">Learning Outcomes</h3>
              <p className="text-slate-600 leading-relaxed">
                By the end of this internship, you will have a deep understanding of your chosen domain, 
                a portfolio of completed projects, and the professional confidence to excel in your career. 
                We focus on both technical skills and soft skills like communication, teamwork, and problem-solving.
              </p>
            </motion.div>

            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Selection Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Application Review</h4>
                    <p className="text-sm text-blue-700">We review your resume and domain preference.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Technical Assessment</h4>
                    <p className="text-sm text-blue-700">A short task or quiz to gauge your current knowledge.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Onboarding</h4>
                    <p className="text-sm text-blue-700">Welcome to the team! You'll be assigned a mentor and a project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 sticky top-28"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Apply Now</h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-700 p-6 rounded-2xl text-center"
                >
                  <CheckCircle2 className="mx-auto mb-4 text-green-500" size={48} />
                  <h3 className="text-xl font-bold mb-2">Application Sent!</h3>
                  <p className="text-sm">We've received your application. Our team will get back to you within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Domain</label>
                    <select 
                      required
                      value={formState.domain}
                      onChange={(e) => setFormState({...formState, domain: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select a domain</option>
                      <option value="web">Web Development</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="data-science">Data Science</option>
                      <option value="cyber">Cyber Security</option>
                      <option value="rd">Research & Development</option>
                      <option value="patent">Patent & Innovation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Resume (PDF)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept=".pdf"
                        required
                        onChange={(e) => setFormState({...formState, resume: e.target.files?.[0] || null})}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-600 transition-all">
                        <FileText size={20} />
                        <span className="text-sm truncate">
                          {formState.resume ? formState.resume.name : 'Choose file...'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                  >
                    Submit Application <Send size={18} />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    By submitting, you agree to our terms and conditions regarding the internship program.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
