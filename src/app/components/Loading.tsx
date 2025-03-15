'use client';

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="relative">
        {/* Planet */}
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse">
          {/* Orbit */}
          <div className="absolute inset-[-15px] border-2 border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}>
            {/* Satellite */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
          
          {/* Second Orbit */}
          <div className="absolute inset-[-30px] border-2 border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '5s' }}>
            {/* Second Satellite */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
          </div>
        </div>

        {/* Stars */}
        <div className="absolute inset-[-50px] -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold animate-pulse">
            Loading...
          </p>
          <p className="text-slate-400 mt-2">Menjelajahi galaksi source code</p>
        </div>
      </div>
    </div>
  );
};

export default Loading; 