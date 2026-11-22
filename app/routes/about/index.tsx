const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-16 py-16 bg-gray-900">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md "
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Yedu 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I'm a passionate Full Stack Developer who enjoys building modern,
            responsive, and user-friendly web applications. I love exploring new
            technologies, solving problems, and turning ideas into functional
            digital experiences. I'm continuously learning and improving my
            skills through hands-on projects, with a strong interest in creating
            clean, efficient, and meaningful solutions.
          </p>
        </div>
      </div>
      {/* Bio section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Full Stack Developer | React & Node.js Enthusiast 🚀 Passionate about
          building web applications, exploring new technologies, and turning
          ideas into reality. Always learning, always building, and striving to
          become a better developer.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          "React",
          "Next.js",
          "Vue",
          "Tailwind CSS",
          "Node.js",
          "Laravel",
          "Prisma",
          "MongoDB",
          "PostgreSQL",
          "Appwrite",
          "Docker",
        ].map((tech) =>(
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
          {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
