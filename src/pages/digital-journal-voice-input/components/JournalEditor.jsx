import React, { useRef, useEffect } from 'react';
import Icon from 'components/AppIcon';

const JournalEditor = ({ content, setContent, placeholder }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  const formatText = (format) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    let formattedText = selectedText;
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'bullet':
        formattedText = `• ${selectedText}`;
        break;
      default:
        break;
    }
    
    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  return (
    <div className="bg-background rounded-organic shadow-soft-elevation-1 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-border-light">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => formatText('bold')}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback"
            title="Bold"
          >
            <Icon name="Bold" size={16} />
          </button>
          <button
            onClick={() => formatText('italic')}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback"
            title="Italic"
          >
            <Icon name="Italic" size={16} />
          </button>
          <button
            onClick={() => formatText('bullet')}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback"
            title="Bullet Point"
          >
            <Icon name="List" size={16} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback">
            <Icon name="Image" size={16} />
          </button>
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback">
            <Icon name="Paperclip" size={16} />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="p-6">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          className="w-full min-h-[300px] lg:min-h-[400px] resize-none border-none outline-none bg-transparent text-text-primary placeholder-text-tertiary font-body text-lg leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-border-light bg-surface">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-text-secondary">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={14} color="#A0AEC0" />
          <span className="text-sm text-text-tertiary">
            {new Date().toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JournalEditor;