import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { teamSections } from "../data/teamData";

export default function OurTeam() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-[#F8FAFC] text-[#111827] px-6 py-20" id="ourteam">
      <div className="max-w-6xl mx-auto">
        {teamSections.map((section, index) => (
          <div key={index} className="mb-12" data-aos="fade-up">
            <h3 className="text-center text-2xl font-semibold text-[#2563EB] mb-6">
              {section.title}
            </h3>

            {section.title === "Leadership Team" ? (
              // Special Layout for Leadership Team
              <div className="flex flex-col items-center">
                {/* CEO (Top Center) */}
                <div className="max-w-md w-full mb-6">
                  <div
                    className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB]
                              hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <img
                      src={section.members[0].img}
                      alt={section.members[0].name}
                      className="h-20 w-20 rounded-full object-cover border-2 border-[#2563EB] mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#1E3A8A]">
                        {section.members[0].name}
                      </h4>
                      <p className="text-[#2563EB] text-sm font-medium mb-2">
                        {section.members[0].role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {section.members[0].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* COO & CFO (Side by Side) */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
                  {section.members.slice(1).map((member, i) => (
                    <div
                      key={i}
                      className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB]
                              hover:shadow-lg hover:scale-105 transition-all"
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-16 w-16 rounded-full object-cover border-2 border-[#2563EB] mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-[#1E3A8A]">
                          {member.name}
                        </h4>
                        <p className="text-[#2563EB] text-sm font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Default Layout for Other Sections
              <div className="grid md:grid-cols-2 gap-6">
                {section.members.map((member, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB]
                            hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-16 w-16 rounded-full object-cover border-2 border-[#2563EB] mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#1E3A8A]">
                        {member.name}
                      </h4>
                      <p className="text-[#2563EB] text-sm font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
