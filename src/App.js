// import './App.css';
// import Form from'./USEEffect/Form'
// import Time from './Time';
// import First from './USEEffect/First';
// import { Context } from './USEEffect/Context';
// import Refrence from './USEEffect/Refrence';
// import Activity5 from './USEEffect/Activity5';
// import { ThemeContext, ThemeProvider } from './USEEffect/ThemeContext';
// import Activity from './USEEffect/Activity5';
// import UseMEMO from './USEEffect/UseMEMO';
// import Usememo from './USEEffect/UseMEMO';
// import CounterCustom from './USEEffect/CounterCustom';
// import Controlled from './USEEffect/Controlled';
// import Uncontrolled from './USEEffect/Uncontrolled';
// import Addition from './USEEffect/Activity8';
// import FormClass from './USEEffect/FormClass';
// import ToggleForm from './USEEffect/ToggleForm';
// import PostForm from './Axios';
// function App() {
//   return (
    
//     <Context>
  
//       {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>y
//             <li className="nav-item">
//               <a className="nav-link" href="#">Features</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Pricing</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <button type="button" className="btn btn-secondary" disabled>Secondary</button>
//       <button type="button" className="btn btn-primary" active>Primary</button>

//       <button type="button" className="btn btn-success">Success</button>

//     <ul className="list-group">
//       <li className="list-group-item">Item 1</li>
//       <li className="list-group-item">Item 2</li>
//       <li className="list-group-item">Item 3</li>
//     </ul>

//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       {/* <div>
//         <h1>{counter}</h1>
//         <button onClick={increment}>Increment</button>
//       </div> */}

//     {/* <Form/>

//     <Time/>
//     <First/>

    
//         <Refrence/> */}
      

//         {/* <Activity/> */}
//         {/* <UseMEMO/> */}
//         {/* <Usememo/> */}
//       {/* <CounterCustom/> */}

//       {/* <Controlled/> */}

//       {/* <Uncontrolled/> */}

//       {/* <Form/> */}
//       {/* <FormClass/> */}

//       {/* <ToggleForm/> */}

//       <PostForm/>

//       {/* <Addition/> */}

    
//     </Context>
  
//   );
// }

// export default App;

import React from 'react';
// import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './USEEffect/Home';
import Profile from './USEEffect/Profile';

// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
  linkHover: {
    color: '#f0a500',
  },
  content: {
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
};

const App = () => {

  // return (
  //   <BrowserRouter>
  //     <div>
  //       <nav style={styles.nav}>
  //         <ul style={styles.ul}>
  //           <li>
  //             <Link to="/" style={styles.link}>Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about" style={styles.link}>About</Link>
  //           </li>
  //           <li>
  //             <Link to="/contact" style={styles.link}>Contact</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <div style={styles.content}>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/about" element={<About />} />
  //           <Route path="/contact" element={<Contact />} />
  //         </Routes>
          
  //       </div>
  //     </div>
  //   </BrowserRouter>
  // );

  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile/userId' element={<Profile/>} />
    </Routes>
  )
};

export default App;

