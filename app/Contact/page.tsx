import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>

        <p className="max-w-3xl text-lg font-light leading-8 text-foreground/80">
          If you are interested in working together or have any questions, feel
          free to reach out.
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="mailto:your@email.com"
          className="flex items-center gap-3 text-lg hover:opacity-70 transition"
        >
          <FiMail className="w-5 h-5" />
          apostolos052@gmail.com
        </a>

        <Link
          href="https://github.com/UnLakhs"
          target="_blank"
          className="flex items-center gap-3 text-lg hover:opacity-70 transition"
        >
          <FaGithub className="w-5 h-5" />
          GitHub
        </Link>

        <Link
          href="https://linkedin.com/in/apostolos-kyrgidis"
          target="_blank"
          className="flex items-center gap-3 text-lg hover:opacity-70 transition"
        >
          <FaLinkedin className="w-5 h-5" />
          LinkedIn
        </Link>
      </div>

      <div className="flex mt-10 justify-between">
        <Link href="/Education" className="hover:opacity-70 transition">
          ← Education
        </Link>
      </div>
    </section>
  );
};

export default Contact;
