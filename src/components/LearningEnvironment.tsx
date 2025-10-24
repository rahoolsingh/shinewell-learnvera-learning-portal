export default function LearningEnvironment() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Where Learning Happens
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Classroom {idx + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white space-y-6">
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-bold">
                NEW VIDEO
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold">
                Office Tour
              </h3>
              <p className="text-lg opacity-90">
                Take a virtual tour of our state-of-the-art learning facilities. See where innovation meets education.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition font-bold">
                Watch Tour
              </button>
            </div>
            <div className="relative aspect-video lg:aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
