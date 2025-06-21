import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <>
      <div className="min-h-screen bg-#eeeee4">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 bg-opacity-80 fixed w-full z-50">
          {/* Logo */}
          <div className="text-white text-2xl font-bold font-poppins">Ajinkya</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white font-poppins">
            <a href="#home" className="hover:text-green-400">Home</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {/* Hamburger Icon */}
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Open */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-bold font-poppins z-40">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-green-400">Home</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-green-400">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-green-400">Contact</a>
          </div>
        )}

        {/* Main Content */}
        <div className="pt-24">
          {/* Logo Section */}
          <div className="flex justify-center items-center flex-wrap gap-8 py-8">
            <a href="https://vite.dev" target="_blank" className="flex justify-center items-center">
              <img src={viteLogo} className="w-16 md:w-24 h-16 md:h-24 transition-transform duration-300 hover:scale-110" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="flex justify-center items-center">
              <img src={reactLogo} className="w-16 md:w-24 h-16 md:h-24 transition-transform duration-300 hover:scale-110" alt="React logo" />
            </a>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mt-6 md:mt-10 font-poppins">
            Ajinkya Inamdar
          </h1>

          {/* Count Button */}
          <div className="max-w-sm md:max-w-md mx-auto bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl mt-8 md:mt-10 text-center">
            <button 
              onClick={() => setCount(count + 1)} 
              className="bg-green-500 text-white py-2 px-4 md:py-2 md:px-6 rounded-lg shadow-lg transition duration-300 hover:bg-green-400 font-poppins"
            >
              count is {count}
            </button>
            <p className="mt-4 text-gray-400 text-sm md:text-base font-poppins">
              Edit <code className="bg-gray-600 text-white p-1 rounded-md">src/App.jsx</code> and save to test HMR
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-600 text-sm md:text-base font-poppins px-4 md:px-0">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
