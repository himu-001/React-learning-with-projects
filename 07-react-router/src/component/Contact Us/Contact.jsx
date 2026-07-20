export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-800">
            Let's Work Together 🚀
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Have a project in mind or just want to say hello? Fill out the form
            and I'll get back to you soon.
          </p>

          {/* Address */}
          <div className="flex items-center mt-10">
            <svg
              className="w-7 h-7 text-orange-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <span className="ml-4 font-medium text-gray-700">
              Chandigarh, India
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-5">
            <svg
              className="w-7 h-7 text-orange-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.949.684l1.498 4.493a1 1 0 01-.503 1.21l-2.256 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>

            <span className="ml-4 font-medium text-gray-700">
              +91 XXXXX XXXXX
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center mt-5">
            <svg
              className="w-7 h-7 text-orange-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>

            <span className="ml-4 font-medium text-gray-700">
              your@email.com
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">Connect With Me</h2>

            <div className="flex gap-4">
              <a
                href="https://github.com/himu-001"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-black transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/himanshu-kumar-631973378"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="bg-white rounded-xl shadow-sm p-8 space-y-5">
          <div>
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-medium">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-medium">
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
