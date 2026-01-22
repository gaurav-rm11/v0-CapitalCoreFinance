export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}
