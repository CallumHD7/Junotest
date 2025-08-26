import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Welcome from "./pages/Welcome";
import GetStarted1 from "./pages/GetStarted1";
import GetStarted2 from "./pages/GetStarted2";
import GetStarted3 from "./pages/GetStarted3";
import GetStarted4 from "./pages/GetStarted4";
import SelectAccountType from "./pages/SelectAccountType";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/getstarted1" element={<GetStarted1 />} />
          <Route path="/getstarted2" element={<GetStarted2 />} />
          <Route path="/getstarted3" element={<GetStarted3 />} />
          <Route path="/getstarted4" element={<GetStarted4 />} />
          <Route path="/select-account-type" element={<SelectAccountType />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
