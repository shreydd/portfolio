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
          Meet. Feel free to give fake credentials while testing the demo.
        </p>
        <p className="brief">Tech stack :</p>
        <p className="brief">HTML, CSS, ReactJs, Firebase, Jitsi Meet</p>
        <a href="https://nilconnect.netlify.app/" className="btn">
          Demo
        </a>{" "}
        
      </div>

      <div className="section">
        <header className="header">Projects</header>
        <ul>
          <li>
            <p className="brief">Eva: Email Voice Assistant</p>
            <p className="brief">
              We built a basic voice assistant
              to read out your emails in your gmail inbox and compose an email all through voice
              based commands. Here's a demo video of it
            </p>
            <a href="https://drive.google.com/file/d/1_d1byWXBoDWZbUT87ZT6Pn-HRgjzrD3-/view?resourcekey" className="btn">Demo Video</a>
          </li>
          <li>
              <p className="brief">Mini projects</p>
              <p className="brief miniTheme">A <a href="https://replit.com/@shreydd/CLI-quiz-app"> CLI based Quiz </a> about me! Let me know how it went.</p>
              <p className="brief miniTheme">A <a href="https://replit.com/@shreydd/CLI-quiz-app-Processors-edition"> CLI Quiz on Processors </a>, heads-up you will be quized about ARM architecture :p</p>
              <p className="brief miniTheme">Fan of the TV Show Phineas and ferb? I made a <a href="https://replit.com/@shreydd/ferb-latin#index.html">Ferb-latin translator. </a></p>
              <p className="brief miniTheme">An <a href="https://4u1vn.csb.app/">emoji interpreter </a>where you can check the meaning of an emoji. <a href="https://codesandbox.io/s/emoji-interperter-4u1vn">Click here</a>for the codebase</p>
              <p className="brief miniTheme">A <a href="https://1rg1z.csb.app/"> recommendation list app</a> where you can checkout few of my recommended TV shows and music, let me know if you liked it :D and <a href="https://codesandbox.io/s/recommendations-1rg1z">here's the code for it</a> </p>
              <p className="brief miniTheme">If you liked the UI of the recommendation app, checkout this altered <a href="https://codesandbox.io/s/rec-design-portfolio-u8u0z">portfolio style version</a> of it</p>
              <p className="brief miniTheme">A <a href="https://cash-register.shreydd.repl.co/">Cash Register</a> application that specifies how much change is to be returned with minimum number of notes</p>
              <p className="brief miniTheme">Check if you have a <a href="https://luckybirthday.shreydd.repl.co/">lucky birth date</a> </p>
          </li>

          <li>
            <p className="brief miniTheme">Product Research on <a href="https://shreydd.notion.site/Sublist-Product-ideas-84d4965d0ffd4cb79f1c9365f8173249">Sublist</a>(in progress) </p>
          </li>

          <li>
              <p className="brief miniTheme">On a side note, I also write a blog series about <a href="https://factored.substack.com/">data privacy.</a> Do check it out :D</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
