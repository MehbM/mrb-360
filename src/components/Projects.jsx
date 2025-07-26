import { Link } from "react-router-dom";

export default function Projects() {
  const projectCategories = [
    {
      icon: {
        default: "shield-checkmark-outline",
        hover: "shield-outline",
      },
      title: "Defense & Government Projects",
      projects: [
        "Bangladesh Navy (NSSD): Cyber Drill Subscription, S-101 Validation Software, Spare Parts Supplies.",
        "Bangladesh Army (BSD): Thiotab Water Cleaning Tablet Supply.",
      ],
    },
    {
      icon: {
        default: "desktop-outline",
        hover: "laptop-outline",
      },
      title: "Software Projects",
      projects: [
        "Media Analytics Tool for Rumor Scanner Bangladesh",
        "Civilian Personnel Management Software",
      ],
    },
    {
      icon: {
        default: "construct-outline",
        hover: "hammer-outline",
      },
      title: "Construction Projects",
      projects: [
        "Coastal Crisis Management Centres (25 Nos)",
        "Multipurpose Cyclone Shelters (14 Nos)",
        "Shore Pile & Precast Pile at NKFTCL Museum Project",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-[#1E3A8A] to-[#312E81] min-h-screen flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-[#F1F5F9] drop-shadow-md">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projectCategories.map((category, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-2xl border border-white/20 hover:border-[#60A5FA]
                       shadow-lg shadow-[#0F172A]/30 hover:shadow-[#2563EB]/40
                       hover:scale-105 transition-all min-h-[380px] flex flex-col justify-between"
          >
            <div>
              {/* ✅ Main Icon changes on hover */}
              <div className="bg-[#EFF6FF] p-4 rounded-full inline-flex items-center justify-center mb-4 ring-2 ring-[#2563EB]/20 transition-all">
                <ion-icon
                  name={category.icon.default}
                  class="group-hover:hidden text-[#2563EB] text-3xl"
                ></ion-icon>
                <ion-icon
                  name={category.icon.hover}
                  class="hidden group-hover:inline text-[#60A5FA] text-3xl transition-colors"
                ></ion-icon>
              </div>

              <h3 className="font-bold text-lg text-[#1E3A8A] mb-3 group-hover:text-[#2563EB] transition-colors">
                {category.title}
              </h3>

              {/* ✅ Bullet Points with hover accent */}
              <ul className="space-y-3 pl-1">
                {category.projects.map((proj, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 group/item transition-all"
                  >
                    <ion-icon
                      name="chevron-forward-outline"
                      class="text-gray-400 group-hover/item:text-[#2563EB] text-lg mt-0.5 transition-colors"
                    ></ion-icon>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover/item:text-[#2563EB] transition-colors">
                      {proj}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/projects?tab=${category.title.toLowerCase().split(" ")[0]}`}
              className="mt-6 text-md font-medium border border-[#2563EB] text-[#2563EB] 
             hover:bg-[#2563EB] hover:text-white px-4 py-2 rounded-full transition-all cursor-pointer flex items-center space-x-2"
            >
              <span>Learn More</span>
              <ion-icon
                name="arrow-forward-circle-outline"
                class="text-lg"
              ></ion-icon>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
