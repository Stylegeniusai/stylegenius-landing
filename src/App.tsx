import React, { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Download from "./pages/Download";

// Redirect to static HTML pages
const Redirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Redirect to="/index.html" />} />
          <Route path="/download" element={<Download />} />
          <Route path="/extension" element={<Redirect to="/extension.html" />} />
          <Route path="/virtual-try-on" element={<Redirect to="/virtual-try-on.html" />} />
          <Route path="/price-tracking" element={<Redirect to="/price-tracking.html" />} />
          <Route path="/style-analysis" element={<Redirect to="/style-analysis.html" />} />
          <Route path="/app" element={<Redirect to="/app.html" />} />
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
