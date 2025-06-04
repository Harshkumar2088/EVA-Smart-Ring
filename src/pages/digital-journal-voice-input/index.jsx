import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import JournalEditor from './components/JournalEditor';
import VoiceInput from './components/VoiceInput';
import EntryList from './components/EntryList';
import EmotionSelector from './components/EmotionSelector';
import SearchFilters from './components/SearchFilters';

const DigitalJournalVoiceInput = () => {
  const [activeTab, setActiveTab] = useState('write');
  const [currentEntry, setCurrentEntry] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMood, setFilterMood] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [journalEntries, setJournalEntries] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [streakCount, setStreakCount] = useState(7);

  // Mock journal entries data
  const mockEntries = [
    {
      id: 1,
      date: new Date('2024-01-15'),
      title: 'Morning Reflection',
      content: `Today started with a sense of calm and purpose. I woke up naturally before my alarm, which always feels like a small victory. The meditation session this morning was particularly grounding - I focused on gratitude and felt genuinely thankful for the simple things: my morning coffee, the sunlight streaming through the window, and the quiet moments before the day begins.

I've been thinking about how important it is to acknowledge these peaceful moments. They're like anchors that keep me steady when life gets turbulent.`,
      emotion: { name: 'Calm', color: '#7B9E87', icon: 'Leaf' },
      mood: 'positive',
      tags: ['morning', 'meditation', 'gratitude'],
      wordCount: 89
    },
    {
      id: 2,
      date: new Date('2024-01-14'),
      title: 'Challenging Day',
      content: `Work was overwhelming today. The project deadline is approaching fast, and I felt the familiar weight of stress settling on my shoulders. But I'm learning to recognize these feelings earlier and respond rather than react.I took three deep breaths during the team meeting when I felt my anxiety rising. It's a small thing, but it made a difference. I'm proud of myself for implementing the coping strategies I've been practicing.`,
      emotion: { name: 'Stressed', color: '#E8B86D', icon: 'Zap' },
      mood: 'challenging',
      tags: ['work', 'stress', 'coping'],
      wordCount: 67
    },
    {
      id: 3,
      date: new Date('2024-01-13'),
      title: 'Evening Gratitude',
      content: `Spent the evening with friends, and it reminded me how much I value genuine connections. We laughed until our stomachs hurt, shared stories, and just enjoyed each other's company without any distractions.

These moments of pure joy are what life is about. I want to remember this feeling and carry it with me into tomorrow.`,
      emotion: { name: 'Joyful', color: '#4A90A4', icon: 'Heart' },
      mood: 'positive',
      tags: ['friends', 'joy', 'connection'],
      wordCount: 54
    }
  ];

  useEffect(() => {
    setJournalEntries(mockEntries);
  }, []);

  const emotions = [
    { name: 'Happy', color: '#4A90A4', icon: 'Smile' },
    { name: 'Calm', color: '#7B9E87', icon: 'Leaf' },
    { name: 'Excited', color: '#E8B86D', icon: 'Zap' },
    { name: 'Grateful', color: '#68A085', icon: 'Heart' },
    { name: 'Anxious', color: '#D69E2E', icon: 'AlertCircle' },
    { name: 'Sad', color: '#C53030', icon: 'Cloud' },
    { name: 'Frustrated', color: '#B7791F', icon: 'Frown' },
    { name: 'Peaceful', color: '#2F855A', icon: 'Sun' }
  ];

  const handleSaveEntry = () => {
    if (!currentEntry.trim()) return;

    const newEntry = {
      id: Date.now(),
      date: new Date(),
      title: currentEntry.split(' ').slice(0, 3).join(' ') + '...',
      content: currentEntry,
      emotion: selectedEmotion || emotions[0],
      mood: selectedEmotion?.name === 'Happy' || selectedEmotion?.name === 'Excited' || selectedEmotion?.name === 'Grateful' ? 'positive' : 
             selectedEmotion?.name === 'Calm' || selectedEmotion?.name === 'Peaceful' ? 'neutral' : 'challenging',
      tags: [],
      wordCount: currentEntry.split(' ').length
    };

    setJournalEntries([newEntry, ...journalEntries]);
    setCurrentEntry('');
    setSelectedEmotion(null);
    setActiveTab('entries');
  };

  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMood = filterMood === 'all' || entry.mood === filterMood;
    const matchesDate = filterDate === 'all' || 
                       (filterDate === 'today' && entry.date.toDateString() === new Date().toDateString()) ||
                       (filterDate === 'week' && entry.date >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
    
    return matchesSearch && matchesMood && matchesDate;
  });

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-2">
                Digital Journal
              </h1>
              <p className="font-body text-text-secondary text-lg">
                Capture your thoughts and emotions through voice or text
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="flex items-center space-x-2 px-4 py-2 bg-secondary-100 rounded-organic">
                <Icon name="Flame" size={20} color="#7B9E87" />
                <span className="font-body font-medium text-secondary-700">
                  {streakCount} day streak
                </span>
              </div>
              <Link
                to="/emotion-insights-analytics"
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600"
              >
                <Icon name="TrendingUp" size={18} />
                <span className="font-body font-medium">View Insights</span>
              </Link>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-surface rounded-organic p-1">
            <button
              onClick={() => setActiveTab('write')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-organic gentle-transition haptic-feedback ${
                activeTab === 'write' ?'bg-background text-text-primary shadow-soft-elevation-1' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="PenTool" size={18} />
              <span className="font-body font-medium">Write</span>
            </button>
            <button
              onClick={() => setActiveTab('entries')}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-organic gentle-transition haptic-feedback ${
                activeTab === 'entries' ?'bg-background text-text-primary shadow-soft-elevation-1' :'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name="BookOpen" size={18} />
              <span className="font-body font-medium">Entries ({journalEntries.length})</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        {activeTab === 'write' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Writing Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Voice/Text Toggle */}
              <div className="flex items-center justify-between p-4 bg-surface rounded-organic">
                <div className="flex items-center space-x-3">
                  <Icon name="Edit3" size={20} color="#4A90A4" />
                  <span className="font-body font-medium text-text-primary">Input Method</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsVoiceMode(false)}
                    className={`px-3 py-2 rounded-organic gentle-transition haptic-feedback ${
                      !isVoiceMode
                        ? 'bg-primary text-text-inverse' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                    }`}
                  >
                    Text
                  </button>
                  <button
                    onClick={() => setIsVoiceMode(true)}
                    className={`px-3 py-2 rounded-organic gentle-transition haptic-feedback ${
                      isVoiceMode
                        ? 'bg-primary text-text-inverse' :'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                    }`}
                  >
                    Voice
                  </button>
                </div>
              </div>

              {/* Editor/Voice Input */}
              {isVoiceMode ? (
                <VoiceInput
                  transcription={transcription}
                  setTranscription={setTranscription}
                  isRecording={isRecording}
                  setIsRecording={setIsRecording}
                  onTranscriptionComplete={(text) => setCurrentEntry(currentEntry + ' ' + text)}
                />
              ) : (
                <JournalEditor
                  content={currentEntry}
                  setContent={setCurrentEntry}
                  placeholder="What's on your mind today? Share your thoughts, feelings, or reflections..."
                />
              )}

              {/* Entry Actions */}
              <div className="flex items-center justify-between p-4 bg-surface rounded-organic">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text-secondary">
                    {currentEntry.split(' ').filter(word => word.length > 0).length} words
                  </span>
                  <div className="flex items-center space-x-2">
                    <Icon name="Save" size={16} color="#7B9E87" />
                    <span className="text-sm text-text-secondary">Auto-saving...</span>
                  </div>
                </div>
                <button
                  onClick={handleSaveEntry}
                  disabled={!currentEntry.trim()}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Icon name="Plus" size={18} />
                  <span className="font-body font-medium">Save Entry</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emotion Selector */}
              <EmotionSelector
                emotions={emotions}
                selectedEmotion={selectedEmotion}
                setSelectedEmotion={setSelectedEmotion}
              />

              {/* Quick Prompts */}
              <div className="p-6 bg-surface rounded-organic">
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
                  Reflection Prompts
                </h3>
                <div className="space-y-3">
                  {[
                    "What am I grateful for today?",
                    "How did I handle challenges?",
                    "What brought me joy?",
                    "What would I do differently?"
                  ].map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEntry(currentEntry + prompt + ' ')}
                      className="w-full text-left p-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-organic gentle-transition haptic-feedback"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Entries Preview */}
              <div className="p-6 bg-surface rounded-organic">
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
                  Recent Entries
                </h3>
                <div className="space-y-3">
                  {journalEntries.slice(0, 3).map((entry) => (
                    <div key={entry.id} className="p-3 bg-background rounded-organic">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name={entry.emotion.icon} size={16} color={entry.emotion.color} />
                        <span className="text-sm font-medium text-text-primary">{entry.title}</span>
                      </div>
                      <p className="text-xs text-text-secondary line-clamp-2">
                        {entry.content.substring(0, 80)}...
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Search and Filters */}
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterMood={filterMood}
              setFilterMood={setFilterMood}
              filterDate={filterDate}
              setFilterDate={setFilterDate}
            />

            {/* Entries List */}
            <EntryList
              entries={filteredEntries}
              onEntryClick={(entry) => {
                setCurrentEntry(entry.content);
                setSelectedEmotion(entry.emotion);
                setActiveTab('write');
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalJournalVoiceInput;