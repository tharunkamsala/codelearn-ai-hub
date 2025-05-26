
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Code, BookOpen, User, Search } from "lucide-react";

const FeatureCards = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Blogs & Tutorials",
      description: "Learn programming concepts through well-structured tutorials with hands-on examples and challenges.",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/25",
      path: "/blogs"
    },
    {
      icon: Code,
      title: "Online Code Compiler",
      description: "Write, compile, and run code in multiple languages directly in your browser with real-time feedback.",
      color: "from-purple-500 to-purple-600", 
      hoverColor: "hover:shadow-purple-500/25",
      path: "/compiler"
    },
    {
      icon: User,
      title: "Resume & Career Services",
      description: "Get professional help with resume writing, SOPs, and letters of recommendation for your tech career.",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/25", 
      path: "/resume"
    },
    {
      icon: Search,
      title: "Smart Search & Tags",
      description: "Find exactly what you're looking for with our intelligent search and comprehensive tagging system.",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:shadow-orange-500/25",
      path: "/blogs"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Everything You Need to Master Code
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our comprehensive platform provides all the tools and resources you need to become a proficient programmer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${feature.hoverColor} group`}
            onClick={() => navigate(feature.path)}
          >
            <CardContent className="p-6 text-center">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
