export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MRB Solutions 360. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-[#2563EB] hover:text-[#60A5FA] transition"
          >
            <ion-icon name="logo-twitter" class="text-xl"></ion-icon>
          </a>
          <a
            href="#"
            className="text-[#2563EB] hover:text-[#60A5FA] transition"
          >
            <ion-icon name="logo-linkedin" class="text-xl"></ion-icon>
          </a>
          <a
            href="mailto:info@mrbsolutions360.com"
            className="text-[#2563EB] hover:text-[#60A5FA] transition"
          >
            <ion-icon name="mail-outline" class="text-xl"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
