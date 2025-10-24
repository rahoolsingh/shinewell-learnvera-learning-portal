export default function StatsBar() {
  return (
    <div className="bg-blue-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 text-white text-sm">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Affiliations:</span>
            <span>NIELIT</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">ISO Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Memberships:</span>
            <span>TiE</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Partners:</span>
            <span>TEDx</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">NASSCOM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
