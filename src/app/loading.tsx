export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-t-2 border-pink-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 border-t-2 border-blue-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        <p className="text-gray-400 animate-pulse">로딩중...</p>
      </div>
    </div>
  );
} 