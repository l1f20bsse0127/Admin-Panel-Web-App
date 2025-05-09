import React from "react";

const Home = () => {
  return (
    <>
      <div className="page-content2">
        <section className="v-hero">
          <h1>Discover Innovation at Congent Labs</h1>
          <p>
            We craft digital experiences that transform your business and
            accelerate growth.
          </p>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
            alt="Innovation image"
          />
        </section>

        <section className="v-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team member"
              />
              <h4>Ali Khan</h4>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team member"
              />
              <h4>Sara Patel</h4>
              <p>Cloud Architect</p>
            </div>
            <div className="team-member">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="Team member"
              />
              <h4>Mohammed Reza</h4>
              <p>DevOps Engineer</p>
            </div>
          </div>
        </section>

        <section className="v-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="v-feature">
            {/* <img src="/images/Blog-Header.png" alt="Cloud services" /> */}
            <div>
              <h3>Cloud Infrastructure</h3>
              <p>
                Reliable, scalable, and secure cloud solutions tailored to your
                goals.
              </p>
            </div>
          </div>
          <div className="v-feature reverse">
            {/* <img
              src="https://source.unsplash.com/400x250/?devops,automation"
              alt="DevOps"
            /> */}
            <div>
              <h3>DevOps Automation</h3>
              <p>
                Fast, efficient CI/CD pipelines that deliver code with
                confidence.
              </p>
            </div>
          </div>
          <div className="v-feature">
            {/* <img
              src="https://source.unsplash.com/400x250/?web,development"
              alt="Web Development"
            /> */}
            <div>
              <h3>Responsive Web Apps</h3>
              <p>
                Beautiful, performant websites optimized for all devices and
                users.
              </p>
            </div>
          </div>
        </section>

        <section className="v-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today and take your tech stack to the next level.</p>
          <a href="#" className="hero-btn">
            Get Started
          </a>
        </section>
      </div>
    </>
  );
};

export default Home;
