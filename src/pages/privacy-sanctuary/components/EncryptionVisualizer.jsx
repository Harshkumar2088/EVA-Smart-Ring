import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const EncryptionVisualizer = () => {
  const [selectedEncryption, setSelectedEncryption] = useState('aes256');
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [encryptionProgress, setEncryptionProgress] = useState(0);
  const [sampleData, setSampleData] = useState('');
  const [encryptedData, setEncryptedData] = useState('');

  const encryptionTypes = [
    {
      id: 'aes256',
      name: 'AES-256',
      strength: 'Military Grade',
      description: 'Advanced Encryption Standard with 256-bit keys',
      keyLength: 256,
      blockSize: 128,
      rounds: 14,
      crackTime: '2^256 years',
      color: 'from-success to-sage',
      icon: 'Shield'
    },
    {
      id: 'rsa4096',
      name: 'RSA-4096',
      strength: 'Ultra Secure',
      description: 'Rivest-Shamir-Adleman with 4096-bit keys',
      keyLength: 4096,
      blockSize: 512,
      rounds: 'N/A',
      crackTime: '2^4096 years',
      color: 'from-primary to-secondary',
      icon: 'Lock'
    },
    {
      id: 'ecc521',
      name: 'ECC P-521',
      strength: 'Quantum Resistant',
      description: 'Elliptic Curve Cryptography with 521-bit curves',
      keyLength: 521,
      blockSize: 'Variable',
      rounds: 'N/A',
      crackTime: '2^260 years',
      color: 'from-accent to-plum',
      icon: 'Zap'
    }
  ];

  const encryptionLayers = [
    {
      name: 'Device Encryption',
      description: 'Data encrypted on your device before transmission',
      status: 'active',
      strength: 'AES-256',
      icon: 'Smartphone'
    },
    {
      name: 'Transport Encryption',
      description: 'Secure transmission using TLS 1.3',
      status: 'active',
      strength: 'TLS 1.3',
      icon: 'Wifi'
    },
    {
      name: 'Server Encryption',
      description: 'Additional encryption layer on our servers',
      status: 'active',
      strength: 'AES-256',
      icon: 'Server'
    },
    {
      name: 'Storage Encryption',
      description: 'Encrypted at rest in distributed storage',
      status: 'active',
      strength: 'AES-256',
      icon: 'Database'
    },
    {
      name: 'Cultural Privacy Layer',
      description: 'Additional protection based on cultural requirements',
      status: 'active',
      strength: 'Custom',
      icon: 'Globe'
    }
  ];

  const sampleTexts = [
    "Today I felt peaceful during my morning meditation. The breathing exercises helped center my mind.",
    "Heart rate: 72 bpm, Sleep: 7.5 hours, Stress level: Low, Activity: 8,500 steps",
    "Cultural wellness practice: Tea ceremony brought mindfulness and connection to ancestors.",
    "Mood: Grateful, Energy: High, Wellness goal: Continue daily meditation practice"
  ];

  const currentEncryption = encryptionTypes.find(type => type.id === selectedEncryption);

  useEffect(() => {
    setSampleData(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
  }, []);

  const simulateEncryption = () => {
    setIsEncrypting(true);
    setEncryptionProgress(0);
    setEncryptedData('');

    const interval = setInterval(() => {
      setEncryptionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsEncrypting(false);
          // Generate mock encrypted data
          const encrypted = btoa(sampleData).split('').map(char => 
            Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
          ).join('') + '==';
          setEncryptedData(encrypted);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
  };

  const generateNewSample = () => {
    setSampleData(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
    setEncryptedData('');
    setEncryptionProgress(0);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Encryption Strength Visualizer
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Explore the multiple layers of encryption protecting your wellness data. 
          See how military-grade security keeps your personal information safe.
        </p>
      </div>

      {/* Encryption Type Selector */}
      <div className="bg-background rounded-brand p-8 shadow-gentle">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
          Encryption Standards
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {encryptionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedEncryption(type.id)}
              className={`p-4 rounded-brand transition-whisper whisper-ripple text-left ${
                selectedEncryption === type.id
                  ? 'bg-surface shadow-gentle-lg border-2 border-primary/30'
                  : 'bg-surface/50 hover:bg-surface hover:shadow-gentle'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center ${
                  selectedEncryption === type.id ? 'breathing' : ''
                }`}>
                  <Icon name={type.icon} size={20} className="text-white" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-brand-sm ${
                  type.strength === 'Military Grade' ? 'bg-success/20 text-success' :
                  type.strength === 'Ultra Secure'? 'bg-primary/20 text-primary-600' : 'bg-accent/20 text-accent'
                }`}>
                  {type.strength}
                </span>
              </div>
              
              <h4 className="font-heading font-semibold text-text-primary mb-1">
                {type.name}
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                {type.description}
              </p>
              
              <div className="space-y-1 text-xs text-text-secondary">
                <div className="flex justify-between">
                  <span>Key Length:</span>
                  <span className="font-medium">{type.keyLength} bits</span>
                </div>
                <div className="flex justify-between">
                  <span>Crack Time:</span>
                  <span className="font-medium">{type.crackTime}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Encryption Details */}
        <div className="bg-surface/50 rounded-brand p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${currentEncryption.color} rounded-full flex items-center justify-center breathing`}>
              <Icon name={currentEncryption.icon} size={24} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-heading font-semibold text-text-primary">
                {currentEncryption.name} Encryption
              </h4>
              <p className="text-text-secondary">{currentEncryption.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-background rounded-brand-sm">
              <div className="text-lg font-heading font-semibold text-text-primary">
                {currentEncryption.keyLength}
              </div>
              <div className="text-sm text-text-secondary">Key Length (bits)</div>
            </div>
            <div className="text-center p-3 bg-background rounded-brand-sm">
              <div className="text-lg font-heading font-semibold text-text-primary">
                {currentEncryption.blockSize}
              </div>
              <div className="text-sm text-text-secondary">Block Size (bits)</div>
            </div>
            <div className="text-center p-3 bg-background rounded-brand-sm">
              <div className="text-lg font-heading font-semibold text-text-primary">
                {currentEncryption.rounds}
              </div>
              <div className="text-sm text-text-secondary">Encryption Rounds</div>
            </div>
            <div className="text-center p-3 bg-background rounded-brand-sm">
              <div className="text-lg font-heading font-semibold text-success">
                Unbreakable
              </div>
              <div className="text-sm text-text-secondary">Security Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Encryption Layers Visualization */}
      <div className="bg-surface/50 rounded-brand p-8">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
          Multi-Layer Protection
        </h3>
        
        <div className="space-y-4">
          {encryptionLayers.map((layer, index) => (
            <div
              key={index}
              className="bg-background rounded-brand p-4 shadow-gentle transition-whisper hover:shadow-gentle-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Icon name={layer.icon} size={20} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-heading font-semibold text-text-primary">
                      {layer.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-success">
                      <div className="w-2 h-2 bg-success rounded-full animate-empathy-pulse"></div>
                      <span className="text-xs font-medium">Active</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">{layer.description}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-text-primary">{layer.strength}</div>
                  <div className="text-xs text-text-secondary">Encryption</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Encryption Demo */}
      <div className="bg-background rounded-brand p-8 shadow-gentle">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
          Interactive Encryption Demo
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Data */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-text-primary">
                Original Wellness Data
              </h4>
              <button
                onClick={generateNewSample}
                className="text-sm text-primary-600 hover:text-primary-700 transition-gentle"
              >
                Generate New Sample
              </button>
            </div>
            
            <div className="bg-surface rounded-brand p-4 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="FileText" size={16} className="text-text-secondary" />
                <span className="text-sm font-medium text-text-secondary">Readable Data</span>
              </div>
              <p className="text-text-primary font-mono text-sm leading-relaxed">
                {sampleData}
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="AlertTriangle" size={14} className="text-warning" />
              <span>Unprotected data is vulnerable to unauthorized access</span>
            </div>
          </div>

          {/* Encrypted Data */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-text-primary">
                Encrypted Data ({currentEncryption.name})
              </h4>
              <button
                onClick={simulateEncryption}
                disabled={isEncrypting}
                className={`px-4 py-2 rounded-brand text-sm font-medium transition-whisper ${
                  isEncrypting
                    ? 'bg-surface text-text-secondary cursor-not-allowed' :'bg-primary text-white hover:shadow-gentle whisper-ripple'
                }`}
              >
                {isEncrypting ? 'Encrypting...' : 'Encrypt Data'}
              </button>
            </div>
            
            <div className="bg-surface rounded-brand p-4 mb-4 min-h-[120px] flex items-center justify-center">
              {isEncrypting ? (
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <div className="text-sm text-text-secondary mb-2">Encrypting data...</div>
                  <div className="w-32 bg-surface rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${encryptionProgress}%` }}
                    ></div>
                  </div>
                </div>
              ) : encryptedData ? (
                <div className="w-full">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Lock" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">Encrypted Data</span>
                  </div>
                  <p className="text-text-primary font-mono text-sm leading-relaxed break-all">
                    {encryptedData}
                  </p>
                </div>
              ) : (
                <div className="text-center text-text-secondary">
                  <Icon name="Lock" size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Click "Encrypt Data" to see the result</p>
                </div>
              )}
            </div>
            
            {encryptedData && (
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="Shield" size={14} />
                <span>Data is now protected with {currentEncryption.name} encryption</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-brand p-6">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Real-Time Security Metrics
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-heading font-semibold text-success mb-1">
              100%
            </div>
            <div className="text-sm text-text-secondary">Data Encrypted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-semibold text-primary-600 mb-1">
              256-bit
            </div>
            <div className="text-sm text-text-secondary">Key Strength</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-semibold text-secondary-600 mb-1">
              0
            </div>
            <div className="text-sm text-text-secondary">Breaches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-semibold text-accent mb-1">
              5
            </div>
            <div className="text-sm text-text-secondary">Security Layers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncryptionVisualizer;