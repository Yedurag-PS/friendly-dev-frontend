import { section } from "framer-motion/client";
import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-30 h-30 rounded-full object-cover border-4 border-blue-500 shadow-md "
      />
      <div>
        <h2 className="text-2xl font-old text-white mb-2">👋 About Me</h2>
        <p className="text-gray-200 mb-4 max-w 4xl">
          I'm Yedu. I'm a passionate Full Stack Developer who enjoys building modern,
          responsive, and user-friendly web applications. I love exploring new
          technologies, solving problems, and turning ideas into functional
          digital experiences
        </p>
        <Link to="/about" className="inline-block text-blue-400 hover:underline text-sm">Learn more about me</Link>
      </div>
    </section>
  );
};

export default AboutPreview;
