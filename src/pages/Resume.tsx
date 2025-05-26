
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, FileText, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Resume = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    education: "",
    targetRole: "",
    additionalInfo: ""
  });

  const services = [
    {
      id: "resume",
      title: "Resume Writing",
      description: "Professional resume tailored for tech roles",
      icon: User,
      price: "$99",
      turnaround: "3-5 business days"
    },
    {
      id: "sop",
      title: "Statement of Purpose",
      description: "Compelling SOP for university applications",
      icon: FileText,
      price: "$149",
      turnaround: "5-7 business days"
    },
    {
      id: "lor",
      title: "Letter of Recommendation",
      description: "Professional LOR for academic/job applications",
      icon: GraduationCap,
      price: "$79",
      turnaround: "2-3 business days"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { service: selectedService, ...formData });
    // Here you would typically send this data to your backend
    alert("Request submitted successfully! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume & Career Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get professional help with your resume, statement of purpose, and letters of recommendation
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedService === service.id 
                  ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/25" 
                  : "bg-slate-800/50 border-slate-700 hover:shadow-xl"
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  selectedService === service.id ? "bg-blue-600" : "bg-slate-700"
                }`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.turnaround}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Form */}
        {selectedService && (
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Request {services.find(s => s.id === selectedService)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Target Role/Field
                    </label>
                    <Input
                      value={formData.targetRole}
                      onChange={(e) => setFormData({...formData, targetRole: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="e.g., Software Engineer, Data Scientist"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Work Experience
                  </label>
                  <Textarea
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 min-h-24"
                    placeholder="Briefly describe your work experience, projects, and achievements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Skills & Technologies
                  </label>
                  <Textarea
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 min-h-24"
                    placeholder="List your technical skills, programming languages, frameworks, etc..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Education Background
                  </label>
                  <Textarea
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 min-h-24"
                    placeholder="Your educational qualifications, certifications, relevant coursework..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 min-h-24"
                    placeholder="Any specific requirements, preferences, or additional details..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedService("")}
                    className="border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Resume;
