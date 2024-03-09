import { LandingPage, DashboardHome, NftGallery, Profile } from "./Pages/index";

function App() {
  return (
    <div className="text-[#fff] bg-[#000] h-auto  ">
<LandingPage/>
      <DashboardHome />
      <Profile />
      <NftGallery />
    </div>
  );
}

export default App;
