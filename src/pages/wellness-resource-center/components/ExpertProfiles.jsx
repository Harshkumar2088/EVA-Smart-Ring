import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ExpertProfiles = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Maya Patel",
      title: "Cultural Wellness Researcher",
      specialization: "Mindfulness & Eastern Traditions",
      culture: "Indian/Universal",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: `Dr. Maya Patel is a leading researcher in cross-cultural mindfulness practices with over 15 years of experience studying how ancient Eastern wisdom can be respectfully integrated with modern wellness technology.

Her work focuses on preserving the spiritual essence of traditional practices while making them accessible to diverse global communities through culturally-sensitive AI applications.`,
      credentials: ["PhD in Cultural Psychology", "Certified Mindfulness Teacher", "Author of 'Digital Dharma'"],
      expertise: ["Mindfulness meditation", "Cultural adaptation of practices", "AI ethics in wellness", "Cross-cultural psychology"],
      languages: ["English", "Hindi", "Sanskrit"],
      contributions: [
        "Developed culturally-adaptive meditation protocols for AI systems",
        "Published 25+ papers on mindfulness and technology integration",
        "Consulted for major wellness apps on cultural sensitivity"
      ],
      quote: "Technology should serve as a bridge to ancient wisdom, not a replacement for it.",
      contact: {
        email: "maya.patel@wellnessresearch.org",
        linkedin: "dr-maya-patel-wellness",
        website: "mayapatelwellness.com"
      },
      color: "amber"
    },
    {
      id: 2,
      name: "Dr. James Crow Feather",
      title: "Indigenous Healing Practitioner",
      specialization: "Traditional Medicine & Community Healing",
      culture: "Native American",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: `Dr. James Crow Feather is a respected Indigenous healer and educator who bridges traditional Native American healing practices with contemporary wellness approaches.

He works to ensure that Indigenous wisdom is honored and protected while exploring how technology can support traditional healing without appropriating or diminishing its sacred nature.`,
      credentials: ["Traditional Healer Certification", "PhD in Indigenous Studies", "Tribal Council Elder"],
      expertise: ["Traditional plant medicine", "Community healing circles", "Sacred ceremony facilitation", "Cultural preservation"],
      languages: ["English", "Lakota", "Cherokee"],
      contributions: [
        "Established protocols for respectful integration of Indigenous practices",
        "Trained over 500 practitioners in traditional healing methods",
        "Advisor to wellness technology companies on Indigenous ethics"
      ],
      quote: "Healing happens in community, and technology must honor this sacred truth.",
      contact: {
        email: "jcrowfeather@indigenouswellness.org",
        website: "traditionalhealing.org"
      },
      color: "sage"
    },
    {
      id: 3,
      name: "Dr. Amara Okafor",
      title: "Community Psychology Specialist",
      specialization: "African Healing Traditions & Mental Health",
      culture: "African",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: `Dr. Amara Okafor specializes in African traditional healing practices and their application to modern mental health challenges. Her research focuses on Ubuntu philosophy and community-centered approaches to wellness.

She advocates for mental health solutions that honor the African understanding of interconnectedness and collective healing, ensuring that technology supports rather than replaces community bonds.`,
      credentials: ["PhD in Community Psychology", "Traditional Healer Training", "WHO Mental Health Advisor"],
      expertise: ["Ubuntu philosophy", "Community healing circles", "Trauma-informed care", "Cultural mental health"],
      languages: ["English", "Yoruba", "Swahili", "French"],
      contributions: [
        "Developed community-based mental health models for African contexts",
        "Published extensively on Ubuntu and collective healing",
        "Consulted for international mental health organizations"
      ],
      quote: "I am because we are - healing is always a community endeavor.",
      contact: {
        email: "amara.okafor@communityhealing.org",
        linkedin: "dr-amara-okafor",
        website: "ubuntuwellness.org"
      },
      color: "accent"
    },
    {
      id: 4,
      name: "Dr. Kenji Tanaka",
      title: "Forest Therapy Guide",
      specialization: "Shinrin-yoku & Nature-Based Healing",
      culture: "Japanese",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: `Dr. Kenji Tanaka is a certified Forest Therapy Guide and researcher who has dedicated his career to studying and teaching Shinrin-yoku (forest bathing) and its profound effects on human wellbeing.

His work explores how technology can enhance our connection to nature rather than separate us from it, developing innovative ways to bring forest therapy principles into urban environments.`,
      credentials: ["Certified Forest Therapy Guide", "PhD in Environmental Psychology", "Shinrin-yoku Instructor"],
      expertise: ["Forest bathing", "Nature-based therapy", "Environmental psychology", "Mindful nature connection"],
      languages: ["Japanese", "English", "Mandarin"],
      contributions: [
        "Trained over 1000 forest therapy guides worldwide",
        "Developed urban forest bathing programs",
        "Research on forest therapy's impact on immune system"
      ],
      quote: "The forest is our greatest teacher of presence and interconnection.",
      contact: {
        email: "kenji.tanaka@foresttherapy.jp",
        website: "shinrinyoku-guide.com"
      },
      color: "sage"
    }
  ];

  const handleExpertSelect = (expert) => {
    setSelectedExpert(selectedExpert?.id === expert.id ? null : expert);
  };

  return (
    <section className="py-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
            Expert Contributors
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Meet the cultural wellness experts, traditional healers, and researchers 
            who contribute their wisdom to our resource center.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className={`bg-background rounded-brand shadow-gentle overflow-hidden whisper-ripple transition-whisper hover:shadow-gentle-lg cursor-pointer ${
                selectedExpert?.id === expert.id ? 'ring-2 ring-primary/30' : ''
              }`}
              onClick={() => handleExpertSelect(expert)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-${expert.color} rounded-full flex items-center justify-center`}>
                      <Icon name="Star" size={12} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-primary-700 font-medium mb-1">
                      {expert.title}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="Globe" size={14} />
                        <span>{expert.culture}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Award" size={14} />
                        <span>{expert.specialization}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-4">
                  {expert.bio}
                </p>

                {selectedExpert?.id === expert.id && (
                  <div className="space-y-6 border-t border-primary/10 pt-6">
                    {/* Credentials */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Award" size={16} />
                        <span>Credentials</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.credentials.map((credential, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary-700 text-sm rounded-brand-sm">
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Brain" size={16} />
                        <span>Areas of Expertise</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {expert.expertise.map((area, index) => (
                          <div key={index} className="flex items-center space-x-2 text-text-secondary text-sm">
                            <Icon name="CheckCircle" size={12} className="text-sage" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="MessageCircle" size={16} />
                        <span>Languages</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.languages.map((language, index) => (
                          <span key={index} className="px-2 py-1 bg-surface text-text-secondary text-sm rounded-brand-sm">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Contributions */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Star" size={16} />
                        <span>Key Contributions</span>
                      </h4>
                      <ul className="space-y-2">
                        {expert.contributions.map((contribution, index) => (
                          <li key={index} className="flex items-start space-x-2 text-text-secondary text-sm">
                            <Icon name="Dot" size={12} className="text-primary mt-1 flex-shrink-0" />
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <div className="bg-cream/50 rounded-brand p-4">
                      <blockquote className="text-text-primary italic mb-2">
                        "{expert.quote}"
                      </blockquote>
                      <cite className="text-sm text-text-secondary">
                        — {expert.name}
                      </cite>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h4 className="font-heading font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Mail" size={16} />
                        <span>Connect</span>
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {expert.contact.email && (
                          <a
                            href={`mailto:${expert.contact.email}`}
                            className="flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-gentle"
                          >
                            <Icon name="Mail" size={16} />
                            <span className="text-sm">Email</span>
                          </a>
                        )}
                        {expert.contact.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${expert.contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-gentle"
                          >
                            <Icon name="Linkedin" size={16} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        )}
                        {expert.contact.website && (
                          <a
                            href={`https://${expert.contact.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-gentle"
                          >
                            <Icon name="Globe" size={16} />
                            <span className="text-sm">Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/10">
                  <div className="text-sm text-text-secondary">
                    Click to {selectedExpert?.id === expert.id ? 'collapse' : 'expand'} profile
                  </div>
                  <Icon 
                    name={selectedExpert?.id === expert.id ? 'ChevronUp' : 'ChevronDown'} 
                    size={16} 
                    className="text-text-secondary" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-background rounded-brand p-8 shadow-gentle">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              Become a Contributing Expert
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Share your cultural wellness expertise with our global community. 
              We welcome practitioners, researchers, and healers from all traditions.
            </p>
            <button className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper breathing">
              Apply to Contribute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfiles;