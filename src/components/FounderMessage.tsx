export default function FounderMessage() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">
              Founder's Message
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Arjun Tripathi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              "Our mission is to democratize education and make quality learning accessible to everyone.
              We believe that with the right guidance and resources, anyone can achieve their dreams."
            </p>
            <p className="text-gray-300 leading-relaxed">
              "At LEARNMIZE, we're not just teaching skills – we're building futures. Every course is
              designed with real-world applications in mind, ensuring our students are job-ready from day one."
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                Learn More
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition font-semibold">
                View Courses
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
