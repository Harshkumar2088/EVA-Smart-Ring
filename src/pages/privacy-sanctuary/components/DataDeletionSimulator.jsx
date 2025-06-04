import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const DataDeletionSimulator = () => {
  const [deletionStep, setDeletionStep] = useState(0);
  const [selectedDataTypes, setSelectedDataTypes] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletionProgress, setDeletionProgress] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const dataTypes = [
    {
      id: 'wellness',
      name: 'Wellness Data',
      icon: 'Heart',
      size: '2.4 MB',
      items: 156,
      description: 'Mood tracking, meditation sessions, wellness goals',
      color: 'from-accent to-plum'
    },
    {
      id: 'biometric',
      name: 'Biometric Data',
      icon: 'Activity',
      size: '8.7 MB',
      items: 2847,
      description: 'Heart rate, sleep patterns, stress indicators',
      color: 'from-success to-sage'
    },
    {
      id: 'journal',
      name: 'Journal Entries',
      icon: 'BookOpen',
      size: '1.2 MB',
      items: 89,
      description: 'Personal reflections and cultural insights',
      color: 'from-primary to-secondary'
    },
    {
      id: 'preferences',
      name: 'App Preferences',
      icon: 'Settings',
      size: '0.3 MB',
      items: 45,
      description: 'Cultural settings, notification preferences',
      color: 'from-amber to-warning'
    },
    {
      id: 'usage',
      name: 'Usage Analytics',
      icon: 'BarChart3',
      size: '0.8 MB',
      items: 234,
      description: 'App usage patterns and interaction data',
      color: 'from-secondary to-primary'
    }
  ];

  const deletionSteps = [
    {
      title: 'Select Data Types',
      description: 'Choose which types of data you want to permanently delete',
      icon: 'CheckSquare'
    },
    {
      title: 'Confirm Deletion',
      description: 'Review your selection and confirm permanent deletion',
      icon: 'AlertTriangle'
    },
    {
      title: 'Secure Deletion',
      description: 'Data is being securely removed from all systems',
      icon: 'Trash2'
    },
    {
      title: 'Deletion Complete',
      description: 'Your data has been permanently and securely deleted',
      icon: 'CheckCircle'
    }
  ];

  const toggleDataType = (typeId) => {
    setSelectedDataTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const startDeletion = () => {
    if (selectedDataTypes.length === 0) return;
    
    setDeletionStep(1);
    setShowConfirmation(true);
  };

  const confirmDeletion = () => {
    setShowConfirmation(false);
    setDeletionStep(2);
    setIsDeleting(true);
    setDeletionProgress(0);

    // Simulate deletion progress
    const interval = setInterval(() => {
      setDeletionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDeleting(false);
          setDeletionStep(3);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);
  };

  const resetSimulator = () => {
    setDeletionStep(0);
    setSelectedDataTypes([]);
    setIsDeleting(false);
    setDeletionProgress(0);
    setShowConfirmation(false);
  };

  const selectedData = dataTypes.filter(type => selectedDataTypes.includes(type.id));
  const totalSize = selectedData.reduce((sum, type) => sum + parseFloat(type.size), 0);
  const totalItems = selectedData.reduce((sum, type) => sum + type.items, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Data Deletion Simulator
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Experience how easy and secure it is to permanently delete your data. 
          This simulator shows the exact process you'll go through when managing your data lifecycle.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="bg-background rounded-brand p-6 shadow-gentle">
        <div className="flex items-center justify-between mb-6">
          {deletionSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-whisper ${
                index <= deletionStep 
                  ? 'bg-primary text-white' :'bg-surface text-text-secondary'
              }`}>
                {index < deletionStep ? (
                  <Icon name="Check" size={20} />
                ) : (
                  <Icon name={step.icon} size={20} />
                )}
              </div>
              {index < deletionSteps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-colors ${
                  index < deletionStep ? 'bg-primary' : 'bg-surface'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
            {deletionSteps[deletionStep].title}
          </h3>
          <p className="text-text-secondary">
            {deletionSteps[deletionStep].description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      {deletionStep === 0 && (
        <div className="bg-surface/50 rounded-brand p-8">
          <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
            Select Data Types to Delete
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {dataTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => toggleDataType(type.id)}
                className={`p-4 rounded-brand transition-whisper whisper-ripple text-left ${
                  selectedDataTypes.includes(type.id)
                    ? 'bg-background shadow-gentle-lg border-2 border-error/30'
                    : 'bg-background hover:shadow-gentle'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center`}>
                    <Icon name={type.icon} size={20} className="text-white" />
                  </div>
                  <div className={`w-5 h-5 rounded border-2 transition-colors ${
                    selectedDataTypes.includes(type.id)
                      ? 'bg-error border-error' :'border-surface'
                  }`}>
                    {selectedDataTypes.includes(type.id) && (
                      <Icon name="Check" size={12} className="text-white" />
                    )}
                  </div>
                </div>
                
                <h4 className="font-heading font-semibold text-text-primary mb-1">
                  {type.name}
                </h4>
                <p className="text-sm text-text-secondary mb-2">
                  {type.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{type.items} items</span>
                  <span>{type.size}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selection Summary */}
          {selectedDataTypes.length > 0 && (
            <div className="bg-background rounded-brand p-6 shadow-gentle mb-6">
              <h4 className="font-heading font-semibold text-text-primary mb-4">
                Deletion Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-surface rounded-brand-sm">
                  <div className="text-2xl font-heading font-semibold text-error">
                    {selectedDataTypes.length}
                  </div>
                  <div className="text-sm text-text-secondary">Data Types</div>
                </div>
                <div className="text-center p-3 bg-surface rounded-brand-sm">
                  <div className="text-2xl font-heading font-semibold text-error">
                    {totalItems}
                  </div>
                  <div className="text-sm text-text-secondary">Total Items</div>
                </div>
                <div className="text-center p-3 bg-surface rounded-brand-sm">
                  <div className="text-2xl font-heading font-semibold text-error">
                    {totalSize.toFixed(1)} MB
                  </div>
                  <div className="text-sm text-text-secondary">Total Size</div>
                </div>
              </div>
              
              <div className="bg-error/10 border border-error/20 rounded-brand p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="AlertTriangle" size={16} className="text-error" />
                  <span className="font-heading font-semibold text-error">Warning</span>
                </div>
                <p className="text-sm text-text-secondary">
                  This action cannot be undone. Selected data will be permanently deleted 
                  from all systems and cannot be recovered.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={startDeletion}
              disabled={selectedDataTypes.length === 0}
              className={`px-8 py-3 rounded-brand font-heading font-medium transition-whisper ${
                selectedDataTypes.length > 0
                  ? 'bg-error text-white hover:shadow-gentle whisper-ripple'
                  : 'bg-surface text-text-secondary cursor-not-allowed'
              }`}
            >
              Proceed to Confirmation
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-gentle flex items-center justify-center z-50">
          <div className="bg-background rounded-brand p-8 shadow-gentle-lg max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertTriangle" size={32} className="text-error" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
                Confirm Deletion
              </h3>
              <p className="text-text-secondary">
                Are you absolutely sure you want to permanently delete the selected data?
              </p>
            </div>

            <div className="bg-surface rounded-brand p-4 mb-6">
              <h4 className="font-heading font-semibold text-text-primary mb-2">
                Data to be deleted:
              </h4>
              <ul className="space-y-1">
                {selectedData.map((type) => (
                  <li key={type.id} className="text-sm text-text-secondary">
                    • {type.name} ({type.items} items, {type.size})
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-3 bg-surface text-text-secondary rounded-brand transition-whisper hover:bg-cream/50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeletion}
                className="flex-1 px-4 py-3 bg-error text-white rounded-brand transition-whisper hover:shadow-gentle"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deletion Progress */}
      {deletionStep === 2 && (
        <div className="bg-surface/50 rounded-brand p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-error to-warning rounded-full flex items-center justify-center mx-auto mb-4 breathing">
              <Icon name="Trash2" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
              Securely Deleting Data
            </h3>
            <p className="text-text-secondary">
              Your data is being permanently removed from all systems using secure deletion protocols.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-background rounded-brand p-6 shadow-gentle">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading font-semibold text-text-primary">Progress</span>
                <span className="text-text-secondary">{Math.round(deletionProgress)}%</span>
              </div>
              
              <div className="w-full bg-surface rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-error to-warning h-3 rounded-full transition-all duration-500"
                  style={{ width: `${deletionProgress}%` }}
                ></div>
              </div>

              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Removing data from active systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>Clearing backup systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  {deletionProgress > 80 ? (
                    <Icon name="Check" size={14} className="text-success" />
                  ) : (
                    <div className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span>Cryptographic verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Deletion Complete */}
      {deletionStep === 3 && (
        <div className="bg-surface/50 rounded-brand p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center mx-auto mb-4 breathing">
              <Icon name="CheckCircle" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-2">
              Deletion Complete
            </h3>
            <p className="text-text-secondary">
              Your selected data has been permanently and securely deleted from all systems.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="bg-background rounded-brand p-6 shadow-gentle">
              <h4 className="font-heading font-semibold text-text-primary mb-4">
                Deletion Certificate
              </h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Deletion ID:</span>
                  <span className="text-text-primary font-mono">DEL-{Date.now().toString(36).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Timestamp:</span>
                  <span className="text-text-primary">{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Data Types:</span>
                  <span className="text-text-primary">{selectedDataTypes.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Items:</span>
                  <span className="text-text-primary">{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Verification:</span>
                  <span className="text-success font-medium">Cryptographically Verified</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} className="text-success" />
                  <span className="text-sm text-success font-medium">
                    Deletion verified and irreversible
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={resetSimulator}
              className="px-6 py-3 bg-primary text-white rounded-brand transition-whisper whisper-ripple hover:shadow-gentle"
            >
              Try Another Deletion
            </button>
            <button className="px-6 py-3 bg-surface text-text-secondary rounded-brand transition-whisper hover:bg-cream/50">
              Download Certificate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataDeletionSimulator;