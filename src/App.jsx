// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Services from './pages/Services';
// import Vacancies from './pages/Vacancies';
// import Careers from './pages/Careers';
// import Resources from './pages/Resources';
// import Contact from './pages/Contact';
// import Privacy from './pages/Privacy';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/vacancies" element={<Vacancies />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/privacy" element={<Privacy />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact'; 


import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Vacancies from './pages/Vacancies';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-seafoam/30">
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WhyUs" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="//News&Blogs" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        
        <FloatingContact />

        <Footer />
      </div>
    </Router>
  );
}

export default App;