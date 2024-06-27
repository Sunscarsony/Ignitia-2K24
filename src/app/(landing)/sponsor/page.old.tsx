// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>IGNITIA 2k24</h1>
        <h2>Sponsorship Proposal</h2>
      </header>

      <section id="sponsors">
        <div className="card">
          <div className="card-front">
            <img src="sponsor1.jpg" alt="USP 1" />
            <p>Unmatched Reach</p>
          </div>
          <div className="card-back">
            <p>
              Ignitia 2024 promises exposure to a diverse and extensive audience, going beyond the confines of traditional college fests.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-front">
            <img src="sponsor2.jpg" alt="USP 2" />
            <p>Innovative Approach</p>
          </div>
          <div className="card-back">
            <p>
              Unlike typical college fests, Ignitia 2024 is not just about entertainment; we are set to redefine the benchmarks of cultural celebrations. Our innovative plans are poised to elevate the festival experience to new heights.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-front">
            <img src="sponsor3.jpg" alt="USP 3" />
            <p>Top-Notch Celebrity Presence</p>
          </div>
          <div className="card-back">
            <p>This year, we are raising the bar by inviting a top-notch celebrity to grace Ignitia 2024.</p>
          </div>
        </div>
      </section>

      <section id="sponsorship-opportunity">
        <h2>Sponsorship Opportunity</h2>
        <p>
          <b>Powered By Sponsor:</b> Enjoy exclusive brand visibility as the event's "Powered By" sponsor, ensuring that your brand is prominently featured in all promotional materials, both online and offline.
          <br />
          <b>Event Sponsor:</b> Associate your brand with specific events and experiences within Ignitia 2024, tailoring your sponsorship to align with your marketing objectives.
          We are excited to discuss how your brand can seamlessly integrate with Ignitia 2024 and benefit from this unparalleled opportunity.
          Our team is open for discussions at your earliest convenience to explore the various sponsorship packages available. Let's grow together and make Ignitia 2024 an unforgettable experience for all.
          Thank you for considering this opportunity, and we look forward to the possibility of working together to create lasting impressions at Ignitia 2024.
        </p>
      </section>

      <section id="become-sponsor">
        <h2>Become a Sponsor/Partner</h2>
        <form>
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" name="company-name" required /><br />

          <label htmlFor="contact-number">Contact Number:</label>
          <input type="tel" id="contact-number" name="contact-number" required /><br />

          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" required /><br />

          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="food">Food</option>
            <option value="education">Education</option>
            <option value="technology">Technology</option>
          </select><br />

          <input type="submit" value="Submit" />
        </form>
      </section>

      <section id="ignite-your-brand">
        <h2>Ignite Your Brand at IGNITIA 2k24</h2>
        {/* Add a carousel slider for past celebrities' images here */}
      </section>

      <section id="past-sponsors">
        <h2>Past Sponsors</h2>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src="1.jpg" alt="Sponsor 1" />
          </div>
          <div className="carousel-slide">
            <img src="2.jpg" alt="Sponsor 2" />
          </div>
          <div className="carousel-slide">
            <img src="3.jpg" alt="Sponsor 3" />
          </div>
          {/* Add more slides as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
