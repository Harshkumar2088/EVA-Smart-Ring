import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CulturalChampions = ({ champions }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-text-primary mb-4">
            Cultural Wellness Champions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Meet the community advocates who are bridging traditional wisdom 
            with modern wellness technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {champions.map((champion) => (
            <div
              key={champion.id}
              className="bg-surface/80 backdrop-blur-gentle rounded-brand shadow-gentle overflow-hidden transition-whisper hover:shadow-gentle-lg hover:scale-105 breathing"
            >
              {/* Champion Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={champion.avatar}
                  alt={champion.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Cultural Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {champion.culture}
                  </div>
                </div>
              </div>

              {/* Champion Info */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-1">
                  {champion.name}
                </h3>
                <p className="text-sm text-primary-700 font-medium mb-3">
                  {champion.title}
                </p>
                
                {/* Impact Metric */}
                <div className="flex items-center space-x-2 mb-4 p-3 bg-accent/10 rounded-brand-sm">
                  <Icon name="TrendingUp" size={16} className="text-accent" />
                  <span className="text-sm text-accent font-medium">
                    {champion.impact}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary italic text-sm leading-relaxed mb-4">
                  "{champion.quote}"
                </blockquote>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 text-primary-700 rounded-brand-sm transition-gentle hover:bg-primary/20">
                    <Icon name="MessageCircle" size={14} />
                    <span className="text-sm font-medium">Connect</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary/10 text-secondary-700 rounded-brand-sm transition-gentle hover:bg-secondary/20">
                    <Icon name="BookOpen" size={14} />
                    <span className="text-sm font-medium">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Champion CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-brand p-8 max-w-2xl mx-auto">
            <Icon name="Star" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              Become a Cultural Wellness Champion
            </h3>
            <p className="text-text-secondary mb-6">
              Share your expertise and help others discover the power of culturally-aware wellness technology.
            </p>
            <button className="px-8 py-4 bg-plum text-white font-heading font-medium rounded-brand transition-whisper whisper-ripple hover:shadow-whisper hover:scale-105">
              Apply to be a Champion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalChampions;