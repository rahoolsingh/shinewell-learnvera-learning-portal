export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Live Sessions</h3>
                <p className="text-sm opacity-90">Interactive learning with expert instructors</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-500"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Hands-on Projects</h3>
                <p className="text-sm opacity-90">Build real-world applications</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-500"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Industry Mentorship</h3>
                <p className="text-sm opacity-90">Learn from working professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
