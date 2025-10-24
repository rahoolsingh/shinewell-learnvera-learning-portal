import { Users, Award, Building2, Star, Briefcase, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              What Makes LEARNMIZE Different?
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              India's Fastest Growing Coaching Centre For Education
            </h1>
            <p className="text-lg text-gray-600">
              Transform your future with our comprehensive digital education programs. Learn from industry experts and get hands-on experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2 space-y-4">
                <div className="bg-gray-200 rounded-lg aspect-[3/4]"></div>
              </div>
              <div className="col-span-3 flex items-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl aspect-[3/4] w-full shadow-2xl"></div>
              </div>
              <div className="col-span-2 space-y-4">
                <div className="bg-gray-200 rounded-lg aspect-[3/4]"></div>
              </div>
              <div className="col-span-2 space-y-4">
                <div className="bg-gray-200 rounded-lg aspect-[3/4]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {[
            { icon: Users, label: 'Meta', sublabel: 'Partner' },
            { icon: Award, label: 'Microsoft', sublabel: 'Certified' },
            { icon: Building2, label: 'Google', sublabel: 'Partner' },
            { icon: Star, label: 'Amazon', sublabel: 'Associate' },
            { icon: Briefcase, label: 'TCS', sublabel: 'Corporate' },
            { icon: GraduationCap, label: 'NASSCOM', sublabel: 'Member' }
          ].map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <partner.icon className="w-8 h-8 text-gray-600 mb-2" />
              <span className="text-sm font-semibold text-gray-800">{partner.label}</span>
              <span className="text-xs text-gray-500">{partner.sublabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
