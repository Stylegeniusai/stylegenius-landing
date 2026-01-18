import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

// Blog posts - Style Guides
import FindYourPersonalStyle from "./pages/FindYourPersonalStyle";
import CapsuleWardrobe from "./pages/CapsuleWardrobe";
import WhatToWearJobInterview from "./pages/WhatToWearJobInterview";
import WeddingGuestOutfits from "./pages/WeddingGuestOutfits";

// Blog posts - Technology & Trends
import VirtualTryOnGuide from "./pages/VirtualTryOnGuide";
import Spring2025FashionTrends from "./pages/Spring2025FashionTrends";
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
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Main category pages */}
          <Route path="/color" element={<ColorCategory />} />
          <Route path="/body" element={<BodyCategory />} />
          <Route path="/style" element={<StyleCategory />} />
          <Route path="/shopping" element={<ShoppingCategory />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          {/* Legacy routes - kept for backwards compatibility */}
          <Route path="/download" element={<Download />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
          <Route path="/price-tracking" element={<PriceTracking />} />
          <Route path="/style-analysis" element={<StyleAnalysis />} />
          <Route path="/app" element={<MobileApp />} />
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

          {/* Blog posts - Style Guides */}
          <Route path="/find-your-personal-style" element={<FindYourPersonalStyle />} />
          <Route path="/capsule-wardrobe" element={<CapsuleWardrobe />} />
          <Route path="/what-to-wear-job-interview" element={<WhatToWearJobInterview />} />
          <Route path="/wedding-guest-outfits" element={<WeddingGuestOutfits />} />

          {/* Blog posts - Technology & Trends */}
          <Route path="/virtual-try-on-guide" element={<VirtualTryOnGuide />} />
          <Route path="/spring-2025-fashion-trends" element={<Spring2025FashionTrends />} />
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
