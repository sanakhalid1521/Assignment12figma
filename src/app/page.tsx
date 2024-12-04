import Image from "next/image";
import Navbar from "./components/navebar";
import HeroSection from "./components/hero";
import WorkManagement from "./components/workmanagment";
import YourWork from "./components/work";
import Footer from "./components/footer";
import Sponsors from "./components/ourSponcers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkManagement />
      <YourWork />
      <Sponsors />
      <Footer />
    </div>
  );
}
