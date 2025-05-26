import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const components: Components = {
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-bold text-white mb-6 mt-8 pb-3 border-b border-slate-600" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h2 id={id} className="text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-24" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h3 id={id} className="text-xl font-semibold text-white mb-3 mt-6 scroll-mt-24" {...props}>
          {children}
        </h3>
      );
    },
    p: ({ children, ...props }) => (
      <p className="text-gray-300 leading-relaxed mb-4" {...props}>
        {children}
      </p>
    ),
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      // Check if this is a code block (has language) vs inline code
      const isCodeBlock = className?.includes('language-');
      
      if (isCodeBlock && language) {
        return (
          <div className="my-6">
            <div className="bg-slate-700 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b border-slate-600">
              {language.toUpperCase()}
            </div>
            <SyntaxHighlighter
              style={oneDark as any}
              language={language}
              PreTag="div"
              className="rounded-t-none rounded-b-lg border border-slate-600 border-t-0"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
        );
      }
      
      return (
        <code className="bg-slate-700 px-2 py-1 rounded text-blue-300 text-sm" {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ children, ...props }) => {
      const content = children?.toString() || '';
      let bgColor = 'bg-blue-900/30 border-blue-400';
      let icon = '💡';
      
      if (content.includes('⚠️') || content.includes('Warning')) {
        bgColor = 'bg-yellow-900/30 border-yellow-400';
        icon = '⚠️';
      } else if (content.includes('✅') || content.includes('Note')) {
        bgColor = 'bg-green-900/30 border-green-400';
        icon = '✅';
      }
      
      return (
        <blockquote className={`${bgColor} border-l-4 p-4 my-6 rounded-r-lg`} {...props}>
          <div className="flex items-start space-x-3">
            <span className="text-lg">{icon}</span>
            <div className="text-gray-200">{children}</div>
          </div>
        </blockquote>
      );
    },
    ul: ({ children, ...props }) => (
      <ul className="text-gray-300 mb-4 ml-6 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="text-gray-300 mb-4 ml-6 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-gray-300" {...props}>
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-white font-semibold" {...props}>
        {children}
      </strong>
    ),
    a: ({ children, href, ...props }) => (
      <a 
        href={href} 
        className="text-blue-400 hover:text-blue-300 underline" 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="prose prose-invert prose-blue max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
