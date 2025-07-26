import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Partners from "./components/Partners";
import ScrollToTop from "./components/ScrollToTop";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Projects />
              <Partners />
              <ChooseUs />
              <Footer />
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>

      {/* Floating Contact Button - hidden on contact page */}
      {location.pathname !== "/contactus" && (
        <div className="fixed bottom-6 right-6 z-50 md:bottom-20">
          <Link
            to="/contactus"
            className="bg-[#2563EB] text-white px-5 py-3 rounded-full shadow-lg 
                       hover:bg-[#60A5FA] hover:shadow-xl flex items-center space-x-2 transition-all"
          >
            <ion-icon
              name="chatbubble-ellipses-outline"
              class="text-xl"
            ></ion-icon>
            <span className="text-sm font-medium">Contact Us</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
