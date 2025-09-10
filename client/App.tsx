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
import BusinessAccount1 from "./pages/BusinessAccount1";
import BusinessAccount2 from "./pages/BusinessAccount2";
import BusinessAccount3 from "./pages/BusinessAccount3";
import BusinessAccount4 from "./pages/BusinessAccount4";
import PersonalAccount1 from "./pages/PersonalAccount1";
import PersonalAccount2 from "./pages/PersonalAccount2";
import PersonalAccount3 from "./pages/PersonalAccount3";
import PersonalAccount4 from "./pages/PersonalAccount4";
import PersonalAccount5 from "./pages/PersonalAccount5";
import Dashboard_Fiat from "./pages/Dashboard_Fiat";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
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
          <Route path="/businessaccount1" element={<BusinessAccount1 />} />
          <Route path="/businessaccount2" element={<BusinessAccount2 />} />
          <Route path="/businessaccount3" element={<BusinessAccount3 />} />
          <Route path="/businessaccount4" element={<BusinessAccount4 />} />
          <Route path="/personalaccount1" element={<PersonalAccount1 />} />
          <Route path="/personalaccount2" element={<PersonalAccount2 />} />
          <Route path="/personalaccount3" element={<PersonalAccount3 />} />
          <Route path="/personalaccount4" element={<PersonalAccount4 />} />
          <Route path="/personalaccount5" element={<PersonalAccount5 />} />
          <Route path="/dashboard_fiat" element={<Dashboard_Fiat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
