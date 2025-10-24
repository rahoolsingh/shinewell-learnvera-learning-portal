import { CheckCircle2 } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Complete Digital Marketing',
      subtitle: 'In Collaboration with E-learning Platform',
      color: 'from-purple-500 to-blue-500',
      features: [
        'Google Certifications',
        'Live Interactive Classes',
        'Placement Assistance',
        'Industry Projects'
      ]
    },
    {
      title: 'Full Stack Development',
      subtitle: 'Master Web Development',
      color: 'from-green-400 to-teal-500',
      features: [
        'MERN Stack Training',
        'Real-world Projects',
        '100% Job Assistance',
        'Lifetime Access'
      ]
    },
    {
      title: 'Data Science & AI',
      subtitle: 'Python, Machine Learning & More',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Python Programming',
        'ML & AI Training',
        'Industry Mentorship',
        'Certification'
      ]
    },
    {
      title: 'UI/UX Design',
      subtitle: 'Design Beautiful Interfaces',
      color: 'from-orange-400 to-red-500',
      features: [
        'Figma & Adobe XD',
        'Portfolio Building',
        'Design Thinking',
        'Job Support'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Marketing Courses
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our comprehensive programs designed for career success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
