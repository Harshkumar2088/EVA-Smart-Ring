import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const StorySubmission = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    culture: '',
    email: '',
    title: '',
    story: '',
    practices: '',
    consent: false,
    anonymous: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const culturalOptions = [
    'Eastern Traditions',
    'Western Approaches', 
    'Indigenous Wisdom',
    'African Heritage',
    'Latino Heritage',
    'Middle Eastern',
    'South Asian',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Story submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-brand shadow-gentle-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/10">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Share Your Wellness Journey
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Help others by sharing your cultural wellness story
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-gentle rounded-brand-sm hover:bg-surface"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-primary/10">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-gentle ${
                  step <= currentStep
                    ? 'bg-primary text-white' :'bg-surface text-text-secondary'
                }`}>
                  {step}
                </div>
                {step < totalSteps && (
                  <div className={`w-16 h-1 mx-2 rounded-full transition-gentle ${
                    step < currentStep ? 'bg-primary' : 'bg-surface'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-text-secondary">
            Step {currentStep} of {totalSteps}: {
              currentStep === 1 ? 'Personal Information' :
              currentStep === 2 ? 'Your Story' : 'Review & Submit'
            }
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="18"
                    max="100"
                    className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                    placeholder="Your age"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Cultural Heritage *
                </label>
                <select
                  name="culture"
                  value={formData.culture}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                >
                  <option value="">Select your cultural background</option>
                  {culturalOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="anonymous"
                  id="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary border-primary/20 rounded focus:ring-primary/50"
                />
                <label htmlFor="anonymous" className="text-sm text-text-secondary">
                  Share my story anonymously (we'll use a pseudonym)
                </label>
              </div>
            </div>
          )}

          {/* Step 2: Your Story */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Story Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle"
                  placeholder="A compelling title for your wellness journey"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Your Wellness Journey *
                </label>
                <textarea
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle resize-none"
                  placeholder="Share your story... How did Whisper Ring help you integrate your cultural wellness practices? What challenges did you face? What transformations did you experience?"
                />
                <div className="mt-2 text-sm text-text-secondary">
                  Minimum 200 words. Be specific about how AI technology enhanced your cultural wellness practices.
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Cultural Practices Integrated
                </label>
                <textarea
                  name="practices"
                  value={formData.practices}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-primary/20 rounded-brand focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-gentle resize-none"
                  placeholder="List the traditional or cultural wellness practices that were part of your journey (e.g., meditation techniques, herbal remedies, community rituals, etc.)"
                />
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-surface/50 rounded-brand p-6">
                <h3 className="font-heading font-semibold text-text-primary mb-4">
                  Review Your Submission
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-text-primary">Name:</span>
                    <span className="ml-2 text-text-secondary">
                      {formData.anonymous ? 'Anonymous' : formData.name}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-text-primary">Cultural Heritage:</span>
                    <span className="ml-2 text-text-secondary">{formData.culture}</span>
                  </div>
                  <div>
                    <span className="font-medium text-text-primary">Story Title:</span>
                    <span className="ml-2 text-text-secondary">{formData.title}</span>
                  </div>
                  <div>
                    <span className="font-medium text-text-primary">Story Length:</span>
                    <span className="ml-2 text-text-secondary">{formData.story.length} characters</span>
                  </div>
                </div>
              </div>

              <div className="bg-cream/50 rounded-brand p-6">
                <h4 className="font-heading font-semibold text-text-primary mb-3">
                  Community Guidelines
                </h4>
                <ul className="text-sm text-text-secondary space-y-2">
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Share authentic, personal experiences</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Respect cultural practices and avoid appropriation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Focus on wellness journey, not medical advice</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>Maintain privacy of others mentioned in your story</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-primary border-primary/20 rounded focus:ring-primary/50"
                />
                <label htmlFor="consent" className="text-sm text-text-secondary">
                  I consent to sharing my story publicly and understand it may be featured 
                  in Whisper Ring's community content. *
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-primary/10">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-brand font-medium transition-gentle ${
                currentStep === 1
                  ? 'bg-surface text-text-secondary cursor-not-allowed' :'bg-surface text-text-primary hover:bg-primary/10'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-primary text-white rounded-brand font-medium transition-whisper hover:bg-primary-600 whisper-ripple"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.consent}
                className={`px-6 py-3 rounded-brand font-medium transition-whisper ${
                  formData.consent
                    ? 'bg-plum text-white hover:shadow-whisper whisper-ripple'
                    : 'bg-surface text-text-secondary cursor-not-allowed'
                }`}
              >
                Submit Story
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default StorySubmission;