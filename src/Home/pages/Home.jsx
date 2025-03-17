import HowItWorks from "../components/HowItWorks";
import KeyFeatures from "../components/KeyFeatures";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Serverless API Authentication Project</h1>
        <p>
          In today's rapidly evolving digital landscape, the need for secure, scalable, and efficient authentication mechanisms is more critical than ever. This project demonstrates a Serverless API Authentication solution built on top of AWS Lambda, DynamoDB, and API Gateway—three powerful AWS services that help build cost-effective and highly scalable applications.
        </p>
      </header>
      <HowItWorks />
      <KeyFeatures />
    </div>
  );
};

export default Home;
