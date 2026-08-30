import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import CallForPapers from './pages/CallForPapers';
import ImportantDates from './pages/ImportantDates';
import Committee from './pages/Committee';
import Speakers from './pages/Speakers';
import ExhibitionSponsorship from './pages/ExhibitionSponsorship';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/exhibition-sponsorship" element={<ExhibitionSponsorship />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/downloads" element={<Downloads />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="pt-16 min-h-[60vh] flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-8xl font-extrabold text-[#0f1e3c]">404</p>
                  <h1 className="text-2xl font-bold text-slate-700 mt-4 mb-2">Page Not Found</h1>
                  <p className="text-slate-500 mb-8">The page you are looking for does not exist.</p>
                  <a href="/" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                    Go Back Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
