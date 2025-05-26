
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Download, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import CodeEditor from "@/components/CodeEditor";

const Compiler = () => {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`# Welcome to CodeLearn AI Online Compiler
print("Hello, World!")
print("Start coding here...")`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const languages = [
    { value: "python", label: "Python", extension: "py" },
    { value: "javascript", label: "JavaScript", extension: "js" },
    { value: "java", label: "Java", extension: "java" },
    { value: "cpp", label: "C++", extension: "cpp" },
    { value: "c", label: "C", extension: "c" },
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
  };

  const runCode = async () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      if (language === "python") {
        setOutput(`Hello, World!
Start coding here...

Process finished with exit code 0
Execution time: 0.123s
Memory usage: 8.2 MB`);
      } else if (language === "javascript") {
        setOutput(`Hello, World!
Start coding here...

Process finished with exit code 0
Execution time: 0.089s
Memory usage: 12.1 MB`);
      } else {
        setOutput(`Hello, World!
Start coding here...

Process finished with exit code 0
Execution time: 0.045s
Memory usage: 4.8 MB`);
      }
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Online Code Compiler
          </h1>
          <p className="text-xl text-gray-300">
            Write, compile, and run code in multiple programming languages
          </p>
        </div>

        {/* Compiler Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code Editor Panel */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-white flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Code Editor</span>
              </CardTitle>
              <div className="flex items-center space-x-4">
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-[140px] bg-slate-700 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-slate-600">
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CodeEditor
                value={code}
                onChange={setCode}
                language={language}
              />
            </CardContent>
          </Card>

          {/* Output Panel */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-white">Output</CardTitle>
              {output && (
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Save Output
                </Button>
              )}
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-slate-900 rounded-lg p-4 h-96 overflow-auto font-mono text-sm">
                {isRunning ? (
                  <div className="flex items-center space-x-2 text-blue-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
                    <span>Executing code...</span>
                  </div>
                ) : output ? (
                  <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
                ) : (
                  <div className="text-gray-500 flex items-center justify-center h-full">
                    Click "Run Code" to see output here
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-600 rounded-lg p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Languages</h3>
              <p className="text-gray-400">Support for Python, JavaScript, Java, C++, and more</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600 rounded-lg p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Execution</h3>
              <p className="text-gray-400">Run your code instantly with real-time output</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-600 rounded-lg p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Save & Share</h3>
              <p className="text-gray-400">Save your code and share it with others</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
