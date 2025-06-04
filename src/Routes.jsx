import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import DashboardNavigation from "components/ui/DashboardNavigation";

// Page imports
import HomepageProductLanding from "pages/homepage-product-landing";
import ProductDetailsPreOrder from "pages/product-details-pre-order";
import UserRegistrationLogin from "pages/user-registration-login";
import UserDashboardWellnessOverview from "pages/user-dashboard-wellness-overview";
import DigitalJournalVoiceInput from "pages/digital-journal-voice-input";
import EmotionInsightsAnalytics from "pages/emotion-insights-analytics";
import HowItWorks from "pages/how-it-works";
import PrivacySanctuary from "pages/privacy-sanctuary";
import WellnessResourceCenter from "pages/wellness-resource-center";
import CommunityStories from "pages/community-stories";
import ResearchHub from "pages/research-hub";


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <DashboardNavigation />
        <RouterRoutes>
          <Route path="/" element={<HomepageProductLanding />} />
          <Route path="/homepage-product-landing" element={<HomepageProductLanding />} />
          <Route path="/product-details-pre-order" element={<ProductDetailsPreOrder />} />
          <Route path="/user-registration-login" element={<UserRegistrationLogin />} />
          <Route path="/user-dashboard-wellness-overview" element={<UserDashboardWellnessOverview />} />
          <Route path="/digital-journal-voice-input" element={<DigitalJournalVoiceInput />} />
          <Route path="/emotion-insights-analytics" element={<EmotionInsightsAnalytics />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/privacy-sanctuary" element={<PrivacySanctuary />} />
          <Route path="/wellness-resource-center" element={<WellnessResourceCenter />} />  
          <Route path="/community-stories" element={<CommunityStories />} />
          <Route path="/research-hub" element={<ResearchHub />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;