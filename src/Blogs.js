import Navbar from "./Navbar";
const Blogs = () => {
  return (
    <div className="resources">
      <div className="section-ofw">
        <Navbar />
        <header className="header">Blogs</header>
        <p className="brief">
          I write a newsletter called factored where I share few of my thoughts on current state of tech and where it could be leading us to.</p> 
        <p className='brief'>And a seperate set of blogs for understanding and utilizing tech, code and tools anologies and much more. 
        </p>
        <a
          href="https://factored.substack.com/"
          className="btn">
          Factored
        </a>
        {/* <p className="brief">I also write a seperate set of blogs dedicated to understanding and utilizing tech, code anologies and much more </p> */}
        <a href="https://blogorithm.hashnode.dev/" className="btn">Blogorithm</a>
      </div>
      <div className="section">
        <p className="header">Bonus</p>
        <p className="brief miniTheme">I manage a library of <a href="https://shreydd.notion.site/FreeWare-45c1cff7b58f44e8a5e9390107577fbc">resources.</a>Check em out</p>
        <p className="brief miniTheme">
          I took design inspirations from this{" "}
          <a href="https://sarah.dev/">awesome human</a> and this amazing{" "}
          <a href="https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q">
            {" "}
            youtube channel{" "}
          </a>{" "}
        </p>
        <p className="brief miniTheme">
          The intro image is from{" "}
          <a href="https://www.vecteezy.com/photo/1861933-3d-illustration-abstract-tornado">
            this place
          </a>
        </p>
        <p className="brief">
          As a bonus, here's a hindi music playlist you can vibe to :D{" "}
        </p>
        <a
          href="https://music.youtube.com/playlist?list=PLTHBKo_GjRM58DvvdPc_lRzmUzyQnaGws"
          className="btn"
        >
          Good 'ol 2010s
        </a>
      </div>
    </div>
  );
};

export default Blogs;
