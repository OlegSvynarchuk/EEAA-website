import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FoundingAct from "./pages/FoundingAct";
import Organization from "./pages/Organization";
import Founders from "./pages/Founders";
import Membership from "./pages/Membership";
import MembershipApplication from "./pages/MembershipApplication";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import MarketHub from "./pages/MarketHub";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";
import BoardOfDirectors from "./pages/Directors";
import DepartmentIT from "./pages/IT";
import DepartmentWineSpirits from "./pages/Wine";
import DepartmentPRMedia from "./pages/PR";
import Archive from "./pages/Archive";

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/founding-act" component={FoundingAct} />
        <Route path="/organization" component={Organization} />
        <Route path="/founders" component={Founders} />
        <Route path="/membership" component={Membership} />
        <Route path="/membership/apply" component={MembershipApplication} />
        <Route path="/services" component={Services} />
        <Route path="/projects" component={Projects} />
        <Route path="/market-hub" component={MarketHub} />
        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsArticle} />
        <Route path="/contact" component={Contact} />
        <Route path="/it-department" component={DepartmentIT} />
        <Route path="/wine-and-spirit" component={DepartmentWineSpirits} />
        <Route path="/pr-and-media" component={DepartmentPRMedia} />
        <Route path="/directors" component={BoardOfDirectors} />
        <Route path="/archive" component={Archive} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
