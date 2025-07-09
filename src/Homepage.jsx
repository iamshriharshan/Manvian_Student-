import React from 'react'
import Header from "./Components/Home/Header";
import "./Homepage.css";
import bgImage from "./assets/university.png";
import { Link } from "react-router-dom";  
import ChatbotWithAPI from "./components/Chatbot/ChatbotWithAPI";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="hero-overlay">
            <h1 className="hero-title">
              Welcome to IIIT Kottayam
            </h1>
            <p className="hero-subtitle">
              Fostering Innovation & Excellence in Technical Education
            </p>
            <Link to="/" className="btn btn-primary mt-3 px-4">
              Login
            </Link>
             
          </div>
        </section>

        {/* About Section */}
        <section className="about-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="section-title">About IIIT Kottayam</h2>
                <p className="section-text">
                  Indian Institute of Information Technology Kottayam is a premier technical institution 
                  dedicated to excellence in education, research, and innovation in the field of 
                  Information Technology and Computer Science.
                </p>
                <p className="section-text">
                  Our institute focuses on creating world-class professionals who can contribute 
                  significantly to the technological advancement of our nation and the world.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="stats-grid">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Students</p>
                  </div>
                  <div className="stat-item">
                    <h3>50+</h3>
                    <p>Faculty</p>
                  </div>
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Programs</p>
                  </div>
                  <div className="stat-item">
                    <h3>95%</h3>
                    <p>Placement Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="programs-section py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-5">Our Programs</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="program-card">
                  <h4>B.Tech in Computer Science</h4>
                  <p>Comprehensive undergraduate program in computer science and engineering.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="program-card">
                  <h4>M.Tech in Information Technology</h4>
                  <p>Advanced postgraduate program focusing on cutting-edge IT technologies.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="program-card">
                  <h4>Ph.D Programs</h4>
                  <p>Research-oriented doctoral programs in various specializations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="news-section py-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Latest News & Events</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="news-card">
                  <h5>Annual Tech Fest 2024</h5>
                  <p className="text-muted">March 15, 2024</p>
                  <p>Join us for our annual technical festival featuring competitions, workshops, and guest lectures.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="news-card">
                  <h5>New Research Lab Inauguration</h5>
                  <p className="text-muted">February 28, 2024</p>
                  <p>State-of-the-art AI and Machine Learning research laboratory inaugurated.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

<footer className="footer bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>IIIT Kottayam</h5>
        <p>Fostering Innovation & Excellence in Technical Education</p>
      </div>
      <div className="col-md-6">
        <h5>Contact Info</h5>
        <p>Email: info@iiitkottayam.ac.in</p>
        <p>Phone: +91-481-2597000</p>
      </div>
    </div>
    <hr />
    <div className="text-center">
      <p>&copy; 2024 IIIT Kottayam. All rights reserved.</p>
    </div>
  </div>
</footer>

      {/* Chatbot */}
      <ChatbotWithAPI />

      </div>
    </div>
  )
}

export default Homepage