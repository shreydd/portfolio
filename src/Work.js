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
        <header className="header">Research and Projects</header>
            <p className="brief project-name">Eva: Email Voice Assistant</p>
            <p className="brief">
              We built a basic voice assistant
              to read out your emails in your gmail inbox and compose an email all through voice
              based commands. </p>
              <p className="brief"> Here's a demo video of it
            </p>
            <a href="https://drive.google.com/file/d/1_d1byWXBoDWZbUT87ZT6Pn-HRgjzrD3-/view?resourcekey" className="btn">Demo Video</a>
            <p className="brief project-name">Neog Camp level zero web apps</p>
            <p className="brief">While undergoing the level zero course from neog camp, I have built the following web apps</p>
            {/* <a href="https://neogapps.shreydd.repl.co/" className="btn">Portal to my web apps</a> */}
            <iframe src="https://neogapps.shreydd.repl.co/" className="neogDisplay" title="Web apps" >Neog apps</iframe>
      </div>
    </div>
  );
};

export default Work;
