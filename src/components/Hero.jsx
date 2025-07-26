import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero_image.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E3A8A]/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight text-white drop-shadow-lg">
          Transform Your{" "}
          <span className="text-[#60A5FA] drop-shadow-md">Business</span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-100 text-lg drop-shadow-md">
          Comprehensive 360-degree business solutions designed to elevate your
          company to new heights with cutting-edge technology and strategic
          expertise.
        </p>

        <div className="mt-8 flex space-x-4 justify-center">
          {/* Primary CTA */}
          <button
            onClick={() => navigate("/contactus")}
            className="bg-[#3B82F6] hover:bg-[#60A5FA] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-medium"
          >
            Get Started Today
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => navigate("/projects")}
            className="border border-white text-white hover:bg-white hover:text-[#1E3A8A] px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-medium"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
