import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ismLogo from '../assets/ism-logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/themes', label: 'Themes' },
  { to: '/call-for-papers', label: 'Call for Papers' },
  { to: '/important-dates', label: 'Important Dates' },
  { to: '/committee', label: 'Committee' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/exhibition-sponsorship', label: 'Exhibition & Sponsorship' },
  { to: '/registration', label: 'Registration' },
  { to: '#footer', label: 'Contact', isContact: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleContactClick = (e) => {
    e.preventDefault();
    const footerEl = document.getElementById('footer');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled past top
      setScrolled(currentScrollY > 10);

      // Near top of page -> always show navbar
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else {
        // Scroll down -> smooth shutter hide
        if (currentScrollY > lastScrollY + 6) {
          setIsVisible(false);
        }
        // Scroll up -> smooth reappearance
        else if (currentScrollY < lastScrollY - 6) {
          setIsVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 ease-in-out transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled ? 'shadow-sm py-0' : 'py-0.5'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="MVB@2047 Home"
            >
              <img
                src={ismLogo}
                alt="IIT (ISM) Dhanbad Logo"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                  MVB<span className="text-amber-600">@2047</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-wide hidden sm:block">
                  IIT (ISM) Dhanbad
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.isContact ? (
                    <a
                      href="#footer"
                      onClick={handleContactClick}
                      className="px-2.5 py-1.5 rounded-md text-[13px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150 whitespace-nowrap cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                          isActive
                            ? 'text-blue-900 font-semibold bg-slate-100/90'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                to="/registration"
                id="nav-register-btn"
                className="bg-slate-900 hover:bg-blue-900 text-white font-semibold px-4.5 py-2 rounded-lg text-xs tracking-wide uppercase transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                Register Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden border-l border-slate-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <img src={ismLogo} alt="IIT (ISM) Dhanbad" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-slate-900 font-extrabold text-base">MVB <span className="text-amber-600">2047</span></p>
              <p className="text-slate-500 text-xs">IIT (ISM) Dhanbad</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700 p-1" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4 overflow-y-auto h-full pb-28">
          <ul className="space-y-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.isContact ? (
                  <a
                    href="#footer"
                    onClick={handleContactClick}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-slate-900 text-white font-semibold'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-4 px-0">
            <Link
              to="/registration"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-slate-900 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg text-center transition-colors text-sm uppercase tracking-wider"
            >
              Register Now
            </Link>
          </div>

          <div className="mt-5 mx-0 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Conference Dates</p>
            <p className="text-slate-900 text-sm font-bold">3rd – 4th October 2026</p>
            <p className="text-slate-500 text-xs mt-0.5">GJLT, IIT (ISM) Dhanbad</p>
          </div>
        </nav>
      </div>
    </>
  );
}
