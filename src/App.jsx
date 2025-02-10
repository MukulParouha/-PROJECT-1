import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";
import BuissnessPage from "./pages/BuissnessPage";
import MembershipPage from "./pages/MembershipPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import Footer from "./components/Footer";
import SocialSidebar from "./components/Sidebar";
import CallToAction from "./components/CallToAction";
import AarnaGym from "./pages/AarnaGym";
import AarnaMart from "./pages/AarnaMart";
import AarnaSalon from "./pages/AarnaSalon";
import AarnaFoodCourt from "./pages/AarnaFood";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/business" element={<BuissnessPage />} />
            <Route path="/membershipplans" element={<MembershipPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/terms-of-services" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/refund-policy" element={<RefundPage />} />
            <Route path="/aarna-gym" element={<AarnaGym />} />
            <Route path="/aarna-mart" element={<AarnaMart />} />
            <Route path="/aarna-salon" element={<AarnaSalon />} />
            <Route path="/aarna-foodcourt" element={<AarnaFoodCourt />} />
          </Routes>
        </div>
        <SocialSidebar />
        <Footer />
        <CallToAction />
      </div>
    </>
  );
}

export default App;
