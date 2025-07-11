import React, { useState, useRef, useEffect } from 'react';
import { Heart, Star, Gift, Music, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import BirthdayCakePage from './BirthdayCakePage';
import Vy1 from '../../public/images/vy.jpg';
import Vy2 from '../../public/images/vy2.jpg';
import Vy3 from '../../public/images/vy3.jpg';
import HappyBirthday from '../assets/audio/HappyBirthday.mp3';

// Danh sách ảnh cục bộ
const images = [
  { src: Vy1, alt: 'Vy 1', caption: 'Luôn xinh đẹp và rạng rỡ ✨' },
  { src: Vy2, alt: 'Vy 2', caption: 'Nụ cười tỏa nắng 🌞' },
  { src: Vy3, alt: 'Vy 3', caption: 'Cô gái đáng yêu nhất 💖' },
];

export default function BirthdayBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMusicButton, setShowMusicButton] = useState(true);
  const audioRef = useRef(null);

  const startAudio = () => {
    if (audioRef.current && !isAudioStarted) {
      audioRef.current.play().then(() => {
        setIsAudioStarted(true);
        setShowMusicButton(false);
      }).catch((err) => {
        console.warn('Không thể phát nhạc:', err);
      });
    }
  };

  // Thử phát nhạc tự động
  useEffect(() => {
    if (audioRef.current && !isAudioStarted) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsAudioStarted(true);
          setShowMusicButton(false);
        }).catch((err) => {
          console.warn('Autoplay bị chặn:', err);
        });
      }
    } else if (!audioRef.current) {
      console.warn('audioRef.current is null');
    }
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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

  const pages = [
    // Cover page
    {
      type: 'cover',
      content: (
        <div className="relative h-full bg-gradient-to-br from-pink-400 via-purple-400 to-rose-500 flex flex-col items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
              </div>
            ))}
          </div>
          <div className="absolute top-8 left-8 animate-bounce">
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="absolute top-12 right-8 animate-pulse">
            <Heart className="w-8 h-8 text-pink-300" />
          </div>
          <div className="absolute bottom-12 left-8 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <Gift className="w-8 h-8 text-purple-300" />
          </div>
          <div className="absolute bottom-8 right-8 animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="text-center z-10 p-8 backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20">
            <div className="flex items-center justify-center mb-6">

              <div className="mx-4">
                <div className="text-6xl animate-pulse">🎂</div>
              </div>

            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              💖 Nhật ký sinh nhật 18 💖
            </h1>
            <p className="text-2xl font-medium opacity-90 mb-6">Tzy xinh đẹp</p>
            <div className="flex justify-center space-x-4">
              {['🎂', '🎉', '🎈', '🌟', '💝'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-4xl animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 1
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-pink-50 via-white to-purple-50 p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center space-y-8">
            <div className="inline-block p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-lg">
              <div className="text-6xl">🎂</div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Sinh nhật lần thứ 18! 🎂
            </h2>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hôm nay là sinh nhật lần thứ 18 của Thảo Vy
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl shadow-lg">
                <p className="text-lg text-pink-700 font-semibold leading-relaxed">
                  Chúc em tuổi mới thật nhiều niềm vui, xinh đẹp và tràn đầy yêu thương như bây giờ
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              {['❤️', '⭐', '💫'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-3xl animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 2
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
          <div className="relative z-10 text-center space-y-8">
            <div className="inline-block p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full shadow-lg">
              <Heart className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Đôi lời muốn nói
            </h2>
            <div className="space-y-6 max-w-lg mx-auto">
              <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Có những điều anh không thể diễn tả bằng lời, nhưng mỗi ánh mắt anh nhìn em, mỗi lần anh nắm tay em thật chặt… đều là cách anh muốn nói rằng:
                  <span className="text-purple-600 font-bold"> "Anh yêu Vy nhiều lắm."</span>
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cuộc sống sẽ còn nhiều năm nữa, nhiều ngã rẽ, nhiều thử thách. Nhưng chỉ cần em vẫn ở đó và cạnh anh, thì dù có thế nào, anh cũng sẵn sàng bước tiếp.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              {['😘', '💝', '🌹'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-3xl animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Page 3
    {
      type: 'content',
      content: (
        <div className="h-full bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center space-y-8">
            <div className="inline-block p-6 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full shadow-lg">
              <Star className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Lời chúc từ trái tim
            </h2>
            <div className="space-y-6 max-w-lg mx-auto">
              <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chúc em một sinh nhật thật bình yên và hạnh phúc, không chỉ hôm nay, mà là mỗi ngày sau đó nữa.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl shadow-lg">
                <p className="text-lg text-blue-700 font-semibold leading-relaxed">
                  Chúc cô gái của anh luôn rạng rỡ, đủ mạnh mẽ để theo đuổi ước mơ, và đủ dịu dàng để sống trọn vẹn với những gì em tin tưởng.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              {['🌈', '💫', '🌺'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-3xl animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    // Photo page
    {
      type: 'photo',
      content: (
        <div className="h-full bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 p-6 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-400 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center space-y-6 w-full max-w-md">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-pink-600" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Kỷ niệm đáng nhớ của Vy
              </h2>
              <Camera className="w-8 h-8 text-pink-600" />
            </div>
            <div
              className="relative group"
              onTouchStart={(e) => {
                const touchStartX = e.touches[0].clientX;
                const handleTouchEnd = (e) => {
                  const touchEndX = e.changedTouches[0].clientX;
                  if (touchStartX - touchEndX > 50) nextImage();
                  if (touchEndX - touchStartX > 50) prevImage();
                  e.target.removeEventListener('touchend', handleTouchEnd);
                };
                e.target.addEventListener('touchend', handleTouchEnd);
              }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl blur-xl opacity-50 transform scale-105"></div>
                <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl border-4 border-pink-200 overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"></div>
                </div>
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-pink-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95 z-10"
              >
                <ChevronRight className="w-6 h-6 text-pink-600" />
              </button>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200">
              <p className="text-lg text-pink-700 font-medium">
                {images[currentImageIndex].caption}
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'bg-pink-600 scale-125 shadow-lg'
                    : 'bg-pink-300 hover:bg-pink-400'
                    }`}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              >
                <div className="text-2xl opacity-20">
                  {['🎂', '🎉', '🎈', '🌸', '💝'][i % 5]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // Final page
    {
      type: 'final',
      content: (
        <div className="h-full bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              >
                <Heart className="w-8 h-8 text-pink-300 opacity-30" />
              </div>
            ))}
          </div>
          <div className="relative z-10 space-y-8 p-8 max-w-2xl">
            <div className="inline-block p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full shadow-lg">
              <div className="text-6xl animate-pulse">💌</div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Lời cuối
            </h2>
            <div className="space-y-6">
              <div className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200">
                <p className="text-2xl font-bold text-pink-700 leading-relaxed">
                  Cảm ơn em – vì đã đến, vì đã ở lại, và vì đã chọn anh giữa muôn vàn ngã rẽ.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl shadow-lg">
                <p className="text-xl text-gray-700 font-medium">
                  Chúc mừng sinh nhật lần thứ ba hai ta bên nhau
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl shadow-lg">
                <p className="text-2xl font-bold text-rose-700">
                  Anh yêu em ❤️
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              {['🥰', '💖', '🌹'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-4xl animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200">
              <p className="text-xl text-pink-600 font-bold">
                Happy 18th Birthday, Vy thúii! 🎉
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Cake page
    {
      type: 'cake',
      content: <BirthdayCakePage />
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-rose-200 p-4 relative overflow-hidden">
      {showMusicButton && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={startAudio}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
          >
            <Music className="w-5 h-5" />
            <span>Phát nhạc sinh nhật 🎶</span>
          </button>
        </div>
      )}
      <audio ref={audioRef} src={HappyBirthday} loop preload="auto" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div className="text-3xl opacity-10">
              {['🎂', '🎉', '🎈', '🌸', '💝', '⭐', '💕', '🌹', '✨', '🎁', '🦋', '🌟'][i]}
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black/20 transform translate-x-3 translate-y-3 rounded-3xl blur-lg"></div>
        <div className="relative w-[360px] sm:w-[420px] md:w-[520px] h-[540px] sm:h-[600px] bg-white rounded-3xl shadow-2xl border-4 border-pink-300 overflow-hidden backdrop-blur-sm">
          <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-pink-500 border-r-4 border-pink-600 shadow-inner">
            <div className="absolute top-4 left-1 w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-1 w-4 h-4 bg-white/30 rounded-full"></div>
          </div>
          <div className={`ml-6 h-full transition-all duration-500 ${isFlipping ? 'scale-95 opacity-60 blur-sm' : 'scale-100 opacity-100'}`}>
            {pages[currentPage].content}
          </div>
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-white font-medium transition-all transform ${currentPage === 0
              ? 'bg-gray-300 cursor-not-allowed opacity-50'
              : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 hover:scale-105 active:scale-95 shadow-lg'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Trước</span>
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-white font-medium transition-all transform ${currentPage === pages.length - 1
              ? 'bg-gray-300 cursor-not-allowed opacity-50'
              : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 hover:scale-105 active:scale-95 shadow-lg'
              }`}
          >
            <span>Tiếp</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                  ? 'bg-pink-600 scale-125 shadow-lg'
                  : 'bg-pink-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}