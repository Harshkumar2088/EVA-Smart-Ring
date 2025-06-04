import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ProductFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      id: 1,
      question: 'How accurate is the emotion detection technology?',
      answer: `The WellnessRing Pro uses advanced biometric sensors combined with machine learning algorithms to achieve 94% accuracy in emotion detection. The system analyzes multiple physiological markers including heart rate variability, skin conductance, and body temperature patterns.

The ring learns your personal baseline over the first week of use, which significantly improves accuracy for your individual patterns. Clinical studies have shown consistent results across diverse user groups, making it one of the most reliable consumer emotion tracking devices available.`
    },
    {
      id: 2,
      question: 'What is the battery life and how do I charge it?',
      answer: `The WellnessRing Pro offers up to 7 days of battery life with typical use, including continuous monitoring, sleep tracking, and regular app syncing. Heavy users with frequent notifications and extended workout tracking can expect 5-6 days.

Charging is simple with the included wireless charging dock. Just place the ring on the dock for 2 hours for a full charge. The ring is also compatible with Qi wireless charging pads for convenience when traveling.`
    },
    {
      id: 3,
      question: 'Is the ring waterproof and can I wear it while swimming?',
      answer: `Yes, the WellnessRing Pro has an IP68 rating and is water resistant up to 100 meters (330 feet). You can safely wear it while swimming, showering, or during water sports.

The ring continues to track your heart rate and other metrics during swimming, making it perfect for monitoring your wellness during aquatic activities. However, Bluetooth connectivity may be limited underwater, so data will sync once you're back on the surface.`
    },
    {
      id: 4,
      question: 'How does the sizing work and what if it doesn\'t fit?',
      answer: `We offer four sizes (S, M, L, XL) to accommodate most finger sizes. Each purchase includes a free sizing kit to ensure the perfect fit before your ring ships.

If your ring doesn't fit properly, we offer free size exchanges within 30 days of delivery. The ring should feel snug but comfortable - tight enough that it won't slip off during activities, but loose enough for comfortable all-day wear.`
    },
    {
      id: 5,
      question: 'What smartphones and devices are compatible?',
      answer: `The WellnessRing Pro is compatible with:
• iOS 14.0 or later (iPhone 8 and newer)
• Android 8.0 (API level 26) or later
• Most modern Android devices from major manufacturers

The companion app is available on both App Store and Google Play. You can also access your data through our web dashboard on any modern browser. The ring uses Bluetooth 5.2 for reliable connectivity and low power consumption.`
    },
    {
      id: 6,
      question: 'How does the pre-order process work?',
      answer: `Pre-ordering is simple and secure:

1. Select your size and payment option
2. Complete your order with our secure checkout
3. Receive order confirmation and tracking information
4. Get regular updates on production and shipping timeline
5. Your ring ships in March 2024

You can choose to pay in full, set up a 3-payment installment plan, or place a deposit to reserve your ring. All pre-orders include free shipping and our 30-day satisfaction guarantee.`
    },
    {
      id: 7,
      question: 'What kind of insights and data will I receive?',
      answer: `The WellnessRing Pro provides comprehensive insights including:

• Real-time emotion detection and mood patterns
• Stress level monitoring with personalized alerts
• Sleep quality analysis with REM tracking
• Heart rate variability trends
• Activity and exercise impact on emotional state
• Personalized meditation and breathing recommendations
• Weekly and monthly wellness reports
• Integration with popular health apps

All data is presented in easy-to-understand visualizations with actionable recommendations for improving your emotional wellness.`
    },
    {
      id: 8,
      question: 'Is my health data secure and private?',
      answer: `Absolutely. We take data privacy seriously and follow strict security protocols:

• All data is encrypted both in transit and at rest
• We never sell or share your personal health data
• You have complete control over your data and can delete it anytime
• Our servers are HIPAA-compliant and regularly audited
• Data is stored securely in certified data centers
• You can export your data at any time

We believe your health data belongs to you, and we're committed to keeping it safe and private.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary">
          Frequently Asked Questions
        </h2>
        <button className="flex items-center space-x-2 text-primary hover:text-primary-600 gentle-transition">
          <span className="text-sm font-medium">View All FAQs</span>
          <Icon name="ExternalLink" size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-background border border-border-light rounded-organic overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface gentle-transition haptic-feedback"
            >
              <h3 className="font-body font-semibold text-text-primary pr-4">
                {faq.question}
              </h3>
              <Icon
                name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-text-secondary flex-shrink-0 gentle-transition ${
                  openFAQ === index ? 'text-primary' : ''
                }`}
              />
            </button>
            
            {openFAQ === index && (
              <div className="px-6 pb-4">
                <div className="prose prose-lg max-w-none text-text-secondary border-t border-border-light pt-4">
                  <p className="mb-4">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-12 bg-primary-50 border border-primary-200 rounded-organic-lg p-6 lg:p-8">
        <div className="text-center">
          <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
          <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-6">
            Our wellness experts are here to help you make the right choice for your health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-text-inverse rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600">
              <Icon name="MessageCircle" size={18} />
              <span>Live Chat</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-100">
              <Icon name="Mail" size={18} />
              <span>Email Support</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-100">
              <Icon name="Phone" size={18} />
              <span>Call Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;