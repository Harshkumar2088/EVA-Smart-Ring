import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const PracticeGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const practiceGuides = [
    {
      id: 1,
      title: "Mindful Breathing Across Cultures",
      culture: "Universal",
      difficulty: "Beginner",
      duration: "10-15 minutes",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      description: `Learn breathing techniques from various cultural traditions, including Pranayama from India, Qi breathing from China, and Indigenous breath work from Native American traditions.

This guide combines ancient wisdom with modern understanding of breathwork's benefits for stress reduction, mental clarity, and emotional balance.`,
      benefits: ["Reduces stress and anxiety", "Improves focus and clarity", "Connects mind and body", "Honors cultural traditions"],
      steps: [
        {
          title: "Preparation & Sacred Space",
          instruction: "Find a quiet space and sit comfortably. In many traditions, creating a sacred space is important. Light a candle or incense if desired, representing the universal element of fire that connects all breathing practices.",
          duration: "2 minutes",
          tips: ["Face east if possible (many traditions honor the rising sun)", "Keep your spine straight but not rigid", "Place hands in a comfortable position"]
        },
        {
          title: "Pranayama Foundation (Indian Tradition)",
          instruction: "Begin with the 4-7-8 breath pattern. Inhale through your nose for 4 counts, hold for 7 counts, exhale through your mouth for 8 counts. This ancient technique balances the nervous system.",
          duration: "3-4 minutes",
          tips: ["Start with shorter counts if needed", "Focus on the pause between breaths", "Let each exhale release tension"]
        },
        {
          title: "Qi Breathing (Chinese Tradition)",
          instruction: "Transition to belly breathing while visualizing energy (Qi) flowing through your body. Inhale deeply into your lower abdomen, pause, then exhale slowly while imagining energy circulating from your core to your extremities.",
          duration: "3-4 minutes",
          tips: ["Place one hand on chest, one on belly", "The belly hand should move more", "Visualize golden light with each breath"]
        },
        {
          title: "Indigenous Connection Breath",
          instruction: "Connect with the earth and sky. Inhale while imagining drawing energy from the earth through your roots, exhale while sending gratitude to the sky. This honors the Indigenous understanding of our connection to all life.",
          duration: "3-4 minutes",
          tips: ["Feel your connection to the ground", "Send gratitude with each exhale", "Honor the four directions if you know them"]
        },
        {
          title: "Integration & Gratitude",
          instruction: "Sit quietly for a moment, breathing naturally. Offer gratitude to the traditions that have shared these practices and to your own commitment to wellness. Notice how you feel compared to when you started.",
          duration: "2-3 minutes",
          tips: ["Don't rush this final step", "Journal your experience if desired", "Carry this calm energy into your day"]
        }
      ],
      culturalContext: "This practice honors the universal human experience of breath while respecting the specific wisdom each culture brings to breathwork.",icon: "Wind",color: "primary"
    },
    {
      id: 2,
      title: "Community Healing Circle",culture: "African Traditions",
      difficulty: "Intermediate",duration: "45-60 minutes",image: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=250&fit=crop",
      description: `Learn to facilitate or participate in healing circles based on African traditional practices. These circles emphasize community support, storytelling, and collective wisdom for mental and emotional wellness.

This guide provides a framework for creating safe, supportive spaces where individuals can share their experiences and receive community support.`,
      benefits: ["Builds community connections", "Provides emotional support", "Honors storytelling traditions", "Creates safe healing spaces"],
      steps: [
        {
          title: "Circle Preparation",instruction: "Arrange seating in a circle with no head or foot, representing equality. Place a meaningful object in the center (candle, plant, or cultural artifact) to serve as the talking piece and focal point.",duration: "5 minutes",
          tips: ["Ensure everyone can see each other", "Remove distractions like phones", "Create a welcoming atmosphere"]
        },
        {
          title: "Opening Ritual",instruction: "Begin with a moment of silence or a simple song/chant that honors the space and the people present. The facilitator explains the circle guidelines: speak from the heart, listen with respect, and maintain confidentiality.",duration: "5-10 minutes",
          tips: ["Keep the opening simple and inclusive", "Explain the talking piece tradition", "Emphasize the sacred nature of sharing"]
        },
        {
          title: "Check-in Round",instruction: "Pass the talking piece around the circle. Each person shares their name and how they\'re feeling in this moment. No advice or responses - just witnessing and holding space for each person\'s truth.",
          duration: "15-20 minutes",
          tips: ["It's okay to pass if someone isn't ready", "Maintain eye contact when appropriate", "Practice deep listening"]
        },
        {
          title: "Story Sharing",
          instruction: "The talking piece continues around for deeper sharing. Participants can share a challenge, a celebration, or ask for community support. The circle holds space without trying to \'fix\' or give unsolicited advice.",
          duration: "20-25 minutes",
          tips: ["Honor each person's story", "Resist the urge to relate or compare", "Trust the wisdom of the circle"]
        },
        {
          title: "Closing Circle",instruction: "End with a final round where each person shares one word or phrase about their experience. Close with gratitude for the circle and the wisdom shared. Some traditions end with a group hum or song.",duration: "5-10 minutes",
          tips: ["Keep closing words brief", "Express gratitude for the community", "Honor the healing that occurred"]
        }
      ],
      culturalContext: "Healing circles are found in many African traditions and emphasize the Ubuntu philosophy - \'I am because we are\' - recognizing our interconnectedness.",
      icon: "Users",
      color: "accent"
    },
    {
      id: 3,
      title: "Forest Bathing (Shinrin-yoku)",
      culture: "Eastern (Japanese)",
      difficulty: "Beginner",
      duration: "2-3 hours",
      image: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?w=400&h=250&fit=crop",
      description: `Experience the Japanese practice of Shinrin-yoku, or forest bathing - a mindful immersion in nature that has been scientifically proven to reduce stress, boost immunity, and improve overall wellbeing.

This practice is about being present with nature, not hiking or exercising, but simply opening your senses to the forest environment.`,
      benefits: ["Reduces cortisol levels", "Boosts immune system", "Improves mood and focus", "Connects with nature"],
      steps: [
        {
          title: "Intention Setting",
          instruction: "Before entering the forest, set an intention to slow down and be present. Leave behind goals of distance or destination. This is about quality of presence, not quantity of movement.",
          duration: "5 minutes",
          tips: ["Turn off or silence devices", "Set intention for mindful presence", "Release expectations"]
        },
        {
          title: "Sensory Awakening",
          instruction: "Begin walking very slowly, engaging each sense deliberately. Notice the sounds of the forest, the feeling of air on your skin, the scents carried on the breeze. Let your senses guide your experience.",
          duration: "20-30 minutes",
          tips: ["Walk slower than feels natural", "Stop frequently to listen", "Touch trees and plants mindfully"]
        },
        {
          title: "Finding Your Sit Spot",
          instruction: "Find a place that calls to you - perhaps beside a tree, near water, or in a small clearing. Sit quietly and let yourself become part of the forest ecosystem. Observe without analyzing.",
          duration: "30-45 minutes",
          tips: ["Trust your intuition about where to sit", "Become still and patient", "Notice how the forest responds to your presence"]
        },
        {
          title: "Mindful Movement",
          instruction: "Continue your slow journey through the forest. Practice \'soft gaze\' - looking without focusing on any particular thing. Let the forest guide your path rather than following a predetermined route.",
          duration: "45-60 minutes",
          tips: ["Follow what attracts your attention", "Practice peripheral vision", "Move like you're part of the forest"]
        },
        {
          title: "Gratitude and Departure",instruction: "Before leaving, take a moment to express gratitude to the forest. Some practitioners leave a small offering like water or simply bow in respect. Carry the forest\'s peace with you.",duration: "10 minutes",
          tips: ["Thank the forest for its gifts", "Take three deep breaths of forest air", "Commit to returning this peace to your daily life"]
        }
      ],
      culturalContext: "Shinrin-yoku emerged from Japanese culture\'s deep respect for nature and understanding of the healing power of forests.",icon: "Trees",color: "sage"
    }
  ];

  const handleGuideSelect = (guide) => {
    setSelectedGuide(guide);
    setActiveStep(0);
  };

  const nextStep = () => {
    if (activeStep < selectedGuide.steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'sage';
      case 'intermediate': return 'amber';
      case 'advanced': return 'accent';
      default: return 'primary';
    }
  };

  if (selectedGuide) {
    const currentStep = selectedGuide.steps[activeStep];
    
    return (
      <div className="space-y-8">
        {/* Guide Header */}
        <div className="bg-background rounded-brand shadow-gentle overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={selectedGuide.image}
              alt={selectedGuide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-3xl font-heading font-semibold mb-2">
                {selectedGuide.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center space-x-1">
                  <Icon name="Globe" size={16} />
                  <span>{selectedGuide.culture}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={16} />
                  <span>{selectedGuide.duration}</span>
                </span>
                <span className={`px-2 py-1 bg-${getDifficultyColor(selectedGuide.difficulty)}/80 rounded-brand-sm`}>
                  {selectedGuide.difficulty}
                </span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-text-secondary leading-relaxed mb-6">
              {selectedGuide.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Heart" size={16} />
                  <span>Benefits</span>
                </h3>
                <ul className="space-y-2">
                  {selectedGuide.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="CheckCircle" size={14} className="text-sage flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Info" size={16} />
                  <span>Cultural Context</span>
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {selectedGuide.culturalContext}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="bg-surface/50 rounded-brand p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-semibold text-text-primary">
              Step {activeStep + 1} of {selectedGuide.steps.length}
            </h2>
            <button
              onClick={() => setSelectedGuide(null)}
              className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-gentle"
            >
              <Icon name="ArrowLeft" size={16} />
              <span>Back to Guides</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-primary/20 rounded-full h-2 mb-8">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${((activeStep + 1) / selectedGuide.steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Current Step */}
          <div className="bg-background rounded-brand p-6 shadow-gentle">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-heading font-semibold text-text-primary">
                {currentStep.title}
              </h3>
              <span className="px-3 py-1 bg-primary/20 text-primary-700 text-sm font-medium rounded-brand-sm">
                {currentStep.duration}
              </span>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              {currentStep.instruction}
            </p>
            
            {currentStep.tips && (
              <div className="bg-cream/50 rounded-brand p-4">
                <h4 className="font-heading font-semibold text-text-primary mb-2 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={16} />
                  <span>Helpful Tips</span>
                </h4>
                <ul className="space-y-1">
                  {currentStep.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-text-secondary text-sm">
                      <Icon name="Dot" size={12} className="text-primary mt-1 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-brand font-medium transition-gentle ${
                activeStep === 0
                  ? 'bg-surface text-text-secondary cursor-not-allowed' :'bg-primary/10 text-primary-700 hover:bg-primary/20 whisper-ripple'
              }`}
            >
              <Icon name="ChevronLeft" size={16} />
              <span>Previous Step</span>
            </button>

            <button
              onClick={nextStep}
              disabled={activeStep === selectedGuide.steps.length - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-brand font-medium transition-gentle ${
                activeStep === selectedGuide.steps.length - 1
                  ? 'bg-surface text-text-secondary cursor-not-allowed' :'bg-plum text-white hover:shadow-whisper whisper-ripple'
              }`}
            >
              <span>Next Step</span>
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Practice Guides
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Step-by-step instructions for cultural wellness techniques, meditation practices, 
          and healing rituals from traditions around the world.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {practiceGuides.map((guide) => (
          <div
            key={guide.id}
            className="bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg cursor-pointer"
            onClick={() => handleGuideSelect(guide)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 bg-${guide.color}/90 text-white text-sm font-medium rounded-brand-sm`}>
                  {guide.culture}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 bg-${getDifficultyColor(guide.difficulty)}/90 text-white text-sm font-medium rounded-brand-sm`}>
                  {guide.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-full bg-${guide.color}/20 flex items-center justify-center`}>
                  <Icon name={guide.icon} size={20} className={`text-${guide.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-text-primary">
                    {guide.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Clock" size={14} />
                    <span>{guide.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                {guide.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  {guide.steps.length} steps
                </span>
                <div className="flex items-center space-x-1 text-primary-700 font-medium">
                  <span>Start Practice</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cultural Wisdom */}
      <div className="bg-cream/50 rounded-brand p-6 text-center">
        <blockquote className="text-lg font-accent text-text-primary italic mb-2">
          "The body benefits from movement, and the mind benefits from stillness"
        </blockquote>
        <cite className="text-sm text-text-secondary">
          — Ancient Wellness Wisdom
        </cite>
      </div>
    </div>
  );
};

export default PracticeGuides;