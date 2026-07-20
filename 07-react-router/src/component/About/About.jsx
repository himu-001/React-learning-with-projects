function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-5/12">
            <img
              className="w-full"
              loading="lazy"
              src="https://static.vecteezy.com/system/resources/previews/003/524/750/original/a-man-working-with-laptop-free-vector.jpg"
              alt="Developer"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>

            <p className="mt-6 text-gray-600 leading-8">
              I'm a passionate MERN Stack developer who enjoys building
              responsive, scalable, and user-friendly web applications. I love
              solving programming problems and continuously improving my skills
              in React, Node.js, Express, MongoDB, and Data Structures &
              Algorithms.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              My goal is to build high-quality software, contribute to impactful
              projects, and grow as a full-stack developer while continuously
              learning modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
