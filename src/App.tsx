import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PisosAssoalhos from "./pages/PisosAssoalhos.tsx";
import Inspiracoes from "./pages/Inspiracoes.tsx";
import Decks from "./pages/Decks.tsx";
import Forros from "./pages/Forros.tsx";
import Escadas from "./pages/Escadas.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pisos-e-assoalhos" element={<PisosAssoalhos />} />
          <Route path="/inspiracoes" element={<Inspiracoes />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/forros" element={<Forros />} />
          <Route path="/escadas" element={<Escadas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
