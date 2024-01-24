import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                Customize your experience by setting up templates and styles for image generation. Or chat with the chatbot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support/Request</h4>
              <p className="p-color">
                Get support or make feature requests at any time on the discord server!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">💵 Free</h4>
              <p className="p-color">
                Use all the features completely free!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">50+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">120+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">1k+</h4>
            <p className="p-color">Total Commands Ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
