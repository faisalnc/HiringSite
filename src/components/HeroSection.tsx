"use client";

export default function HeroSection() {
  const name = "Faisal Nazib";
  const title = "Aspiring Cyber Security Analyst";
  const description =
    "Aspiring cybersecurity professional with a strong foundation in IT, passionate about securing digital systems and building modern web applications.";

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-blue-50"
    >
      {" "}
      {/* Left Text */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {"Hi, I'm "}
          <span className="text-blue-600">{name}</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-3">
          {title}
        </h2>
        <p className="text-gray-700 max-w-lg mb-6 leading-relaxed">
          {description}
        </p>

        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/faisal-nazib-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition inline-block"
          >
            Hire Me
          </a>

          <a
            href="/FaisalNazibCV.pdf"
            download
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* Image */}
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
        <img
          src="/images/profile-hero.png"
          alt="Profile"
          className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-white"
        />
      </div>
    </section>
  );
}
