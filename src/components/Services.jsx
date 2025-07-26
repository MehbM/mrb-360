export default function Services() {
  const services = [
    {
      icon: "analytics-outline",
      title: "Business Analytics",
      desc: "Advanced data analytics and business intelligence solutions to drive decision-making.",
    },
    {
      icon: "code-slash-outline",
      title: "Digital Transformation",
      desc: "Modernize your business with cutting-edge technology solutions and digital strategies.",
    },
    {
      icon: "people-outline",
      title: "Strategic Consulting",
      desc: "Expert guidance to develop and implement strategies for sustainable growth.",
    },
  ];

  const expertise = [
    "Software Development (Web, ERP, Mobile Apps, Custom Apps)",
    "Data Services (ETL, Reporting, BI Dashboards)",
    "IT Infrastructure (Setup, Maintenance, Security)",
    "Construction & Civil Engineering",
    "Materials Supply & Project Management",
    "Equipment & Vehicle Supply",
  ];

  return (
    <section
      id="services"
      className="bg-[#F8FAFC] text-[#111827] min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      {/* Services Heading */}
      <h2 className="text-4xl font-bold mb-10 text-[#1E3A8A]">
        Our Core Services
      </h2>

      {/* Modern Light Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full mb-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-[#60a5fa79]"
          >
            <div className="bg-[#EFF6FF] p-4 rounded-full inline-flex items-center justify-center mb-4 ring-2 ring-[#2563EB]/20">
              <ion-icon
                name={service.icon}
                class={`text-[#2563EB] text-3xl`}
              ></ion-icon>
            </div>
            <h3 className="font-bold text-lg text-[#1E3A8A]">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
            {/* <button className="mt-4 text-sm font-medium bg-[#2563EB] hover:bg-[#60A5FA] text-white px-4 py-2 rounded-full transition">
              Learn More
            </button> */}
          </div>
        ))}
      </div>

      {/* Specialized Expertise */}
      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
        Our Specialized Expertise
      </h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 w-full">
        {expertise.map((item, i) => (
          <div
            key={i}
            className="flex items-center bg-white p-4 rounded-lg border border-[#60a5fa79] hover:transition-all"
          >
            <ion-icon
              name="checkmark-circle-outline"
              class="text-[#2563EB] text-xl mr-3"
            ></ion-icon>
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
