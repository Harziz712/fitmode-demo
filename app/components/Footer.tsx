import React, { useEffect, useRef } from 'react';
import { Mail, ArrowRight, FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import FooterStylishLink from './ui/FooterStylishLink';


const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.style.opacity = '0';
      footerRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        if (footerRef.current) {
          footerRef.current.style.transition = 'all 0.8s ease-out';
          footerRef.current.style.opacity = '1';
          footerRef.current.style.transform = 'translateY(0px)';
        }
      }, 100);
    }
  }, []);

  const handleEmailSubmit = () => {
    if (submitRef.current) {
      submitRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (submitRef.current) {
          submitRef.current.style.transform = 'scale(1)';
        }
      }, 150);
    }
    console.log('Newsletter subscription submitted');
  };

  const handleEmailFocus = () => {
    if (emailRef.current) {
      emailRef.current.style.transform = 'scale(1.02)';
      emailRef.current.style.borderColor = '#10b981';
    }
  };

  const handleEmailBlur = () => {
    if (emailRef.current) {
      emailRef.current.style.transform = 'scale(1)';
      emailRef.current.style.borderColor = '#374151';
    }
  };

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div>
        <div className="text-center grid w-full md:grid-cols-2 grid-cols-1 gap-5 md:gap-0  md:mb-16">
         <div className=' md:text-start '>
           <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            ZeezFitHub
          </h1>
    
          <div className="flex md:justify-start  justify-center gap-4 mt-8">
            {[
              { Icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
              { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
              { Icon: YoutubeIcon, href: 'https://youtube.com', label: 'YouTube' }
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
              </a>
            ))}
          </div>
         </div>

        {/* Newsletter Subscription */}
        <div className="mb-16 flex flex-col md:items-end">
          <h3 className="text-white  text-md font-medium mb-4">Subscribe to Newsletter</h3>
          <div className="relative w-full max-w-md">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter your email..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
            <button
              ref={submitRef}
              onClick={handleEmailSubmit}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-emerald-500 hover:bg-emerald-600 rounded-md flex items-center justify-center transition-all duration-300 group"
            >
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        </div>
</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <p className="text-lg md:text-xl bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent capitalize text-gray-300 max-w-2xl mx-auto font-bold leading-relaxed">
            ZeezFitHub provides personalized fitness & diet solutions<br />
            through the power of AI.
          </p>
          {/* Main Sitemap */}
          <div>
            <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm">
              Main Sitemap
            </h3>
            <nav className="space-y-4">
              {['Home', 'Platform', 'Services'].map((item) => (
              <FooterStylishLink key={item} item={item}/>
              ))}
            </nav>
          </div>

          {/* App Features */}
          <div>
            <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm">
              App Features
            </h3>
            <nav className="space-y-4">
              {['Fitness Analytics', 'Activity Tracker', 'Virtual AI Coach'].map((item) => (
             <FooterStylishLink key={item} item={item}/>

              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm">
              Legal
            </h3>
            <nav className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
                <FooterStylishLink key={item} item={item}/>

              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="text-center text-gray-400 text-sm flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4 justify-center text-xs">
             <p>© 2025 ZeezFitHub. All rights reserved.</p>
            <p>Made with 💻 by Harziiz</p>
            <p>Built with Passion ❤️</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;