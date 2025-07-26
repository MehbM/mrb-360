import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Allow re-animation
    });

    AOS.refresh(); //  Refresh when navigating to this page
  }, []);

  const coreValues = [
    { text: "Integrity", icon: "shield-checkmark-outline" },
    { text: "Innovation", icon: "bulb-outline" },
    { text: "Quality", icon: "star-outline" },
    { text: "Client Satisfaction", icon: "happy-outline" },
    { text: "Collaborative Growth", icon: "people-outline" },
  ];

  const workApproach = [
    { step: "Feasibility Study", icon: "search-outline" },
    { step: "Planning & Estimation", icon: "calculator-outline" },
    { step: "Execution & Supervision", icon: "construct-outline" },
    {
      step: "Client Feedback & Final Delivery",
      icon: "checkmark-done-outline",
    },
  ];

  return (
    <section id="aboutus" className="bg-[#F8FAFC] text-[#111827] px-6 py-25">
      {/* Who We Are */}
      <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
        {/* <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Who We Are</h2> */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Founded in 2018 by{" "}
          <span className="font-semibold text-[#2563EB]">
            Capt. M. A. Rouf (Retd.)
          </span>
          , <strong className="text-[#1E3A8A]">MRB Solutions 360</strong> is a
          trusted name in{" "}
          <span className="font-medium text-[#2563EB]">
            IT, software development
          </span>
          , and{" "}
          <span className="font-medium text-[#2563EB]">
            civil engineering solutions
          </span>
          . The company also plays a significant role in{" "}
          <span className="font-medium text-[#2563EB]">defence supply</span>,
          serving the
          <strong className="text-[#1E3A8A]"> Bangladesh Navy</strong> and{" "}
          <strong className="text-[#1E3A8A]">Army</strong> with reliable
          products and services.
        </p>
      </div>

      {/* Vision & Mission */}
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16"
        data-aos="fade-up"
      >
        <div
          className="bg-white p-6 rounded-2xl shadow-md border border-[#60a5fa79] 
                        hover:shadow-lg"
        >
          <div className="bg-[#EFF6FF] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <ion-icon
              name="eye-outline"
              class="text-[#2563EB] text-3xl"
            ></ion-icon>
          </div>
          <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">Vision</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To be a trusted partner in software, data, and construction
            services— empowering development through innovation.
          </p>
        </div>

        <div
          className="bg-white p-6 rounded-2xl shadow-md border border-[#60a5fa79] 
                        hover:shadow-lg "
        >
          <div className="bg-[#EFF6FF] p-4 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <ion-icon
              name="flag-outline"
              class="text-[#2563EB] text-3xl"
            ></ion-icon>
          </div>
          <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">Mission</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Deliver quality IT & infrastructure solutions with integrity and a
            commitment to national development.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-[#1E3A8A] mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border
                         border-[#60A5FA] hover:shadow-md 
                          flex flex-col items-center"
            >
              <div className="bg-[#EFF6FF] p-3 rounded-full mb-3">
                <ion-icon
                  name={value.icon}
                  class="text-[#2563EB] text-2xl"
                ></ion-icon>
              </div>
              <p className="text-sm font-medium text-[#1E3A8A]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Approach - Horizontal Progress Flow */}
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-[#1E3A8A] mb-8">
          Our Work Approach
        </h3>
        <div className="flex justify-between items-center relative px-4">
          {/* Horizontal connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#E5E7EB]"></div>

          {workApproach.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center w-1/4"
            >
              <div
                className="bg-[#2563EB] text-white w-12 h-12 rounded-full flex items-center justify-center 
                           shadow-md hover:scale-110 hover:bg-[#60A5FA] transition-all"
              >
                <ion-icon name={step.icon} class="text-xl"></ion-icon>
              </div>
              <p className="mt-3 text-sm text-gray-600 max-w-[120px] leading-snug">
                {step.step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
