'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full">
        {/* Meteor Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-meteor"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent transform -rotate-45" />
            </div>
          ))}
        </div>

        {/* Error Content */}
        <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-lg border border-slate-800 p-8 text-center">
          {/* Warning Icon */}
          <div className="mb-6 relative">
            <div className="w-20 h-20 mx-auto bg-red-500/10 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            {/* Orbiting Star */}
            <div className="absolute inset-[-10px] border-2 border-red-500/20 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-400/50" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            Houston, We Have a Problem!
          </h1>
          
          <p className="text-slate-400 mb-6">
            {error.message || 'Terjadi kesalahan yang tidak diharapkan. Mohon coba lagi.'}
          </p>

          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Coba Lagi
          </button>
        </div>

        {/* Stars Background */}
        <div className="absolute inset-[-100px] -z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error; 