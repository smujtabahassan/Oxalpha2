import AnalyticCards from "./Components/AnalyticCards/AnalyticCards";
import Analyticsgraph from "./Pages/Analyticsgraph";
import History from "./Pages/History";
import Portfolio from "./Pages/Porfolio";
import { Tokkens } from "./Pages/Tokkens";
import { LandingPage, DashboardHome, NftGallery, Profile } from "./Pages/index";

function App() {
  return (
    <div className="text-[#fff] bg-[#000] h-auto  ">
<LandingPage/>
      <DashboardHome />
      <NftGallery /> 
      <Profile/>
      <Tokkens/> 
      <Portfolio/>
<History/>
<Analyticsgraph/>  
    </div>
  );
}

export default App;
