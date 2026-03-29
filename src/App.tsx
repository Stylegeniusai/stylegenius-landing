import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Keep Clarity session alive across SPA route changes
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('set', 'page', pathname);
    }
  }, [pathname]);
  return null;
};
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Support from "./pages/support";
import DataDeletion from "./pages/data-deletion";
import WhatColorsSuitMe from "./pages/WhatColorsSuitMe";
import WhatBodyTypeSuitsMe from "./pages/WhatBodyTypeSuitsMe";
import Blog from "./pages/Blog";
import PersonalAnalysis from "./pages/PersonalAnalysis";
import AnalysisSuccess from "./pages/AnalysisSuccess";
import AnalysisForm from "./pages/AnalysisForm";

// Category pages
import ColorCategory from "./pages/ColorCategory";
import BodyCategory from "./pages/BodyCategory";
import StyleCategory from "./pages/StyleCategory";
import ShoppingCategory from "./pages/ShoppingCategory";
import About from "./pages/About";

// Blog posts - Color Analysis
import WhatSeasonAmI from "./pages/WhatSeasonAmI";
import SoftAutumnColors from "./pages/SoftAutumnColors";
import DarkWinterColors from "./pages/DarkWinterColors";
import DeepWinterColors from "./pages/DeepWinterColors";
import SoftSummerColors from "./pages/SoftSummerColors";
import LightSummerColors from "./pages/LightSummerColors";
import BrightSpringColors from "./pages/BrightSpringColors";
import TrueAutumnColors from "./pages/TrueAutumnColors";
import WarmVsCoolUndertones from "./pages/WarmVsCoolUndertones";
import BestColorsForPaleSkin from "./pages/BestColorsForPaleSkin";
import MakeupForPaleSkin from "./pages/MakeupForPaleSkin";
import BestColorsForOliveSkin from "./pages/BestColorsForOliveSkin";
import BestColorsForDarkSkin from "./pages/BestColorsForDarkSkin";

// Blog posts - Body Type
import KibbeBodyTypes from "./pages/KibbeBodyTypes";
import HourglassBodyType from "./pages/HourglassBodyType";
import PearBodyShape from "./pages/PearBodyShape";
import AppleBodyShape from "./pages/AppleBodyShape";
import RectangleBodyType from "./pages/RectangleBodyType";
import InvertedTriangleBody from "./pages/InvertedTriangleBody";
import BestJeansForBodyType from "./pages/BestJeansForBodyType";

// Blog posts - Fashion Aesthetics
import CleanGirlAesthetic from "./pages/CleanGirlAesthetic";
import OldMoneyAesthetic from "./pages/OldMoneyAesthetic";
import QuietLuxuryStyle from "./pages/QuietLuxuryStyle";
import OfficeSirenAesthetic from "./pages/OfficeSirenAesthetic";
import CoquetteAesthetic from "./pages/CoquetteAesthetic";
import IndieSleazeAesthetic from "./pages/IndieSleazeAesthetic";

// Blog posts - Color Trends
import Spring2026ColorTrends from "./pages/Spring2026ColorTrends";

// Blog posts - Style Guides
import FindYourPersonalStyle from "./pages/FindYourPersonalStyle";
import CapsuleWardrobe from "./pages/CapsuleWardrobe";
import WhatToWearJobInterview from "./pages/WhatToWearJobInterview";
import WeddingGuestOutfits from "./pages/WeddingGuestOutfits";

