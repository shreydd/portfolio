import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="hola" > Hola! </h2>
      <nav className="nav">
        <span className="options">About</span>
        <span className="options">Work</span>
        <span className="options">Blogs</span>
        <span className="options">Resources</span>
        <span className="options">Contact</span>
      </nav>
      <h2 className="aboutheading">About</h2>
      <hr />
      {/* <h4 className="questions">Who am I?</h4> */}
      <h3 className="intro">I'm a CSE graduate who likes to brainstorm ideas and code it to life and I work with these technologies  </h3>
      {/* <h4 className="questions">So what are my skills / Tech stack?</h4> */}
      <h3 className="skills"> <i className="fa fa-code"></i> HTML |  <i className="fab fa-css3-alt"></i> CSS | <i class="fa fa-bold"></i> Bootstrap | <i class="fab fa-node-js"></i> Javascript | <i class="fab fa-python"></i> Python | <i class="fa fa-database"></i> SQL </h3>
      <br />
      <p className="para1">I graduted as a <span className="cseWord" > Computer Science Engineer </span> in 2021 and have been playing around as a Front-end Web Developer. Do look into my work section for more information. I like to design products and ocassionally research the market for people's needs. </p>
      <p className="para2">I also have been bitten by a writing bug, so do checkout my newsletter where I majorly talk about data, let me know what you thought about it :D </p>
    </div>
  );
}

export default App;
