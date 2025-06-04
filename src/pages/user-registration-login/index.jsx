import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const UserRegistrationLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    wellnessGoals: []
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Mock credentials for demonstration
  const mockCredentials = {
    email: 'user@wellnessring.com',
    password: 'wellness123'
  };

  const wellnessGoalOptions = [
    { id: 'stress', label: 'Stress Management', icon: 'Brain' },
    { id: 'sleep', label: 'Better Sleep', icon: 'Moon' },
    { id: 'mindfulness', label: 'Mindfulness Practice', icon: 'Heart' },
    { id: 'emotional', label: 'Emotional Balance', icon: 'Smile' },
    { id: 'productivity', label: 'Enhanced Focus', icon: 'Target' },
    { id: 'relationships', label: 'Better Relationships', icon: 'Users' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleWellnessGoalToggle = (goalId) => {
    setFormData(prev => ({
      ...prev,
      wellnessGoals: prev.wellnessGoals.includes(goalId)
        ? prev.wellnessGoals.filter(id => id !== goalId)
        : [...prev.wellnessGoals, goalId]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, label: '', color: '' };
    if (password.length < 6) return { strength: 25, label: 'Weak', color: 'bg-error' };
    if (password.length < 8) return { strength: 50, label: 'Fair', color: 'bg-warning' };
    if (password.length < 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return { strength: 75, label: 'Good', color: 'bg-secondary' };
    }
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      return { strength: 100, label: 'Strong', color: 'bg-success' };
    }
    return { strength: 60, label: 'Fair', color: 'bg-warning' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (isLogin) {
        // Check mock credentials
        if (formData.email === mockCredentials.email && formData.password === mockCredentials.password) {
          navigate('/user-dashboard-wellness-overview');
        } else {
          setErrors({
            submit: `Invalid credentials. Use email: ${mockCredentials.email} and password: ${mockCredentials.password}`
          });
        }
      } else {
        // Registration success
        navigate('/user-dashboard-wellness-overview');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialAuth = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/user-dashboard-wellness-overview');
    }, 1000);
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      <div className="min-h-screen flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md w-full space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-organic flex items-center justify-center">
                <Icon name="Heart" size={32} color="white" />
              </div>
              <h1 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-2">
                {isLogin ? 'Welcome Back' : 'Join WellnessRing'}
              </h1>
              <p className="font-body text-text-secondary">
                {isLogin 
                  ? 'Sign in to access your wellness dashboard' :'Start your journey to emotional wellness'
                }
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-surface rounded-organic p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-organic font-body font-medium gentle-transition ${
                  isLogin 
                    ? 'bg-background text-text-primary shadow-soft-elevation-1' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-organic font-body font-medium gentle-transition ${
                  !isLogin 
                    ? 'bg-background text-text-primary shadow-soft-elevation-1' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Social Authentication */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialAuth('google')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-border rounded-organic font-body font-medium text-text-primary gentle-transition haptic-feedback hover:bg-surface disabled:opacity-50"
              >
                <Icon name="Chrome" size={20} />
                <span>Continue with Google</span>
              </button>
              <button
                onClick={() => handleSocialAuth('apple')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-border rounded-organic font-body font-medium text-text-primary gentle-transition haptic-feedback hover:bg-surface disabled:opacity-50"
              >
                <Icon name="Apple" size={20} />
                <span>Continue with Apple</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-text-secondary font-body">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Registration Fields */}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-text-secondary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition ${
                        errors.firstName ? 'border-error' : 'border-border'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-error">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-text-secondary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition ${
                        errors.lastName ? 'border-error' : 'border-border'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-error">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-body font-medium text-text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition ${
                    errors.email ? 'border-error' : 'border-border'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-error">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-body font-medium text-text-secondary mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition ${
                      errors.password ? 'border-error' : 'border-border'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary gentle-transition"
                  >
                    <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-error">{errors.password}</p>
                )}
                
                {/* Password Strength Indicator */}
                {!isLogin && formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-surface rounded-full h-2">
                        <div
                          className={`h-2 rounded-full gentle-transition ${passwordStrength.color}`}
                          style={{ width: `${passwordStrength.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-body text-text-secondary">
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-body font-medium text-text-secondary mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 pr-12 border rounded-organic focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent gentle-transition ${
                        errors.confirmPassword ? 'border-error' : 'border-border'
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary gentle-transition"
                    >
                      <Icon name={showConfirmPassword ? 'EyeOff' : 'Eye'} size={20} />
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-error">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Wellness Goals */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-body font-medium text-text-secondary mb-3">
                    Wellness Goals (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {wellnessGoalOptions.map((goal) => (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => handleWellnessGoalToggle(goal.id)}
                        className={`flex items-center space-x-2 p-3 border rounded-organic gentle-transition haptic-feedback ${
                          formData.wellnessGoals.includes(goal.id)
                            ? 'border-primary bg-primary-50 text-primary-700' :'border-border hover:border-primary-300 hover:bg-surface'
                        }`}
                      >
                        <Icon 
                          name={goal.icon} 
                          size={16} 
                          className={formData.wellnessGoals.includes(goal.id) ? 'text-primary-600' : 'text-text-secondary'}
                        />
                        <span className="text-sm font-body">{goal.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="ml-2 text-sm font-body text-text-secondary">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-body text-primary hover:text-primary-600 gentle-transition"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-error-light border border-error rounded-organic">
                  <p className="text-sm text-error">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-text-inverse rounded-organic font-body font-medium gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" size={20} className="animate-spin" />
                    <span>{isLogin ? 'Signing In...' : 'Creating Account...'}</span>
                  </>
                ) : (
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                )}
              </button>
            </form>

            {/* Footer Links */}
            <div className="text-center space-y-2">
              <p className="text-sm font-body text-text-secondary">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:text-primary-600 gentle-transition font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-xs text-text-tertiary">
                <Link to="/privacy-policy" className="hover:text-text-secondary gentle-transition">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms-of-service" className="hover:text-text-secondary gentle-transition">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-2 text-xs text-text-tertiary">
              <Icon name="Shield" size={16} />
              <span>Your data is protected with enterprise-grade security</span>
            </div>
          </div>
        </div>

        {/* Right Side - Wellness Image (Desktop Only) */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="flex-1 flex items-center justify-center p-12">
            <div className="max-w-lg text-center">
              <div className="mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Person meditating in peaceful environment"
                  className="w-full h-96 object-cover rounded-organic-lg shadow-soft-elevation-2"
                />
              </div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Transform Your Wellness Journey
              </h2>
              <p className="font-body text-text-secondary leading-relaxed">
                Join thousands of users who have discovered the power of emotional intelligence through our innovative wellness ring technology. Track your emotions, improve your mindfulness, and achieve better mental health.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-primary-100 rounded-organic flex items-center justify-center">
                    <Icon name="Heart" size={24} color="#4A90A4" />
                  </div>
                  <p className="text-sm font-body text-text-secondary">Emotion Tracking</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-secondary-100 rounded-organic flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="#7B9E87" />
                  </div>
                  <p className="text-sm font-body text-text-secondary">Progress Insights</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-accent-100 rounded-organic flex items-center justify-center">
                    <Icon name="Target" size={24} color="#E8B86D" />
                  </div>
                  <p className="text-sm font-body text-text-secondary">Goal Achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationLogin;