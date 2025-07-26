import army from "../assets/army.jpeg";
import celestial from "../assets/celestial.png";
import coast from "../assets/coast.jpeg";
import lged from "../assets/lged.jpeg";
import navy from "../assets/navy.jpeg";
import rumor from "../assets/rumor.jpeg";
import school from "../assets/school.jpeg";
import unicom from "../assets/unicom.jpeg";

export default function Partners() {
  const logos = [army, celestial, coast, lged, navy, rumor, school, unicom];

  return (
    <section id="partners" className="bg-[#F8FAFC] py-14 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">
        Our Partners
      </h2>

      <div className="partners-wrapper">
        <div className="partners-track">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="partner-card">
              <img src={logo} alt={`partner-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
