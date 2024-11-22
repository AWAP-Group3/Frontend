// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigation } from "./components/ui/navigation";
// import { HeroSection } from "./components/hero-section";
// import { FeatureSection } from "./components/feature-section";
// import { MovieGrid } from "./components/movie-grid";
// import { MoviesPage } from "./pages/movies";

// function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <FeatureSection />
// <MovieGrid title="NOW SHOWING" />
// <MovieGrid title="PAPULAR MOVIE" />

//     </main>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/movies" element={<MoviesPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviesPage } from "./pages/movies";

import HomePage from "./pages/HomePage"; // Import HomePage to use in the Router
import Navbar from "./components/navbar";

import { MovieDetails } from "./pages/moviedetails";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <MovieGrid title="NOW SHOWING" />
      <MovieGrid title="JUST REVIEWED" />
    </main>
  );
}


function App() {https://github.com/AWAP-Group3/Frontend/pull/13/conflict?name=src%252FApp.tsx&ancestor_oid=4b4beafb25a91475c7a1667d66916daa47a418d9&base_oid=c78e75063a71832a82dc78a03886d8bf89b454b0&head_oid=85c36cbec70a0c274d37d86013e57e70302f52c6
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar /> {/* Ensure Navigation is visible */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage is rendered at root path */}
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
