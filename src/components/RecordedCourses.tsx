import { Play } from 'lucide-react';

export default function RecordedCourses() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          Recorded Courses Built For Outcomes
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Business', 'Creative', 'Tech & IT', 'Marketing'].map((category, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                idx === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <div className="text-sm font-semibold mb-2">MASTERCLASS</div>
              <h3 className="text-3xl font-bold mb-4">Social Media Marketing</h3>
              <div className="bg-white text-blue-600 inline-block px-4 py-2 rounded-lg mb-4">
                <Play className="w-6 h-6" />
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li>✓ Complete social media strategy</li>
              <li>✓ Facebook & Instagram marketing</li>
              <li>✓ Content creation techniques</li>
              <li>✓ Analytics and optimization</li>
            </ul>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Start Learning
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Complete Courses For Outcomes
            </h3>
            <div className="space-y-4">
              {[
                'Digital Marketing Fundamentals',
                'SEO & Content Marketing',
                'Email Marketing Mastery',
                'Social Media Advertising',
                'Analytics & Reporting'
              ].map((course, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                  <span className="font-semibold text-gray-800">{course}</span>
                  <Play className="w-5 h-5 text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
