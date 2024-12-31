import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Join } from "../components/Join";
import { FaWhatsapp } from "react-icons/fa6";

export const Home = () => {
  return (
    <div>
      {/* Main Components */}
      <Banner />
      <About />
      <Join />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/2349043970401" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-2 z-50 h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-3xl"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};
