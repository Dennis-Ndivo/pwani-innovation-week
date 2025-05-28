
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Speakers from "./pages/Speakers";
import Engage from "./pages/Engage";
import NotFound from "./pages/NotFound";
import Hackathon from "./pages/Hackathon";
import PlenarySessions from "./pages/PlenarySessions";
import Workshops from "./pages/Workshops";
import PanelDiscussions from "./pages/PanelDiscussions";
import NetworkingEvents from "./pages/NetworkingEvents";
import Exhibitions from "./pages/Exhibitions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/plenary-sessions" element={<PlenarySessions />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/panel-discussions" element={<PanelDiscussions />} />
          <Route path="/networking-events" element={<NetworkingEvents />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
