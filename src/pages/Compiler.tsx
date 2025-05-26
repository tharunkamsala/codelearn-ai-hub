
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Play, Download, Code, Clock, Database, History, Settings, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MonacoEditor from "@/components/MonacoEditor";

const Compiler = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`# Welcome to CodeLearn AI Online Compiler
print("Hello, World!")
print("Start coding here...")`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState("");
  const [memoryUsage, setMemoryUsage] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [copied, setCopied] = useState(false);

  const languages = [
    { value: "python", label: "Python", extension: "py", icon: "🐍" },
    { value: "javascript", label: "JavaScript", extension: "js", icon: "⚡" },
    { value: "java", label: "Java", extension: "java", icon: "☕" },
    { value: "cpp", label: "C++", extension: "cpp", icon: "⚙️" },
    { value: "c", label: "C", extension: "c", icon: "🔧" },
  ];

  const codeTemplates = {
    python: `# Welcome to CodeLearn AI Online Compiler
print("Hello, World!")
print("Start coding here...")`,
    javascript: `// Welcome to CodeLearn AI Online Compiler
console.log("Hello, World!");
console.log("Start coding here...");`,
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Start coding here...");
    }
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "Start coding here..." << endl;
    return 0;
}`,
    c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("Start coding here...\\n");
    return 0;
}`
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(codeTemplates[newLanguage as keyof typeof codeTemplates]);
    setOutput("");
    setExecutionTime("");
    setMemoryUsage("");
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate code execution
    setTimeout(() => {
      if (language === "python") {
        setOutput(`Hello, World!
Start coding here...`);
        setExecutionTime("0.123s");
        setMemoryUsage("8.2 MB");
      } else if (language === "javascript") {
        setOutput(`Hello, World!
Start coding here...`);
        setExecutionTime("0.089s");
        setMemoryUsage("12.1 MB");
      } else {
        setOutput(`Hello, World!
Start coding here...`);
        setExecutionTime("0.045s");
        setMemoryUsage("4.8 MB");
      }
      setIsRunning(false);
    }, 1500);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code Compiler
          </h1>
          <p className="text-lg text-gray-300">
            Write, compile, and run code like a pro
          </p>
        </motion.div>

        {/* Top Controls */}
        <motion.div 
          className="flex flex-wrap items-center justify-between mb-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px] bg-slate-800 border-slate-600 text-white">
                <div className="flex items-center space-x-2">
                  <span>{currentLanguage?.icon}</span>
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-slate-700">
                    <div className="flex items-center space-x-2">
                      <span>{lang.icon}</span>
                      <span>{lang.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {executionTime && (
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{executionTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Database className="h-4 w-4" />
                  <span>{memoryUsage}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              onClick={handleCopyCode}
              variant="outline"
              size="sm"
              className="border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={runCode}
                disabled={isRunning}
                className="bg-green-600 hover:bg-green-700 text-white px-6"
              >
                <Play className="h-4 w-4 mr-2" />
                {isRunning ? "Running..." : "Run Code"}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border border-slate-700 bg-slate-800/50">
            {/* Code Editor Panel */}
            <ResizablePanel defaultSize={60} minSize={40}>
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-blue-400" />
                    <span className="font-medium text-white">Code Editor</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {currentLanguage?.label} • {code.split('\n').length} lines
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <MonacoEditor
                    value={code}
                    onChange={setCode}
                    language={language}
                    height="500px"
                  />
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Output Panel */}
            <ResizablePanel defaultSize={40} minSize={30}>
              <div className="h-full flex flex-col">
                <Tabs defaultValue="output" className="h-full flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b border-slate-700">
                    <TabsList className="bg-slate-700">
                      <TabsTrigger value="output" className="text-white data-[state=active]:bg-slate-600">
                        Output
                      </TabsTrigger>
                      <TabsTrigger value="input" className="text-white data-[state=active]:bg-slate-600">
                        Input
                      </TabsTrigger>
                      <TabsTrigger value="history" className="text-white data-[state=active]:bg-slate-600">
                        <History className="h-4 w-4 mr-1" />
                        History
                      </TabsTrigger>
                    </TabsList>
                    
                    {output && (
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    )}
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <TabsContent value="output" className="h-full m-0">
                      <div className="h-full bg-slate-900 p-4 overflow-auto font-mono text-sm">
                        <AnimatePresence mode="wait">
                          {isRunning ? (
                            <motion.div 
                              key="loading"
                              className="flex items-center space-x-3 text-blue-400"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                              <span>Executing code...</span>
                            </motion.div>
                          ) : output ? (
                            <motion.div
                              key="output"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              <div className="text-green-400 whitespace-pre-wrap">{output}</div>
                              {executionTime && (
                                <div className="mt-4 pt-4 border-t border-slate-700 text-gray-500 text-xs">
                                  Process finished with exit code 0
                                </div>
                              )}
                            </motion.div>
                          ) : (
                            <motion.div 
                              key="empty"
                              className="text-gray-500 flex items-center justify-center h-full"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Click "Run Code" to see output here
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </TabsContent>

                    <TabsContent value="input" className="h-full m-0">
                      <div className="h-full p-4">
                        <textarea
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          placeholder="Enter custom input for your program..."
                          className="w-full h-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-gray-300 font-mono text-sm resize-none focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="h-full m-0">
                      <div className="h-full p-4 text-gray-400 text-center">
                        <History className="h-8 w-8 mx-auto mb-2" />
                        <p>Execution history will appear here</p>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </motion.div>
      </div>
    </div>
  );
};

export default Compiler;
