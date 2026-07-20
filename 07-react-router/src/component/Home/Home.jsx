import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="flex flex-col-reverse items-center justify-between py-16 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0">
          <h3 className="text-orange-600 font-semibold text-lg mb-2">
            Welcome 👋
          </h3>

          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-orange-600">Himanshu</span>
          </h1>

          <h2 className="text-2xl text-gray-600 mt-4">
            A Passionate Developer
          </h2>

          <p className="text-gray-500 mt-6 leading-7">
            I build responsive, modern and user-friendly web applications using
            React, Node.js, Express and MongoDB. I enjoy solving problems and
            continuously learning new technologies.
          </p>

          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/himu-001"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Projects
            </a>

            <Link
              to="/contact"
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="w-full max-w-md"
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/006/552/084/original/isometric-style-illustration-about-a-web-programmer-working-with-his-computer-free-vector.jpg"
            alt="Developer Illustration"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <img
          className="mx-auto w-full max-w-sm"
          loading="lazy"
          src="https://static.vecteezy.com/system/resources/previews/007/938/815/original/concept-illustration-programmer-engineer-with-laptop-sitting-at-the-office-desk-holding-a-pen-while-coding-and-developing-flat-cartoon-style-free-vector.jpg"
          alt="Programming Illustration"
        />

        <h2 className="text-4xl font-bold mt-10">
          Passionate About Building Great Software
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          From frontend interfaces to backend APIs, I enjoy creating efficient,
          scalable and visually appealing web applications.
        </p>
      </section>
    </div>
  );
}

export default Home;
