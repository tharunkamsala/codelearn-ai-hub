
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Mock blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Python: A Beginner's Guide",
      excerpt: "Learn the fundamentals of Python programming from variables to functions...",
      author: "Sarah Chen",
      date: "2024-01-15",
      tags: ["Python", "Beginner", "Programming"],
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts: Async/Await Explained",
      excerpt: "Master asynchronous programming in JavaScript with practical examples...",
      author: "Mike Johnson",
      date: "2024-01-12",
      tags: ["JavaScript", "Advanced", "Async"],
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Machine Learning Basics: Your First Neural Network",
      excerpt: "Build your first neural network using Python and TensorFlow...",
      author: "Dr. Alex Kim",
      date: "2024-01-10",
      tags: ["AI", "Machine Learning", "Python"],
      readTime: "15 min read"
    }
  ];

  const tags = ["All", "Python", "JavaScript", "AI", "Machine Learning", "Beginner", "Advanced"];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleBlogClick = (blogId: number) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Programming Blogs & Tutorials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of programming tutorials, tips, and insights
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag)}
                className={`${
                  selectedTag === tag 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Card 
              key={blog.id}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group"
              onClick={() => handleBlogClick(blog.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm font-medium">{blog.readTime}</span>
                  <BookOpen className="h-4 w-4 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No blogs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
