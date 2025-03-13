import React from "react";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">ABOUT <span className="highlight">RYDESYNC</span></h1>
        <p className="hero-subtitle">Smart car maintenance tracking made simple.</p>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p className="mission-text">
          RydeSync is designed to help vehicle owners track their maintenance history effortlessly.
          Stay ahead of issues, optimize performance, and keep your car in perfect condition.
        </p>
      </section>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>🚗 Smart Tracking</h3>
          <p>Automatically log and track your vehicle's service history.</p>
        </div>
        <div className="feature-card">
          <h3>🔔 Maintenance Alerts</h3>
          <p>Get reminders for oil changes, tire rotations, and more.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Data</h3>
          <p>Your car data is encrypted and securely stored.</p>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-card">
          {/* <img src="" alt="Founder" className="profile-img"/> */}
          <h3>Rudra</h3>
          <p>Backend Developer | Java Expert</p>
        </div>
      </section>
    </div>
  );
};

export default About;
