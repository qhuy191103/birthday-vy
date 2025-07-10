import React, { useState } from 'react';
import BirthdayCakePage from './BirthdayCakePage';
export default function BirthdayBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    // Cover page
    {
      type: 'cover',
      content: (
        <div className="relative h-full bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 flex flex-col items-center justify-center text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 animate-pulse"><span className="text-3xl">⭐</span></div>
          <div className="absolute top-6 right-6 animate-bounce"><span className="text-2xl">💖</span></div>
          <div className="absolute bottom-8 left-8 animate-pulse"><span className="text-3xl">✨</span></div>
          <div className="absolute bottom-6 right-4 animate-bounce"><span className="text-3xl">🎁</span></div>

          {/* Main content */}
          <div className="text-center z-10 p-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl animate-bounce">👑</span>
              <span className="text-5xl mx-2">🎂</span>
              <span className="text-5xl animate-bounce">👑</span>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-shadow-lg">
              💖Nhật kí sinh nhật 18💖
            </h1>
            <p className="text-xl font-medium opacity-90">Tzy xinh đẹp</p>
            <div className="mt-6 flex justify-center space-x-2">
              <span className="text-3xl animate-bounce">🎂</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎈</span>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

      )
    },

    // Page 1
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-pink-50 to-white p-8 flex flex-col justify-center relative">
          <div className="absolute inset-4 border-2 border-pink-200 rounded-lg border-dashed opacity-50"></div>
          <div className="text-center space-y-6 z-10">
            <div className="flex justify-center space-x-2 mb-4">
              <span className="text-4xl">🌸</span>
              <span className="text-4xl">🎊</span>
              <span className="text-4xl">🌸</span>
            </div>
            <h2 className="text-2xl font-bold text-pink-700 mb-4">Sinh nhật lần thứ 18! 🎂</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-3">
              <p>Hôm nay là sinh nhật lần thứ 18 của Thảo Zy</p>
              <p className="text-pink-600 font-semibold">Chúc em tuổi mới thật nhiều niềm vui, xinh đẹp và tràn đầy yêu thương như bây giờ</p>
            </div>
            <div className="flex justify-center space-x-3 mt-6">
              <span className="text-2xl animate-pulse">❤️</span>
              <span className="text-2xl animate-pulse">⭐</span>
              <span className="text-2xl animate-pulse">❤️</span>
            </div>
          </div>
        </div>
      )
    },

    // Page 2
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex flex-col justify-center relative">
          <div className="absolute top-6 left-6">
            <div className="w-16 h-16 bg-pink-200 rounded-full opacity-20"></div>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="w-20 h-20 bg-purple-200 rounded-full opacity-20"></div>
          </div>
          <div className="text-center space-y-6 z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 p-4 rounded-full">
                <span className="text-4xl">💕</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Đôi lời mún nói</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>Có những điều anh không thể diễn tả bằng lời, nhưng mỗi ánh mắt anh nhìn em, mỗi lần anh nắm tay em thật chặt… đều là cách anh muốn nói rằng: <span className="text-purple-600 font-semibold">"Anh yêu Vy nhiều lắm."</span></p>
              <p>Cuộc sống sẽ còn nhiều năm nữa, nhiều ngã rẽ, nhiều thử thách. Nhưng chỉ cần em vẫn ở đó và cạnh anh, thì dù có thế nào, anh cũng sẵn sàng bước tiếp.</p>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
              <span className="text-2xl animate-bounce">😘</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>💝</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌹</span>
            </div>
          </div>
        </div>
      )
    },

    // Page 3
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col justify-center relative">
          <div className="absolute top-6 right-6"><div className="w-12 h-12 bg-blue-200 rounded-full opacity-30"></div></div>
          <div className="absolute bottom-6 left-6"><div className="w-16 h-16 bg-purple-200 rounded-full opacity-30"></div></div>

          <div className="text-center space-y-6 z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <span className="text-4xl">🌟</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Lời chúc từ trái tim</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>Chúc em một sinh nhật thật bình yên và hạnh phúc, không chỉ hôm nay, mà là mỗi ngày sau đó nữa.</p>
              <p className="text-blue-600 font-semibold">Chúc cô gái của anh luôn rạng rỡ, đủ mạnh mẽ để theo đuổi ước mơ, và đủ dịu dàng để sống trọn vẹn với những gì em tin tưởng.</p>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
              <span className="text-2xl animate-bounce">🌈</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>💫</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌺</span>
            </div>
          </div>
        </div>
      )
    },

    // Photo page
    {
      type: 'photo',
      content: (
        <div className="h-full bg-gradient-to-br from-yellow-50 to-pink-50 p-6 flex flex-col justify-center items-center relative">
          {/* Frame border */}
          <div className="absolute inset-6 border-4 border-pink-300 rounded-lg shadow-inner"></div>

          <div className="text-center space-y-4 z-10">
            <h2 className="text-xl font-bold text-pink-700 mb-4">🌟 Ảnh của em Vy 🌟</h2>

            {/* Actual image */}
            <div className="relative">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg border-4 border-pink-200 overflow-hidden">
                <img
                  src="/images/vy.jpg"
                  alt="Vy"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"></div>
            </div>

            <p className="text-sm text-pink-600 font-medium mt-4">
              Luôn xinh đẹp và rạng rỡ ✨
            </p>
          </div>
        </div>
      )
    },
    // Final page
    {
      type: 'final',
      content: (
        <div className="h-full bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <span key={i} className="absolute text-3xl animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.3 + Math.random() * 0.4
                }}>
                💖
              </span>
            ))}
          </div>

          <div className="z-10 space-y-6 p-8">
            <div className="flex justify-center space-x-2 mb-4"><span className="text-5xl animate-bounce">💌</span></div>
            <h2 className="text-3xl font-bold text-pink-700 mb-4">Lời cuối</h2>
            <div className="text-2xl font-bold text-pink-600 mb-6 leading-relaxed">
              Cảm ơn em – vì đã đến, vì đã ở lại, và vì đã chọn anh giữa muôn vàn ngã rẽ.
            </div>
            <div className="text-xl text-gray-700 mb-4">Chúc mừng sinh nhật lần thứ ba hai ta bên nhau</div>
            <div className="text-2xl font-bold text-pink-700">Anh yêu em ❤️</div>
            <div className="flex justify-center space-x-3">
              <span className="text-3xl animate-bounce">🥰</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.1s' }}>💖</span>
              <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌹</span>
            </div>
            <div className="mb-6 text-lg text-gray-600 font-medium">Happy 18th Birthday, Vy thúii! 🎉</div>
          </div>
        </div>
      )
    },
    {
      type: 'cake',
      content: <BirthdayCakePage />
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 p-4">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-10 transform translate-x-2 translate-y-2 rounded-[20px]"></div>

        <div className="relative w-[340px] sm:w-[400px] md:w-[500px] h-[520px] sm:h-[580px] bg-white rounded-[20px] shadow-2xl border-4 border-pink-300 overflow-hidden">
          <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-pink-400 to-pink-300 border-r-2 border-pink-500"></div>
          <div className={`ml-4 h-full transition-all duration-300 ${isFlipping ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
            {pages[currentPage].content}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <button onClick={prevPage} disabled={currentPage === 0}
            className={`px-4 py-2 rounded-full text-white font-medium transition-all ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 hover:scale-105 active:scale-95'}`}>
            ← Trước
          </button>
          <button onClick={nextPage} disabled={currentPage === pages.length - 1}
            className={`px-4 py-2 rounded-full text-white font-medium transition-all ${currentPage === pages.length - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 hover:scale-105 active:scale-95'}`}>
            Tiếp →
          </button>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}>
            <span className="text-2xl opacity-20">
              {['🎂', '🎉', '🎈', '🌸', '💝', '⭐', '💕', '🌹'][i]}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
