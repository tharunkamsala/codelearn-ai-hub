
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
  height?: string;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ 
  value, 
  onChange, 
  language, 
  height = "400px" 
}) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    
    // Configure Monaco theme
    monaco.editor.defineTheme('hackerrank-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'keyword', foreground: '569CD6' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
      ],
      colors: {
        'editor.background': '#0F172A',
        'editor.foreground': '#E2E8F0',
        'editorLineNumber.foreground': '#64748B',
        'editor.selectionBackground': '#1E293B',
        'editor.lineHighlightBackground': '#1E293B',
      }
    });
    
    monaco.editor.setTheme('hackerrank-dark');
  };

  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '');
  };

  return (
    <motion.div 
      className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          theme: 'hackerrank-dark',
          fontSize: 14,
          fontFamily: 'JetBrains Mono, Monaco, Consolas, monospace',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          insertSpaces: true,
          wordWrap: 'on',
          lineNumbers: 'on',
          renderWhitespace: 'selection',
          cursorBlinking: 'smooth',
          smoothScrolling: true,
        }}
      />
    </motion.div>
  );
};

export default MonacoEditor;
