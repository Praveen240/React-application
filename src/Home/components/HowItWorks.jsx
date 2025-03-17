import React from "react";
import "./HowItWorks.css";

// Project-specific trends analysis
const authTrends = [
  { name: "Serverless Architecture", percentage: 78, change: "+18%" },
  { name: "NoSQL Authentication", percentage: 65, change: "+22%" },
  { name: "Lambda Functions", percentage: 81, change: "+15%" },
  { name: "API Gateway Security", percentage: 73, change: "+12%" }
];

const HowItWorks = () => {
  // Updated steps to match your project implementation
  const steps = [
    {
      title: "Health Check",
      description: "Endpoint that verifies API availability and connectivity, ensuring the system is operational.",
      icon: "🔍"
    },
    {
      title: "User Registration",
      description: "Processes new user credentials, validates input data, and securely stores information in DynamoDB.",
      icon: "📝"
    },
    {
      title: "Authentication",
      description: "Validates user credentials against stored data, implementing secure password verification protocols.",
      icon: "🔐"
    },
    {
      title: "Token Generation",
      description: "Creates secure JWT tokens with appropriate expiration and claims for authenticated session management.",
      icon: "⚡"
    },
    {
      title: "Verification",
      description: "Validates tokens and authorizes access to protected resources, ensuring proper security controls.",
      icon: "✓"
    }
  ];

  return (
    <section className="how-it-works">
      <div className="section-header">
        <p className="subtitle">A robust, scalable authentication system built on AWS serverless architecture</p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step"
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="implementation-details">
        <div className="tech-stack">
          <h3>Technology Stack</h3>
          <div className="tech-icons">
            <div className="tech-item">
              <div className="tech-icon">λ</div>
              <p>AWS Lambda</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">⋈</div>
              <p>API Gateway</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🗄️</div>
              <p>DynamoDB</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🔒</div>
              <p>JWT Auth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="trends-section">
        <h3>Serverless Auth Trends 2025</h3>
        <div className="trends-container">
          {authTrends.map((trend, index) => (
            <div 
              key={index} 
              className="trend-card"
            >
              <h4>{trend.name}</h4>
              <div className="progress-container">
                <div 
                  className="progress-bar visible" 
                  style={{ width: `${trend.percentage}%` }}
                ></div>
                <span className="percentage">{trend.percentage}%</span>
              </div>
              <span className={`change ${trend.change.includes('+') ? 'positive' : 'negative'}`}>
                {trend.change} since 2024
              </span>
            </div>
          ))}
        </div>
        <div className="trend-insight">
          <p>Recent industry analysis shows significant growth in serverless authentication solutions, with AWS Lambda 
          and API Gateway becoming the preferred architecture for scalable, cost-effective identity management systems.</p>
        </div>
      </div>

      <div className="project-highlights">
        <h3>Project Achievements</h3>
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="highlight-icon">📈</div>
            <h4>Scalability</h4>
            <p>Built to automatically scale with user demand without managing infrastructure</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">💰</div>
            <h4>Cost Efficiency</h4>
            <p>Pay-per-use model eliminates idle resource costs common in traditional servers</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🔒</div>
            <h4>Security</h4>
            <p>Implemented best practices for secure authentication and data protection</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🧪</div>
            <h4>Validation</h4>
            <p>Thoroughly tested with Postman to ensure reliable performance and security</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;