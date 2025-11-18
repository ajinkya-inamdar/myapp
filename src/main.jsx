import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Keep Home and Layout components EAGER loaded for fastest LCP
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop'; 
import './index.css';

// SPEED FIX: Lazy load secondary pages to reduce initial bundle size
const CV = lazy(() => import('./pages/CV'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Simple Loading Spinner for transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Changed background to bg-white */}
    <div className="bg-white min-h-screen">
      <Router>
        <ScrollToTop /> 
        <Navbar />
        {/* Suspense handles the loading state for lazy components */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug/:id" element={<BlogPost />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  </StrictMode>
);