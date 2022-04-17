import Navbar from "./Navbar";
const Work = () => {
  return (
    <div className="work">
      <div className="section-ofw">
        <Navbar />
        <br />
        <header className="header">Work Experience</header>
        <p className="brief">
          I worked as a Web developer Intern at{" "}
          <a href="https://niladvantage.com/" className="theme-highlight">
            {" "}
            Niladvantage Technologies.{" "}
          </a>
        </p>
        <p className="brief">
          We made a Video Conferencing Web Application built on top of Jitsi
          Meet. Feel free to give dummy credentials while testing the demo.
        </p>
        <p className="brief">Tech stack :</p>
        <p className="brief">HTML, CSS, ReactJs, Firebase, Jitsi Meet</p>
        <a href="https://nilconnect.netlify.app/" className="btn">
          Demo
        </a>{" "}
      </div>

      <div className="section">
        <div className="section-content">
          <header className="header">Projects</header>

          <p className="brief project-name">Eva: Email Voice Assistant</p>
          <p className="brief">
            We built a basic voice assistant to read out your emails in your
            gmail inbox and compose an email all through voice based commands.{" "}
          </p>
          <p className="brief"> Here's a demo video of it</p>
          <a
            href="https://drive.google.com/file/d/1_d1byWXBoDWZbUT87ZT6Pn-HRgjzrD3-/view?resourcekey"
            className="btn"
          >
            Demo Video
          </a>

          <p className="brief project-name">Neog Camp level zero web apps</p>
          <p className="brief">
            While undergoing the level zero course from neog camp, I have built
            the following web apps
          </p>
          {/* <a href="https://neogapps.shreydd.repl.co/" className="btn">Portal to my web apps</a> */}
          <iframe
            src="https://neogapps.shreydd.repl.co/"
            className="neogDisplay"
            title="Web apps"
          >
            Neog apps
          </iframe>
        </div>
      </div>

      <div className="section-ofw">
        <div className="section-content">
          <header className="header">Product Research</header>
          <p className="brief project-name">A Web Presence tool</p>
          <p className="brief">Every business needs a web presence, thus requiring for an Open sourced tool to help everyone </p>
          <p className="brief">This is a PRD (under progress) in building one</p>
          <a href="https://shreydd.notion.site/PRD-of-a-Web-Presence-Tool-for-Businesses-dc18bfdbfb014f2f86b69ddd6d289701" className="btn">Web presence tool</a>

          <p className="brief project-name">Streamer Woes</p>
          <p className="brief">Live Streamers have a tough time dealing with technology when it fails</p>
          <p className="brief">Here are some places where we can help</p>
          <a href="https://shreydd.notion.site/Streamer-woes-A-User-Research-on-improving-live-streaming-for-content-creators-3639a3b928e44b16b55a83c6f67b355f" className="btn">Streamer's woes</a>
        </div>
      </div>

      
    </div>
  );
};

export default Work;
