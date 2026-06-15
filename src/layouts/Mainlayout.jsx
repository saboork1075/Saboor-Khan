import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F4]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
