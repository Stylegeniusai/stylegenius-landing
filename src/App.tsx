import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExtensionLanding from "./pages/ExtensionLanding";
import VirtualTryOn from "./pages/VirtualTryOn";
import PriceTracking from "./pages/PriceTracking";
import StyleAnalysis from "./pages/StyleAnalysis";
import MobileApp from "./pages/MobileApp";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Support from "./pages/support";
import DataDeletion from "./pages/data-deletion";
import Premium from "./pages/premium";
import Success from "./pages/success";
import WhatColorsSuitMe from "./pages/WhatColorsSuitMe";
import WhatBodyTypeSuitsMe from "./pages/WhatBodyTypeSuitsMe";
import Blog from "./pages/Blog";
import Download from "./pages/Download";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/download" element={<Download />} />
          <Route path="/extension" element={<ExtensionLanding />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
          <Route path="/price-tracking" element={<PriceTracking />} />
          <Route path="/style-analysis" element={<StyleAnalysis />} />
          <Route path="/app" element={<MobileApp />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/what-colors-suit-me" element={<WhatColorsSuitMe />} />
          <Route path="/what-body-type-suits-me" element={<WhatBodyTypeSuitsMe />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/success" element={<Success />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
