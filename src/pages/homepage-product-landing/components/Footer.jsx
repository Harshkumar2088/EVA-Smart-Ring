import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '/product-details-pre-order' },
      { label: 'Specifications', href: '/product-details-pre-order' },
      { label: 'Pricing', href: '/product-details-pre-order' },
      { label: 'Pre-Order', href: '/product-details-pre-order' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' }
  ];

  const contactInfo = [
    { icon: 'Mail', text: 'mdoffice@dkgrouplabs.com' },
    { icon: 'Phone', text: '+91-9810805605' },
    { icon: 'MapPin', text: '201C/6, 2nd floor, D-21 Corporate Park, New Delhi – 110077' }
  ];

  return (
    <footer className="bg-text-primary text-text-inverse">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage-product-landing" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-organic flex items-center justify-center">
                <Icon name="Heart" size={24} color="white" />
              </div>
              <span className="font-heading font-semibold text-xl">
                SmartRing
              </span>
            </Link>
            
            <p className="font-body text-gray-300 mb-6 leading-relaxed">
              Transforming emotional intelligence through innovative wearable technology. Join thousands of users on their journey to better mental wellness and self-awareness.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name={contact.icon} size={16} color="#9CA3AF" />
                  <span className="font-body text-gray-300 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-body text-gray-300 hover:text-white gentle-transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-gray-300 hover:text-white gentle-transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-gray-300 hover:text-white gentle-transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-gray-300 hover:text-white gentle-transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="font-body text-gray-300 text-sm">
                Get the latest wellness insights and product updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-organic text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition font-body"
              />
              <button className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-text-inverse rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600">
                <Icon name="Send" size={16} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="font-body text-gray-300 text-sm">
              © {currentYear} WellnessRing. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-organic flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 gentle-transition haptic-feedback"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-organic">
                <Icon name="Shield" size={14} color="#10B981" />
                <span className="font-body text-gray-300 text-xs">SSL Secured</span>
              </div>
              {/* <div className="flex items-center space-x-2 px-3 py-1 bg-gray-800 rounded-organic">
                <Icon name="Award" size={14} color="#F59E0B" />
                <span className="font-body text-gray-300 text-xs">FDA Approved</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;