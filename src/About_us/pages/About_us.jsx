import "./About_us.css";
import shewagImg from "../pages/shewag.jpg";
import praveenImg from "../pages/praveen.jpg";
import kamalImg from "../pages/kamal.jpg";
import NavinImg from "../pages/navin.jpg";




const teamMembers = [
  { name: "Praveen", role: "Software Developer", imgSrc: praveenImg },
  { name: "Navin", role: "Software Developer", imgSrc: NavinImg },
  { name: "Kamal", role: "Software Developer", imgSrc: kamalImg },
  { name: "Veerendra Sehwag", role: "Software Developer", imgSrc: shewagImg },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        We are a team of passionate software developers committed to building innovative solutions.
      </p>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imgSrc || "https://via.placeholder.com/80"} alt={member.name} className="team-image" />
            <span className="team-name">{member.name}</span>
            <span className="team-role">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
