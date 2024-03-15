import AnalyticCards from "./Components/AnalyticCards/AnalyticCards";
import Layout from "./Layout";
import Analyticsgraph from "./Pages/Analyticsgraph";
import History from "./Pages/History";
import { Tokkens } from "./Pages/Tokkens";
import { LandingPage, DashboardHome, NftGallery, Profile} from "./Pages/index";
import Porfolio from "./Pages/Porfolio";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="text-[#fff] bg-[#000] h-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Corrected path */}
            <Route path="/dashboardHome" element={<DashboardHome />} /> {/* Corrected path */}
            <Route path="/tokens" element={<Tokkens />} /> {/* Corrected component name */}
            <Route path="/nftgallery" element={<NftGallery/>} /> {/* Corrected component name */}

            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analyticsgraph />} />
            <Route path="/history" element={<History />} />
            <Route path="/portfolio" element={<Porfolio />} />

          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
