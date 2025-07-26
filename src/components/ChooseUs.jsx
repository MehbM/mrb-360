export default function ChooseUs() {
  const features = [
    {
      icon: "ribbon-outline",
      title: "Proven Expertise",
      desc: "Over 10 years of experience delivering successful business transformations.",
    },
    {
      icon: "layers-outline",
      title: "360-Degree Approach",
      desc: "Comprehensive solutions that address every aspect of your business operations and strategy.",
    },
    {
      icon: "headset-outline",
      title: "Dedicated Support",
      desc: "24/7 support and ongoing partnership to ensure your continued success and growth.",
    },
  ];

  const stats = [
    { icon: "briefcase-outline", number: "500+", text: "Projects Completed" },
    { icon: "happy-outline", number: "98%", text: "Client Satisfaction" },
    { icon: "people-outline", number: "50+", text: "Expert Team" },
    { icon: "headset-outline", number: "24/7", text: "Support" },
  ];

  return (
    <section
      id="whychoose"
      className="bg-[#F8FAFC] text-[#111827] min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 w-full">
        {/* Left Features */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-[#1E3A8A]">
            Why Choose MRB Solutions 360?
          </h2>
          <div className="space-y-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-[#60a5fa79]"
              >
                <div className="bg-[#EFF6FF] p-3 rounded-full shadow-sm ring-2 ring-[#2563EB]/20">
                  <ion-icon
                    name={item.icon}
                    class="text-[#2563EB] text-2xl"
                  ></ion-icon>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-[#60a5fa79] text-center"
            >
              <div className="bg-[#EFF6FF] w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-3 ring-2 ring-[#2563EB]/20">
                <ion-icon
                  name={item.icon}
                  class="text-[#2563EB] text-2xl"
                ></ion-icon>
              </div>
              <p className="py-5 text-2xl font-bold text-[#1E3A8A]">
                {item.number}
              </p>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
