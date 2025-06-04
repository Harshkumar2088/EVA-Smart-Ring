import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const EmpatheticJournaling = ({ culturalLens }) => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const culturalResponses = {
    universal: {
      greeting: "Hello! I\'m here to listen and support you. What\'s on your mind today?",
      stressResponse: "I hear that you\'re feeling stressed. That\'s completely understandable. Would you like to explore what might be contributing to these feelings?",
      color: "primary",
      tone: "supportive and understanding"
    },
    eastern: {
      greeting: "Welcome, friend. In this moment of stillness, what wisdom does your heart wish to share?",
      stressResponse: "I sense the weight you carry. In Eastern wisdom, stress often signals an imbalance. Shall we explore gentle ways to restore your inner harmony?",
      color: "amber",
      tone: "wise and harmonious"
    },
    indigenous: {
      greeting: "I honor your presence here. The earth listens, and so do I. What story does your spirit need to tell?",
      stressResponse: "Your energy speaks of turbulence. Our ancestors knew that healing comes through connection - to self, community, and nature. What calls to your heart for healing?",
      color: "sage",
      tone: "respectful and connected"
    },
    western: {
      greeting: "Hi there! I\'m your AI wellness companion. I\'m here to help you process your thoughts and feelings. What would you like to talk about?",
      stressResponse: "I understand you\'re experiencing stress. Let\'s work together to identify practical strategies that can help you manage these feelings effectively.",
      color: "secondary",
      tone: "practical and solution-focused"
    }
  };

  const samplePrompts = [
    "I've been feeling overwhelmed at work lately...",
    "I'm struggling to maintain work-life balance...",
    "I feel disconnected from my cultural roots...",
    "I'm having trouble sleeping and feeling anxious...",
    "I want to develop better self-care habits..."
  ];

  const mockConversation = [
    {
      type: 'ai',
      message: culturalResponses[culturalLens].greeting,
      timestamp: new Date(Date.now() - 300000)
    }
  ];

  useEffect(() => {
    setConversation(mockConversation);
  }, [culturalLens]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = {
      type: 'user',
      message: userInput,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateCulturalResponse(userInput);
      setConversation(prev => [...prev, {
        type: 'ai',
        message: aiResponse,
        timestamp: new Date(),
        culturalContext: culturalLens
      }]);
      setIsTyping(false);
    }, 2000);
  };

  const generateCulturalResponse = (input) => {
    const context = culturalResponses[culturalLens];
    
    if (input.toLowerCase().includes('stress') || input.toLowerCase().includes('overwhelm')) {
      return context.stressResponse;
    }
    
    if (input.toLowerCase().includes('work')) {
      switch (culturalLens) {
        case 'eastern':
          return "Work challenges can disturb our inner peace. In Taoist philosophy, we learn that like water, we can flow around obstacles rather than fighting them. What would flowing look like in your situation?";
        case 'indigenous':
          return "Work is part of our contribution to the community circle. When work feels heavy, it may be time to reconnect with your purpose and the greater web of relationships. What gives your work meaning?";
        case 'western':
          return "Work-related stress is very common. Let's break this down into manageable components. What specific aspects of work are causing you the most difficulty right now?";
        default:
          return "Work can be a source of both fulfillment and stress. I'm here to help you find balance. What aspects of your work situation would you like to explore?";
      }
    }

    // Default empathetic response
    return `Thank you for sharing that with me. I can sense the importance of what you're expressing. From a ${culturalLens} perspective, how would you like to explore this further?`;
  };

  const handlePromptSelect = (prompt) => {
    setUserInput(prompt);
    setSelectedPrompt(prompt);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const currentContext = culturalResponses[culturalLens];

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-text-primary mb-2">
            Empathetic Journaling
          </h2>
          <p className="text-text-secondary">
            AI conversation with {culturalLens} culturally-aware responses
          </p>
        </div>
        
        <div className={`px-4 py-2 bg-${currentContext.color}/10 rounded-brand border border-${currentContext.color}/20`}>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full bg-${currentContext.color} animate-empathy-pulse`}></div>
            <span className="text-sm font-medium text-text-primary">
              {currentContext.tone}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Conversation Area */}
        <div className="lg:col-span-2">
          <div className="bg-background rounded-brand shadow-gentle h-96 flex flex-col">
            {/* Chat Header */}
            <div className={`p-4 bg-${currentContext.color}/10 rounded-t-brand border-b border-${currentContext.color}/20`}>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full bg-${currentContext.color}/20 flex items-center justify-center`}>
                  <Icon name="MessageCircle" size={20} className={`text-${currentContext.color}`} />
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Whisper AI Companion</h3>
                  <p className="text-xs text-text-secondary">
                    Speaking with {culturalLens} cultural awareness
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md p-3 rounded-brand ${
                      message.type === 'user' ?'bg-plum text-white'
                        : `bg-${currentContext.color}/10 text-text-primary border border-${currentContext.color}/20`
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-white/70' : 'text-text-secondary'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`max-w-xs lg:max-w-md p-3 rounded-brand bg-${currentContext.color}/10 border border-${currentContext.color}/20`}>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 bg-${currentContext.color} rounded-full animate-bounce`}></div>
                      <div className={`w-2 h-2 bg-${currentContext.color} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
                      <div className={`w-2 h-2 bg-${currentContext.color} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-surface">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Share your thoughts..."
                  className="flex-1 px-4 py-2 border border-surface rounded-brand-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim()}
                  className={`px-4 py-2 bg-${currentContext.color} text-white rounded-brand-sm transition-gentle whisper-ripple hover:shadow-gentle disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Icon name="Send" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Prompts & Insights */}
        <div className="space-y-6">
          {/* Sample Prompts */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
              Try These Prompts
            </h3>
            <div className="space-y-2">
              {samplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptSelect(prompt)}
                  className={`w-full text-left p-3 rounded-brand-sm border transition-gentle whisper-ripple ${
                    selectedPrompt === prompt
                      ? `bg-${currentContext.color}/10 border-${currentContext.color}/30`
                      : 'bg-background border-surface hover:bg-surface'
                  }`}
                >
                  <p className="text-sm text-text-primary">{prompt}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Cultural Context Info */}
          <div className={`bg-${currentContext.color}/10 rounded-brand p-4 border border-${currentContext.color}/20`}>
            <h4 className="font-medium text-text-primary mb-2">Cultural Context</h4>
            <p className="text-sm text-text-secondary mb-3">
              The AI adapts its communication style based on {culturalLens} cultural values and wellness approaches.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={14} className={`text-${currentContext.color}`} />
                <span className="text-xs text-text-secondary">Empathetic listening</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Brain" size={14} className={`text-${currentContext.color}`} />
                <span className="text-xs text-text-secondary">Cultural awareness</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={14} className={`text-${currentContext.color}`} />
                <span className="text-xs text-text-secondary">Privacy protected</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-cream/50 rounded-brand p-4 border border-primary/10">
            <div className="flex items-start space-x-2">
              <Icon name="Lock" size={16} className="text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-xs text-text-secondary">
                  <strong>Your Privacy:</strong> All conversations are processed locally. 
                  No personal data is stored or transmitted to external servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpatheticJournaling;