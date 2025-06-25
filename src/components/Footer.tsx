import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0c2340] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-bold text-orange-400 mb-2">
            Gakk Media (BD) Limited
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Union Heights (Level-5),
            <br />
            55-2, Bir Uttam Qazi Nuruzzaman Sarak,
            <br />
            West Panthapath, Dhaka-1205,
            <br />
            Bangladesh
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Information</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                › About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                › Digital Platforms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                › Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                › Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Say Hello</h2>
          <p className="text-sm text-gray-300 mb-2">
            <a href="mailto:info@gakkmediabd.com" className="hover:text-white">
              info@gakkmediabd.com
            </a>
          </p>
          <p className="text-sm text-gray-300 mb-4">+88-02 9144526</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/Gakkmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white rounded-full"
            >
              <span className="text-white text-xl">f</span>
            </a>
            <a
              href="https://bd.linkedin.com/company/gakk-media-bd-ltd-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white rounded-full"
            >
              <span className="text-white text-xl">in</span>
            </a>
          </div>
        </div>

        {/* Copyright (aligned left) */}
        <div className="md:col-span-3 text-left text-xs text-white mt-0">
          Copyright © 2013–2024 Gakk Media (BD) Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
