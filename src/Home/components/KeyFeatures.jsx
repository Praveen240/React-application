import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <section className="key-features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Serverless Architecture</h3>
          <p>No need to manage servers; AWS handles everything automatically.</p>
        </div>
        <div className="feature-card">
          <h3>Secure Authentication</h3>
          <p>Token-based authentication ensures strong security without storing sensitive data.</p>
        </div>
        <div className="feature-card">
          <h3>Efficient & Scalable</h3>
          <p>AWS Lambda and DynamoDB ensure quick and scalable performance.</p>
        </div>
        <div className="feature-card">
          <h3>Cost-Effective</h3>
          <p>Pay only for what you use, making it ideal for startups and businesses.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
