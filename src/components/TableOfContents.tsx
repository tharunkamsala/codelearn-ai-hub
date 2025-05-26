
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  activeId?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, activeId }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      items.push({ id, title, level });
    }

    setTocItems(items);
  }, [content]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className={`${isMobile ? 'relative' : 'sticky top-24'} bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm`}>
      <div 
        className="flex items-center justify-between p-4 cursor-pointer lg:cursor-default"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <List className="h-5 w-5 text-blue-400" />
          <h3 className="font-semibold text-white">Table of Contents</h3>
        </div>
        {isMobile && (
          isOpen ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />
        )}
      </div>
      
      <div className={`${isMobile && !isOpen ? 'hidden' : 'block'} px-4 pb-4`}>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeId === item.id
                  ? 'bg-blue-600/20 text-blue-300 border-l-2 border-blue-400'
                  : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
              } ${item.level === 3 ? 'ml-4' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
