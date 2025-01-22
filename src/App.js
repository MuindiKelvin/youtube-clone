import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/search/:searchTerm" 
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            } 
          />
          
          <Route 
            path="/" 
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
