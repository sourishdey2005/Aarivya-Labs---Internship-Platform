import { Link } from 'react-router-dom';
import { Linkedin, Mail, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="https://res.cloudinary.com/dodhvvewu/image/upload/v1774203845/f04cf0dd-2df9-47fc-a367-de32c43af3e4_vyswxk.png" 
                alt="Aarivya Labs Logo" 
                className="w-8 h-8 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Aarivya <span className="text-blue-500">Labs</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of tech leaders through hands-on experience and real-world projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">Domains</Link></li>
              <li><Link to="/internship" className="hover:text-blue-400 transition-colors">Internship</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Domains</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">Cyber Security</Link></li>
              <li><Link to="/domains" className="hover:text-blue-400 transition-colors">R & D</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@aarivyalabs.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-blue-500" />
                <span>Aarivya Labs Official</span>
              </li>
              <li className="mt-6 text-xs text-slate-500">
                India HQ: Tech Park, Sector 62, Noida, UP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Aarivya Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
