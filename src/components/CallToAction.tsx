export default function CallToAction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12 text-white space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Don't Know What Digital Marketing Is?
              </h2>
              <p className="text-lg opacity-90">
                Join our FREE introductory webinar and discover how digital marketing can transform your career.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>
                  <span className="text-lg">No prior experience needed</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>
                  <span className="text-lg">Learn from industry experts</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>
                  <span className="text-lg">Start your journey today</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition font-bold text-lg">
                LEARN DIGITAL MARKETING FREE
              </button>
            </div>

            <div className="relative h-64 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">13,000+</div>
            <div className="text-gray-600 font-semibold">Students Trained</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600 font-semibold">Average Rating</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-gray-600 font-semibold">Company Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
