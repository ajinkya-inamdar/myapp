  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import App from './App.jsx';
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import Home from './pages/Home';

  import CV from './pages/CV';
  import Contact from './pages/Contact';
  import ScrollToTop from './components/ScrollToTop'; 
  import BlogList from './pages/BlogList';
  import BlogPost from './pages/BlogPost';
  import './index.css';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <div className="bg-#eeeee4 min-h-screen">
        <Router>
          <ScrollToTop /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/blog" element={<BlogList />} />
            {/* 🔥 FIX: Use slug instead of id */}
            <Route path="/blog/:slug/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </StrictMode>
  );
