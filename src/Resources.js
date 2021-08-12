import Navbar from "./Navbar";
const Resources = () => {
  return (
    <div className="resources">
      <div className="section-ofw">
        <Navbar />
        <header className="header">Resources</header>
        <p className="brief">
          I share some useful resources here, feel free to use them
        </p>
        <p className="brief">
          This is a direct link to all the free-ish resources I came across for
          CS
        </p>
        <a
          href="https://shreydd.notion.site/c3ad240504bb448d8ca3c1ad4008cb4a?v=1b10e1a200084b4eaf1fea9479c03d7f"
          className="btn"
        >
          Freeware
        </a>
      </div>
      <div className="section">
          <p className="header">Bonus</p>
          <p className="brief">As a bonus, here's a hindi playlist to vibe to :D </p>
          <a href="https://music.youtube.com/playlist?list=PLTHBKo_GjRM58DvvdPc_lRzmUzyQnaGws" className="btn">A not so trash hindi music</a>
      </div>
    </div>
  );
};

export default Resources;
