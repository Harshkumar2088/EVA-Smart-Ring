import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
  //  import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cartItemCount] = useState(2);
  const location = useLocation();
  const navigate = useNavigate();
  

  const navigationItems = [
    { label: 'Home', path: '/homepage-product-landing', icon: 'Home' },
    { label: 'Dashboard', path: '/user-dashboard-wellness-overview', icon: 'LayoutDashboard' },
    { label: 'How It Works', path: '/how-it-works', icon: 'Sparkles' },
    { label: 'Privacy Sanctuary', path: '/privacy-sanctuary', icon: 'Shield' },
    // { label: 'Wellness Center', path: '/wellness-resource-center', icon: 'Heart' },
    // { label: 'Community Stories', path: '/community-stories', icon: 'Users' },
    { label: 'Research Hub', path: '/research-hub', icon: 'BookOpen' },
    { label: 'Product', path: '/product-details-pre-order', icon: 'Package' },
    
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleAuthModal = () => {


    setIsAuthModalOpen(!isAuthModalOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-1000 bg-background border-b border-border-light">
        <div className="max-w-14xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/homepage-product-landing" className="flex items-center space-x-2 haptic-feedback">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-secondary rounded-organic flex items-center justify-center">
                <Icon name="Circle" size={20} color="white" className="lg:w-6 lg:h-6" />
              </div>
              <span className="font-heading font-semibold text-lg lg:text-xl text-text-primary">
                SmartRing
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-2 py-1 rounded-organic gentle-transition haptic-feedback ${
                    isActivePath(item.path)
                      ? 'bg-primary-100 text-primary-700' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-body font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleCart}
                className="relative p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-text-inverse text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              {/* <button
                onClick={toggleAuthModal}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600"
              >
                <Icon name="User" size={18} />
                <span className="font-body font-medium">Register</span>
              </button> */}
           

<Link
  to="/registration"
  className="flex items-center space-x-2 px-4 py-2 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600"
>
  <Icon name="User" size={18} />
  <span className="font-body font-medium">Register</span>
</Link>

            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleCart}
                className="relative p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-text-inverse text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-1200 bg-background">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border-light">
                <Link to="/homepage-product-landing" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-organic flex items-center justify-center">
                    <Icon name="Heart" size={20} color="white" />
                  </div>
                  <span className="font-heading font-semibold text-lg text-text-primary">
                    WellnessRing
                  </span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <nav className="flex-1 px-4 py-6 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-organic gentle-transition haptic-feedback ${
                      isActivePath(item.path)
                        ? 'bg-primary-100 text-primary-700' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span className="font-body font-medium text-lg">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-border-light">
                <button
                  onClick={() => {
                    toggleAuthModal();
                    closeMobileMenu();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-primary-600"
                >
                  <Icon name="User" size={20} />
                  <span className="font-body font-medium">Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-1100 bg-black bg-opacity-50 fade-in" onClick={toggleCart}>
          <div 
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-soft-lg slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border-light">
                <h2 className="font-heading font-semibold text-xl text-text-primary">My WishList</h2>
                <button
                  onClick={toggleCart}
                  className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
                >
                  <Icon name="Heart" size={20} />
                </button>
              </div>
              
              <div className="flex-1 p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-surface rounded-organic">
                    <div className="w-16 h-16 bg-primary-100 rounded-organic flex items-center justify-center">
                      <Icon name="Package" size={24} color="#4A90A4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-body font-medium text-text-primary">SmartRing </h3>
                      <p className="text-sm text-text-secondary">Quantity: 1</p>
                      <p className="font-semibold text-accent">INR 3499</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border-light">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body font-medium text-text-primary">Total:</span>
                  <span className="font-heading font-semibold text-xl text-text-primary">INR 3499</span>
                </div>
                <button
                  className="w-full bg-primary text-text-inverse py-3 rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600"
                  onClick={() => {
                    closeMobileMenu && closeMobileMenu();
                    setIsCartOpen(false); // Close wishlist/cart overlay
                    navigate('/order-now');
                  }}
                >
                  Proceed To Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Authentication Modal */}
      
{/* {isAuthModalOpen && (
  <div
    className="fixed inset-0 z-1100 bg-black bg-opacity-50 flex items-center justify-center p-4 fade-in"
    onClick={toggleAuthModal}
  >
    <div
      className="bg-background rounded-organic-lg shadow-soft-lg w-full max-w-md slide-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-semibold text-xl text-text-primary">Welcome Back</h2>
          <button
            onClick={toggleAuthModal}
            className="p-2 text-text-secondary hover:text-text-primary gentle-transition haptic-feedback rounded-organic hover:bg-surface"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-caption text-text-secondary mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-caption text-text-secondary mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-caption text-text-secondary mb-2">Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              className="w-full px-4 py-3 border border-border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition"
              placeholder="Enter your mobile number"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-text-inverse py-3 rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            Don't have an account?{' '}
            <Link
              to="/registration"
              className="text-primary hover:text-primary-600 gentle-transition"
              onClick={toggleAuthModal}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div> */}
{/* )} */}

    </>
  );
};

export default Header;