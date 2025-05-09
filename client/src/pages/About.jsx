import React from "react";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="about-page">
        <section className="about-hero">
          <h2>Hi,{user.username}</h2>
          <h1>About Congent Labs</h1>
          <p>
            We blend creativity with technology to build future-ready solutions.
          </p>
        </section>

        <section className="about-intro">
          <h2>Who We Are</h2>
          <p>
            Congent Labs is a passionate team of developers, designers, and
            innovators focused on delivering exceptional digital products. From
            startups to enterprise clients, we help brands bring their ideas to
            life with clean code and bold design.
          </p>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
            alt="Team at work"
          />
        </section>

        <section className="about-journey">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span>2019</span>
              <p>Founded with a mission to simplify digital solutions.</p>
            </div>
            <div className="timeline-item">
              <span>2020</span>
              <p>Launched our first cloud-native SaaS product.</p>
            </div>
            <div className="timeline-item">
              <span>2022</span>
              <p>Grew to 20+ passionate team members and global clients.</p>
            </div>
            <div className="timeline-item">
              <span>2024</span>
              <p>Leading innovation in AI-assisted web development.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="team member"
              />
              <h4>Imran Aslam</h4>
              <p>Co-Founder & CTO</p>
            </div>
            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="team member"
              />
              <h4>Nida Faisal</h4>
              <p>Lead UI/UX Designer</p>
            </div>
            <div className="team-card">
              <img
                src="https://randomuser.me/api/portraits/men/53.jpg"
                alt="team member"
              />
              <h4>Adeel Raza</h4>
              <p>DevOps Engineer</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
