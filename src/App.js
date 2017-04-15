import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './acpglogo.svg';
import './App.css';
// import Lessons from './Lessons';
// import Bio from './Bio';
// import Rates from './Rates';
// import Resources from './Resources'

const App = () => {
  return (
    <div>
      <img src={ logo } alt="Anyone Can Play Guitar logo" />
      <a href="https://www.youtube.com/user/acpgapex">
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
    </div>
    // <Router>
    //   <div className="App">
    //     <div className="App-header">
    //       <Link to="/"><img src={ logo } className="App-logo" alt="Anyone Can Play Guitar logo" /></Link>
    //       <nav>
    //         <ul>
    //           <li><Link to="/lessons">Lessons</Link></li>
    //           <li><Link to="/bio">Bio</Link></li>
    //           <li><Link to="/rates">Rates</Link></li>
    //           {/*<li><Link to="/resources">Resources</Link></li>*/}
    //         </ul>
    //       </nav>
    //     </div>
    //     <div className="App-intro">
    //       <p>Guitar lessons in and around Boulder, CO.</p>
    //       <p>Call or email today to setup your first lesson:</p>
    //       <div className="App-contact">
    //         <ul>
    //           <li>
    //             <i className="fa fa-phone" aria-hidden="true"></i>
    //             <a href="tel:+19192087511">(919) 208-7511</a>
    //           </li>
    //           <li>
    //             <i className="fa fa-envelope-o" aria-hidden="true"></i>
    //             <a href="mailto:ne1canplayguitar@gmail.com">ne1canplayguitar@gmail.com</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="App-content">
    //       <Route exact path="/lessons" component={ Lessons }/>
    //       <Route exact path="/bio" component={ Bio }/>
    //       <Route exact path="/rates" component={ Rates }/>
    //       <Route exact path="/resources" component={ Resources }/>
    //     </div>
    //     <footer>&copy; { (new Date()).getFullYear() } Hunter MacDermut</footer>
    //   </div>
    // </Router>
  );
}

export default App;
