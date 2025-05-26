
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, BookOpen } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);
  
  const animatedTexts = [
    "Learn Code.",
    "Run Code.", 
    "Repeat."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              CodeLearn AI
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
            <span 
              key={currentText}
              className="animate-scale-in bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              {animatedTexts[currentText]}
            </span>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Master programming with our interactive platform. Learn through hands-on tutorials, 
            practice with our online compiler, and get professional help with your career documents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => navigate("/blogs")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button 
              onClick={() => navigate("/compiler")}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Code className="mr-2 h-5 w-5" />
              Try Compiler
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Programming Languages</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Tutorials & Blogs</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Online Compiler</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
