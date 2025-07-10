import React, { useState, useEffect } from 'react';
import BanhSinhNhat from '../../public/images/banhsinhnhat.jpg';
import SurpriseImage from '../../public/images/special-surprise.jpg';

export default function BirthdayCakePage() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showImage, setShowImage] = useState(false);

  const handleBlowCandles = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
    }
  };

  useEffect(() => {
    if (candlesBlown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (candlesBlown && countdown === 0) {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [candlesBlown, countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col justify-center items-center px-4 text-center">
      {/* Chỉ hiển thị tiêu đề khi chưa show ảnh */}
      {!showImage && (
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          🎂 Thổi nến sinh nhật 🎂
        </h2>
      )}

      {/* Bánh sinh nhật */}
      {!showImage && (
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 mb-6">
          <img
            src={BanhSinhNhat}
            alt="Birthday Cake"
            className="w-full h-full object-contain"
          />


          {!candlesBlown && (
            <>
              <div className="absolute top-4 left-8 w-2 h-10 bg-orange-400 animate-flicker rounded-sm"></div>
              <div className="absolute top-4 right-8 w-2 h-10 bg-orange-400 animate-flicker rounded-sm"></div>
            </>
          )}
        </div>
      )}

      {/* Nút thổi nến */}
      {!candlesBlown && !showImage && (
        <button
          onClick={handleBlowCandles}
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-transform active:scale-95"
        >
          💨 Thổi nến
        </button>
      )}

      {/* Đếm ngược */}
      {candlesBlown && !showImage && (
        <p className="mt-4 text-pink-700 text-lg font-medium animate-pulse">
          Nhắm mắt lại và ước nào... {countdown}
        </p>
      )}

      {/* Hình ảnh bất ngờ */}
      {showImage && (
        <div className="flex flex-col items-center text-center mt-[-40px]">
          <img
            src={SurpriseImage}
            alt="Surprise"
            className="w-auto max-w-[350px] max-h-[300px] object-contain rounded-lg shadow-lg border-4 border-pink-200 mb-6 transition-transform duration-300 hover:scale-105"
          />


          <p className="text-xs text-gray-500 mb-2">2:29 AM 11/07/2025</p>
          <p className="text-pink-700 font-semibold text-base">
            đây là món quà nhỏ mà to bự anh dành cho bé hehe,<br />
            ngày 31/07 sẽ có món quà siêu to hơn cùng chờ nhenn 🎁
          </p>
        </div>
      )}


      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.7; transform: scaleY(1.3); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        .animate-flicker {
          animation: flicker 0.6s infinite;
        }
      `}</style>
    </div>
  );
}
