export default function Opportunities() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            THE OPPORTUNITIES
          </h2>
          <p className="text-xl text-gray-600">
            Everyone wants their children to succeed
          </p>
          <p className="text-lg text-gray-600">
            Its Essential For Everyone to Depend on Digital Education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
