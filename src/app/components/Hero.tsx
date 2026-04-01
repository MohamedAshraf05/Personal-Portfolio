import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';
export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Building scalable APIs and systems';
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "/Personal-Portfolio/Mohamed_Ashraf's_CV.pdf";
    link.download = "Mohamed_Ashraf's_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#092E20] via-black to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0ea472] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#092E20] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <motion.div 
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0ea472] to-[#092E20] p-1 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              
              {!imgError ? (
                <img
                  src="/Personal-Portfolio/profile_picture.jpeg"
                  alt="Mohamed Ashraf"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl text-[#0ea472] bg-gradient-to-br from-gray-700 to-gray-900">
                  MA
                </div>
              )}

            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-white via-[#0ea472] to-white bg-clip-text text-transparent">
            Mohamed Ashraf Abd El-Gaber
          </h1>
          
          <div className="text-2xl md:text-3xl text-[#0ea472] mb-6">
            Backend Developer | Django Specialist
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 h-12"
        >
          <p className="text-xl md:text-2xl text-gray-300">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-[#0ea472] ml-1 animate-pulse" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-[#0ea472] hover:bg-[#0c8c5f] text-white px-8 py-6 rounded-lg shadow-lg shadow-[#0ea472]/50 transition-all hover:shadow-[#0ea472]/70 hover:scale-105"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-[#0ea472] text-[#0ea472] hover:bg-[#0ea472] hover:text-white px-8 py-6 rounded-lg transition-all hover:scale-105"
          >
            Contact Me
          </Button>
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="border-2 border-[#0ea472] text-[#0ea472] hover:bg-[#0ea472] hover:text-white px-8 py-6 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-[#0ea472]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}