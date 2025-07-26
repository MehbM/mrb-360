import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  navyProjects,
  softwareProjects,
  constructionProjects,
  armyProjects,
} from "../data/projectData";

import con1 from "../assets/con1.png";
import con2 from "../assets/con2.jpg";
import con3 from "../assets/con3.jpg";
import con4 from "../assets/con4.jpg";
import con5 from "../assets/con5.jpg";
import con6 from "../assets/con6.jpg";
import con7 from "../assets/con7.jpg";

import cvp1 from "../assets/CVP1.png";
import cvp2 from "../assets/CVP2.png";
import cvp3 from "../assets/CVP3.png";
import rms1 from "../assets/RMS1.jpeg";

export default function ProjectsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("defense");
  const [defenseSubTab, setDefenseSubTab] = useState("navy");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryType, setGalleryType] = useState("construction");

  const constructionImages = [con1, con2, con3, con4, con5, con6, con7];
  const softwareImages = [cvp1, cvp2, cvp3, rms1];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    AOS.refresh();

    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    if (
      tabParam &&
      ["defense", "software", "construction"].includes(tabParam)
    ) {
      setActiveTab(tabParam);
    }
  }, [location]);

  const openGallery = (type, index) => {
    setGalleryType(type);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const imagesToShow =
    galleryType === "software" ? softwareImages : constructionImages;

  return (
    <section className="bg-[#F8FAFC] text-[#111827] min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          {["defense", "software", "construction"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium transition-all border-b-2 
                ${
                  activeTab === tab
                    ? "text-[#2563EB] border-[#2563EB]"
                    : "text-gray-500 border-transparent hover:text-[#2563EB]"
                }`}
            >
              {tab === "defense" && "Defense & Government"}
              {tab === "software" && "Software"}
              {tab === "construction" && "Construction"}
            </button>
          ))}
        </div>

        {activeTab === "defense" && (
          <div data-aos="fade-up">
            <div className="flex justify-center mb-6">
              {["navy", "army"].map((sub) => (
                <button
                  key={sub}
                  onClick={() => setDefenseSubTab(sub)}
                  className={`px-5 py-2 text-sm font-medium rounded-full mx-2 transition-all
                    ${
                      defenseSubTab === sub
                        ? "bg-[#2563EB] text-white"
                        : "bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE]"
                    }`}
                >
                  {sub === "navy" ? "Navy (NSSD)" : "Army (BSD)"}
                </button>
              ))}
            </div>

            {defenseSubTab === "navy" && (
              <div>
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
                  NSSD: Naval Stores Sub Depot
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  <strong>MRB Solutions 360</strong> has actively contributed to
                  the Bangladesh Navy through <strong>NSSD</strong> by
                  delivering high-quality goods and services.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[#E5E7EB] rounded-xl bg-white shadow-md">
                    <thead className="bg-[#EFF6FF] text-[#1E3A8A] text-sm font-semibold">
                      <tr>
                        <th className="py-3 px-4 text-left">Tender Title</th>
                        <th className="py-3 px-4 text-left">Tender Number</th>
                        <th className="py-3 px-4 text-left">
                          Publication Date
                        </th>
                        <th className="py-3 px-4 text-left">
                          Participation Date
                        </th>
                        <th className="py-3 px-4 text-left">Position Hold</th>
                        <th className="py-3 px-4 text-left">Billing Status</th>
                        <th className="py-3 px-4 text-left">
                          Project Value (BDT)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                      {navyProjects.map((p, i) => (
                        <tr
                          key={i}
                          className="border-t border-[#E5E7EB] hover:bg-[#F1F5F9] transition-all"
                          data-aos-delay={i * 25}
                        >
                          <td className="py-3 px-4 font-medium">{p.title}</td>
                          <td className="py-3 px-4">{p.tenderNo}</td>
                          <td className="py-3 px-4">{p.pubDate}</td>
                          <td className="py-3 px-4">{p.participation}</td>
                          <td className="py-3 px-4">{p.position}</td>
                          <td className="py-3 px-4">{p.billing}</td>
                          <td className="py-3 px-4">{p.projectValue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {defenseSubTab === "army" && (
              <div>
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
                  BSD: Bangladesh Army’s Base Supply Depot
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  <strong>MRB Solutions 360</strong> has served the Bangladesh
                  Army through <strong>BSD</strong>. Below is a summary of
                  completed supplies:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-[#E5E7EB] rounded-xl bg-white shadow-md">
                    <thead className="bg-[#EFF6FF] text-[#1E3A8A] text-sm font-semibold">
                      <tr>
                        <th className="py-3 px-4 text-left">Item</th>
                        <th className="py-3 px-4 text-left">
                          Quantity/Description
                        </th>
                        <th className="py-3 px-4 text-left">Recipient</th>
                        <th className="py-3 px-4 text-left">
                          Project Value (BDT)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                      {armyProjects.map((p, i) => (
                        <tr
                          key={i}
                          className="border-t border-[#E5E7EB] hover:bg-[#F1F5F9] transition-all"
                          data-aos-delay={i * 25}
                        >
                          <td className="py-3 px-4 font-medium">{p.title}</td>
                          <td className="py-3 px-4">{p.quantity}</td>
                          <td className="py-3 px-4">{p.recipient}</td>
                          <td className="py-3 px-4">{p.projectValue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "software" && (
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
              Software Projects
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              <strong>MRB Solutions 360</strong> has developed critical software
              solutions and subscription services for government and private
              sectors.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-[#E5E7EB] rounded-xl bg-white shadow-md">
                <thead className="bg-[#EFF6FF] text-[#1E3A8A] text-sm font-semibold">
                  <tr>
                    <th className="py-3 px-4 text-left">Project Title</th>
                    <th className="py-3 px-4 text-left">Tender Number</th>
                    <th className="py-3 px-4 text-left">Publication Date</th>
                    <th className="py-3 px-4 text-left">Participation Date</th>
                    <th className="py-3 px-4 text-left">Project Value</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {softwareProjects.map((p, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#E5E7EB] hover:bg-[#F1F5F9] transition-all"
                      data-aos-delay={i * 25}
                    >
                      <td className="py-3 px-4 font-medium">{p.title}</td>
                      <td className="py-3 px-4">{p.tenderNo}</td>
                      <td className="py-3 px-4">{p.pubDate}</td>
                      <td className="py-3 px-4">{p.participation}</td>
                      <td className="py-3 px-4">{p.projectValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softwareImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Software ${i + 1}`}
                  className="cursor-pointer rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all"
                  onClick={() => openGallery("software", i)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "construction" && (
          <div data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
              Construction Projects
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              <strong>MRB Solutions 360</strong> has executed major
              infrastructure and civil works across Bangladesh.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-[#E5E7EB] rounded-xl bg-white shadow-md">
                <thead className="bg-[#EFF6FF] text-[#1E3A8A] text-sm font-semibold">
                  <tr>
                    <th className="py-3 px-4 text-left">Project Title</th>
                    <th className="py-3 px-4 text-left">Client</th>
                    <th className="py-3 px-4 text-left">Location</th>
                    <th className="py-3 px-4 text-left">Scope</th>
                    <th className="py-3 px-4 text-left">Project Value</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {constructionProjects.map((p, i) => (
                    <tr
                      key={i}
                      className="border-t border-[#E5E7EB] hover:bg-[#F1F5F9] transition-all"
                      data-aos-delay={i * 25}
                    >
                      <td className="py-3 px-4 font-medium">{p.title}</td>
                      <td className="py-3 px-4">{p.client}</td>
                      <td className="py-3 px-4">{p.location}</td>
                      <td className="py-3 px-4">{p.scope}</td>
                      <td className="py-3 px-4">{p.projectValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {constructionImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Construction ${i + 1}`}
                  className="cursor-pointer rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all"
                  onClick={() => openGallery("construction", i)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setLightboxOpen(false)}
          >
            ✕
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex - 1 + imagesToShow.length) %
                  imagesToShow.length
              )
            }
          >
            ‹
          </button>
          <img
            src={imagesToShow[currentImageIndex]}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={() =>
              setCurrentImageIndex(
                (currentImageIndex + 1) % imagesToShow.length
              )
            }
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
