import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { contactDetails } from "../data/contactData";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="contactus"
      className="bg-[#F8FAFC] text-[#111827] min-h-screen px-6 py-25"
    >
      <div className="max-w-5xl mx-auto">
        {/* Company Overview */}
        <p
          className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
        >
          Established in 2018, <strong>MRB SOLUTIONS 360</strong> stands as a
          trusted partner in IT, software development, civil engineering, and
          defense supply solutions. With a focus on{" "}
          <span className="font-medium text-[#2563EB]">innovation</span> and{" "}
          <span className="font-medium text-[#2563EB]">reliability</span>, we
          deliver advanced technology and infrastructure services to both
          government and private sectors, ensuring quality and excellence in
          every project.
        </p>

        {/* Separate Contact Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {contactDetails.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border border-[#60A5FA] hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-[#EFF6FF] p-3 rounded-full">
                  <ion-icon
                    name={item.icon}
                    class="text-[#2563EB] text-xl"
                  ></ion-icon>
                </div>
                <h4 className="text-sm font-semibold text-[#1E3A8A]">
                  {item.label}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <div
          className="bg-white p-6 rounded-xl shadow-md border border-[#E5E7EB] max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-lg font-semibold text-[#1E3A8A] mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            For any queries, collaborations, or project discussions, please fill
            out our contact form or reach us directly through phone or email.
            Our team will get back to you promptly.
          </p>
          <p className="text-[#2563EB] text-sm font-medium mb-6">
            We value your time and ensure a quick response!
          </p>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] min-h-[120px]"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2563EB] hover:bg-[#60A5FA] text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