// Blog posts - Technology & Trends
import VirtualTryOnGuide from "./pages/VirtualTryOnGuide";
import Spring2025FashionTrends from "./pages/Spring2025FashionTrends";
import ColorCombinations2026 from "./pages/ColorCombinations2026";
import AIFashionShopping from "./pages/AIFashionShopping";
import OnlineDressingRoom from "./pages/OnlineDressingRoom";
import SmartShoppingTools from "./pages/SmartShoppingTools";
import DoesThisSuitMe from "./pages/DoesThisSuitMe";
import FutureOnlineShopping from "./pages/FutureOnlineShopping";
import TryOnClothesOnline from "./pages/TryOnClothesOnline";
import CartedAlternative from "./pages/CartedAlternative";
import BestWishlistApps from "./pages/BestWishlistApps";
import ThreeThreeThreeRuleFashion from "./pages/333RuleFashion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Main category pages */}
          <Route path="/color" element={<ColorCategory />} />
          <Route path="/body" element={<BodyCategory />} />
          <Route path="/style" element={<StyleCategory />} />
          <Route path="/shopping" element={<ShoppingCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/what-colors-suit-me" element={<WhatColorsSuitMe />} />
          <Route path="/what-body-type-suits-me" element={<WhatBodyTypeSuitsMe />} />

          {/* Blog posts - Color Analysis */}
          <Route path="/what-season-am-i" element={<WhatSeasonAmI />} />
          <Route path="/soft-autumn-colors" element={<SoftAutumnColors />} />
          <Route path="/dark-winter-colors" element={<DarkWinterColors />} />
          <Route path="/deep-winter-colors" element={<DeepWinterColors />} />
          <Route path="/soft-summer-colors" element={<SoftSummerColors />} />
          <Route path="/light-summer-colors" element={<LightSummerColors />} />
          <Route path="/bright-spring-colors" element={<BrightSpringColors />} />
          <Route path="/true-autumn-colors" element={<TrueAutumnColors />} />
          <Route path="/warm-vs-cool-undertones" element={<WarmVsCoolUndertones />} />
          <Route path="/best-colors-for-pale-skin" element={<BestColorsForPaleSkin />} />
          <Route path="/makeup-for-pale-skin" element={<MakeupForPaleSkin />} />
          <Route path="/best-colors-for-olive-skin" element={<BestColorsForOliveSkin />} />
          <Route path="/best-colors-for-dark-skin" element={<BestColorsForDarkSkin />} />

          {/* Blog posts - Body Type */}
          <Route path="/kibbe-body-types" element={<KibbeBodyTypes />} />
          <Route path="/hourglass-body-type" element={<HourglassBodyType />} />
          <Route path="/pear-body-shape" element={<PearBodyShape />} />
          <Route path="/apple-body-shape" element={<AppleBodyShape />} />
          <Route path="/rectangle-body-type" element={<RectangleBodyType />} />
          <Route path="/inverted-triangle-body" element={<InvertedTriangleBody />} />
          <Route path="/best-jeans-for-body-type" element={<BestJeansForBodyType />} />

          {/* Blog posts - Fashion Aesthetics */}
          <Route path="/clean-girl-aesthetic" element={<CleanGirlAesthetic />} />
          <Route path="/old-money-aesthetic" element={<OldMoneyAesthetic />} />
          <Route path="/quiet-luxury-style" element={<QuietLuxuryStyle />} />
          <Route path="/office-siren-aesthetic" element={<OfficeSirenAesthetic />} />
          <Route path="/coquette-aesthetic" element={<CoquetteAesthetic />} />
          <Route path="/indie-sleaze-aesthetic" element={<IndieSleazeAesthetic />} />

          {/* Blog posts - Color Trends */}
          <Route path="/spring-2026-color-trends" element={<Spring2026ColorTrends />} />

          {/* Blog posts - Style Guides */}
          <Route path="/find-your-personal-style" element={<FindYourPersonalStyle />} />
          <Route path="/capsule-wardrobe" element={<CapsuleWardrobe />} />
          <Route path="/what-to-wear-job-interview" element={<WhatToWearJobInterview />} />
          <Route path="/wedding-guest-outfits" element={<WeddingGuestOutfits />} />

          {/* Blog posts - Technology & Trends */}
          <Route path="/virtual-try-on-guide" element={<VirtualTryOnGuide />} />
          <Route path="/spring-2025-fashion-trends" element={<Spring2025FashionTrends />} />
          <Route path="/color-combinations-2026" element={<ColorCombinations2026 />} />
          <Route path="/ai-fashion-shopping" element={<AIFashionShopping />} />
          <Route path="/online-dressing-room" element={<OnlineDressingRoom />} />
          <Route path="/smart-shopping-tools" element={<SmartShoppingTools />} />
          <Route path="/does-this-suit-me" element={<DoesThisSuitMe />} />
          <Route path="/future-online-shopping" element={<FutureOnlineShopping />} />
          <Route path="/try-on-clothes-online" element={<TryOnClothesOnline />} />
          <Route path="/carted-alternative" element={<CartedAlternative />} />
          <Route path="/best-wishlist-apps" element={<BestWishlistApps />} />
          <Route path="/333-rule-fashion" element={<ThreeThreeThreeRuleFashion />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/personal-analysis" element={<PersonalAnalysis />} />
          <Route path="/analysis-success" element={<AnalysisSuccess />} />
          <Route path="/analysis-form" element={<AnalysisForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
