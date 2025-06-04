import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const TransparencyReports = ({ certifications }) => {
  const [selectedReport, setSelectedReport] = useState('security');
  const [liveMetrics, setLiveMetrics] = useState({
    encryptionStatus: 100,
    systemUptime: 99.98,
    dataRequests: 0,
    securityIncidents: 0,
    lastAudit: new Date().toISOString().split('T')[0]
  });

  const reportTypes = [
    {
      id: 'security',
      name: 'Security Audits',
      icon: 'Shield',
      color: 'text-success',
      description: 'Third-party security assessments and penetration testing results'
    },
    {
      id: 'privacy',
      name: 'Privacy Compliance',
      icon: 'Lock',
      color: 'text-primary-600',
      description: 'GDPR, CCPA, and regional privacy law compliance reports'
    },
    {
      id: 'data',
      name: 'Data Handling',
      icon: 'Database',
      color: 'text-secondary-600',
      description: 'Data processing, storage, and deletion transparency reports'
    },
    {
      id: 'incidents',
      name: 'Incident Reports',
      icon: 'AlertTriangle',
      color: 'text-warning',
      description: 'Security incidents, breaches, and response actions'
    }
  ];

  const securityMetrics = [
    {
      name: 'Data Encryption',
      value: liveMetrics.encryptionStatus,
      unit: '%',
      status: 'excellent',
      description: 'All data encrypted with AES-256'
    },
    {
      name: 'System Uptime',
      value: liveMetrics.systemUptime,
      unit: '%',
      status: 'excellent',
      description: '99.9% uptime SLA maintained'
    },
    {
      name: 'Security Incidents',
      value: liveMetrics.securityIncidents,
      unit: '',
      status: 'excellent',
      description: 'Zero critical incidents this quarter'
    },
    {
      name: 'Data Requests',
      value: liveMetrics.dataRequests,
      unit: '',
      status: 'excellent',
      description: 'Government/legal data requests'
    }
  ];

  const auditResults = [
    {
      auditor: 'CyberSec Solutions',
      type: 'Penetration Testing',
      date: '2024-01-15',
      score: 'A+',
      status: 'Passed',
      findings: 'No critical vulnerabilities found',
      details: `Comprehensive penetration testing conducted over 2 weeks:
• Network security assessment
• Application security testing
• Social engineering resistance
• Physical security evaluation

Results: All systems demonstrated robust security posture with no critical or high-risk vulnerabilities identified.`
    },
    {
      auditor: 'Privacy Compliance Corp',
      type: 'GDPR Compliance Audit',
      date: '2024-01-10',
      score: '98/100',
      status: 'Certified',
      findings: 'Full GDPR compliance achieved',
      details: `Detailed GDPR compliance assessment covering:
• Data processing lawfulness
• Consent mechanisms
• Data subject rights implementation
• Privacy by design principles
• Data protection impact assessments

Results: Exceeds GDPR requirements with innovative privacy-preserving technologies.`
    },
    {
      auditor: 'SecureCode Analytics',
      type: 'Code Security Review',
      date: '2024-01-08',
      score: '96/100',
      status: 'Passed',
      findings: 'Secure coding practices verified',
      details: `Static and dynamic code analysis performed:
• Vulnerability scanning
• Dependency security assessment
• Secure coding standard compliance
• Encryption implementation review

Results: Code demonstrates security best practices with minimal low-risk findings addressed.`
    }
  ];

  const privacyReports = [
    {
      period: 'Q4 2023',
      dataRequests: 0,
      dataShared: 0,
      userRights: 1247,
      deletions: 89,
      details: `Privacy Rights Exercised:
• Data access requests: 456
• Data portability requests: 234
• Consent withdrawals: 345
• Data corrections: 212
• Account deletions: 89

All requests processed within legal timeframes with full user satisfaction.`
    },
    {
      period: 'Q3 2023',
      dataRequests: 0,
      dataShared: 0,
      userRights: 1156,
      deletions: 67,
      details: `Privacy Rights Exercised:
• Data access requests: 423
• Data portability requests: 198
• Consent withdrawals: 312
• Data corrections: 223
• Account deletions: 67

Continued zero government data requests and zero unauthorized data sharing incidents.`
    }
  ];

  const incidentReports = [
    {
      date: '2024-01-20',
      type: 'Security Enhancement',
      severity: 'Low',
      status: 'Resolved',
      description: 'Proactive security patch deployment',
      impact: 'No user data affected',
      response: 'Immediate patch deployment during maintenance window'
    },
    {
      date: '2023-12-15',
      type: 'System Maintenance',
      severity: 'Informational',
      status: 'Completed',
      description: 'Scheduled infrastructure upgrade',
      impact: 'Brief service interruption (2 minutes)',
      response: 'Users notified 48 hours in advance'
    }
  ];

  useEffect(() => {
    // Simulate live metrics updates
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        systemUptime: Math.min(99.99, prev.systemUptime + (Math.random() * 0.01)),
        encryptionStatus: 100 // Always 100% for encryption
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderSecurityReport = () => (
    <div className="space-y-6">
      {/* Live Security Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric, index) => (
          <div key={index} className="bg-background rounded-brand p-4 shadow-gentle">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">{metric.name}</span>
              <div className={`w-3 h-3 rounded-full ${
                metric.status === 'excellent' ? 'bg-success animate-empathy-pulse' : 'bg-warning'
              }`}></div>
            </div>
            <div className="text-2xl font-heading font-semibold text-text-primary mb-1">
              {metric.value}{metric.unit}
            </div>
            <p className="text-xs text-text-secondary">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Audit Results */}
      <div className="space-y-4">
        <h4 className="text-lg font-heading font-semibold text-text-primary">
          Recent Security Audits
        </h4>
        {auditResults.map((audit, index) => (
          <div key={index} className="bg-background rounded-brand p-6 shadow-gentle">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h5 className="font-heading font-semibold text-text-primary">{audit.type}</h5>
                <p className="text-sm text-text-secondary">by {audit.auditor}</p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-brand-sm ${
                  audit.status === 'Passed' || audit.status === 'Certified' 
                    ? 'bg-success/20 text-success' :'bg-warning/20 text-warning'
                }`}>
                  <Icon name="CheckCircle" size={14} />
                  <span className="text-sm font-medium">{audit.status}</span>
                </div>
                <div className="text-sm text-text-secondary mt-1">{audit.date}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-text-primary">Score:</span>
                  <span className="text-sm font-semibold text-success">{audit.score}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-text-primary">Findings:</span>
                  <span className="text-sm text-text-secondary">{audit.findings}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary whitespace-pre-line">{audit.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacyReport = () => (
    <div className="space-y-6">
      <h4 className="text-lg font-heading font-semibold text-text-primary">
        Privacy Compliance Reports
      </h4>
      {privacyReports.map((report, index) => (
        <div key={index} className="bg-background rounded-brand p-6 shadow-gentle">
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-heading font-semibold text-text-primary">
              Privacy Report - {report.period}
            </h5>
            <div className="flex items-center space-x-1 text-success">
              <Icon name="CheckCircle" size={16} />
              <span className="text-sm font-medium">Compliant</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-3 bg-surface rounded-brand-sm">
              <div className="text-2xl font-heading font-semibold text-text-primary">
                {report.dataRequests}
              </div>
              <div className="text-sm text-text-secondary">Gov't Requests</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-brand-sm">
              <div className="text-2xl font-heading font-semibold text-text-primary">
                {report.dataShared}
              </div>
              <div className="text-sm text-text-secondary">Data Shared</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-brand-sm">
              <div className="text-2xl font-heading font-semibold text-text-primary">
                {report.userRights}
              </div>
              <div className="text-sm text-text-secondary">Rights Exercised</div>
            </div>
            <div className="text-center p-3 bg-surface rounded-brand-sm">
              <div className="text-2xl font-heading font-semibold text-text-primary">
                {report.deletions}
              </div>
              <div className="text-sm text-text-secondary">Deletions</div>
            </div>
          </div>
          
          <p className="text-sm text-text-secondary whitespace-pre-line">{report.details}</p>
        </div>
      ))}
    </div>
  );

  const renderIncidentReport = () => (
    <div className="space-y-6">
      <h4 className="text-lg font-heading font-semibold text-text-primary">
        Security Incident Reports
      </h4>
      {incidentReports.map((incident, index) => (
        <div key={index} className="bg-background rounded-brand p-6 shadow-gentle">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h5 className="font-heading font-semibold text-text-primary">{incident.type}</h5>
              <p className="text-sm text-text-secondary">{incident.date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-brand-sm ${
                incident.severity === 'Low' || incident.severity === 'Informational'
                  ? 'bg-success/20 text-success'
                  : incident.severity === 'Medium' ?'bg-warning/20 text-warning' :'bg-error/20 text-error'
              }`}>
                <span className="text-sm font-medium">{incident.severity}</span>
              </div>
              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-brand-sm bg-primary/20 text-primary-600">
                <span className="text-sm font-medium">{incident.status}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-text-primary">Description: </span>
              <span className="text-sm text-text-secondary">{incident.description}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-text-primary">Impact: </span>
              <span className="text-sm text-text-secondary">{incident.impact}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-text-primary">Response: </span>
              <span className="text-sm text-text-secondary">{incident.response}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActiveReport = () => {
    switch (selectedReport) {
      case 'security':
        return renderSecurityReport();
      case 'privacy':
        return renderPrivacyReport();
      case 'incidents':
        return renderIncidentReport();
      default:
        return renderSecurityReport();
    }
  };

  return (
    <div className="space-y-8">
      {/* Report Type Selector */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-semibold text-text-primary mb-4">
          Transparency Reports
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
          Real-time security audits, privacy compliance reports, and incident transparency. 
          We believe in complete openness about how we protect your data.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedReport(type.id)}
              className={`p-4 rounded-brand transition-whisper whisper-ripple text-left ${
                selectedReport === type.id
                  ? 'bg-background shadow-gentle-lg border-2 border-primary/30'
                  : 'bg-surface hover:bg-background hover:shadow-gentle'
              }`}
            >
              <Icon name={type.icon} size={24} className={`${type.color} mb-2`} />
              <h3 className="font-heading font-semibold text-text-primary mb-1">
                {type.name}
              </h3>
              <p className="text-sm text-text-secondary">
                {type.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Live Status Banner */}
      <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-brand p-4">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-success rounded-full animate-empathy-pulse"></div>
          <div>
            <span className="font-heading font-semibold text-text-primary">
              All Systems Secure
            </span>
            <span className="text-sm text-text-secondary ml-2">
              Last updated: {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="text-sm text-text-secondary">
              Uptime: {liveMetrics.systemUptime.toFixed(2)}%
            </div>
            <div className="text-sm text-text-secondary">
              Encryption: {liveMetrics.encryptionStatus}%
            </div>
          </div>
        </div>
      </div>

      {/* Active Report Content */}
      <div className="bg-surface/50 rounded-brand p-8">
        {renderActiveReport()}
      </div>

      {/* Download Reports */}
      <div className="bg-background rounded-brand p-6 shadow-gentle">
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
          Download Full Reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="Download" size={20} className="text-primary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Security Report</div>
              <div className="text-sm text-text-secondary">Complete audit results</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="FileText" size={20} className="text-secondary-600" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Privacy Report</div>
              <div className="text-sm text-text-secondary">Compliance documentation</div>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-surface rounded-brand transition-whisper whisper-ripple hover:bg-cream/50">
            <Icon name="AlertTriangle" size={20} className="text-warning" />
            <div className="text-left">
              <div className="font-medium text-text-primary">Incident Log</div>
              <div className="text-sm text-text-secondary">Complete incident history</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparencyReports;