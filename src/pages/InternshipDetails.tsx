import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Clock, Award, Users, Calendar, CheckCircle2, FileText, Send, Loader2, AlertCircle } from 'lucide-react';

export default function InternshipDetails() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    location: '',
    college: '',
    domain: '',
    resumeLink: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    if (!scriptUrl) {
      console.error('ERROR: VITE_GOOGLE_SHEETS_URL is not defined in environment variables.');
      setError('System Configuration Error: Google Sheets URL is missing. Please check your AI Studio Settings.');
      setLoading(false);
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append('fullName', formState.name);
      params.append('email', formState.email);
      params.append('location', formState.location);
      params.append('college', formState.college);
      params.append('domain', formState.domain);
      params.append('resumeLink', formState.resumeLink);

      const scriptUrlWithParams = `${scriptUrl}?${params.toString()}`;

      await fetch(scriptUrlWithParams, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
      });

      setSubmitted(true);
      setFormState({ 
        name: '', email: '', location: '', college: '', 
        domain: '', resumeLink: '' 
      });
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to connect to Google Sheets. Please ensure your Web App is deployed correctly.');
    } finally {
      setLoading(false);
    }
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Other"
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 text-slate-900 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-blue-600"
            >
              Internship Program Details
            </motion.h1>
            <p className="text-slate-600 text-lg leading-relaxed">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                    <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={18} />
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
              <h3 className="text-xl font-bold text-blue-600 mb-4">Selection Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Application Review</h4>
                    <p className="text-sm text-slate-600">We review your resume and domain preference.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Technical Assessment</h4>
                    <p className="text-sm text-slate-600">A short task or quiz to gauge your current knowledge.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Onboarding</h4>
                    <p className="text-sm text-slate-600">Welcome to the team! You'll be assigned a mentor and a project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 sticky top-28"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Apply Now</h2>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-600 p-6 rounded-2xl text-center border border-green-100"
                >
                  <CheckCircle2 className="mx-auto mb-4 text-green-600" size={48} />
                  <h3 className="text-xl font-bold mb-2">Application Sent!</h3>
                  <p className="text-sm">We've received your application. Our team will get back to you within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Location (State)</label>
                    <select 
                      required
                      value={formState.location}
                      onChange={(e) => setFormState({...formState, location: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="">Select State</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">College Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.college}
                      onChange={(e) => setFormState({...formState, college: e.target.value})}
                      placeholder="Your College Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Domain</label>
                    <select 
                      required
                      value={formState.domain}
                      onChange={(e) => setFormState({...formState, domain: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="">Select a domain</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Patent & Research">Patent & Research</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Resume Link (Google Drive/LinkedIn)</label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="url" 
                        required
                        value={formState.resumeLink}
                        onChange={(e) => setFormState({...formState, resumeLink: e.target.value})}
                        placeholder="https://drive.google.com/..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-rose-600 text-xs mt-2 bg-rose-50 p-3 rounded-lg border border-rose-100">
                      <AlertCircle size={14} />
                      <span>{error}</span>
                    </div>
                  )}
                  <p className="text-[10px] text-slate-500 text-center">
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
