import React, { useState, useEffect } from 'react';

export default function ChaseGame({ onCaught }) {
  const [pos, setPos] = useState({ top: 100, left: 100 });
  const [moveCount, setMoveCount] = useState(0);
  const maxMoves = 4;

  const moveRandom = () => {
    if (moveCount >= maxMoves) return;

    const newTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 150));
    setPos({ top: newTop, left: newLeft });
    setMoveCount((prev) => prev + 1);
  };

  // ✅ Sau khi đủ lượt, tự động chuyển sau 1 giây
  useEffect(() => {
    if (moveCount >= maxMoves) {
      const timer = setTimeout(() => {
        onCaught();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [moveCount, onCaught]);

  const remainingMoves = maxMoves - moveCount;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Hướng dẫn */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">🎮 Di chuột để tóm lấy trái tim!</h2>

      </div>

      {/* Nút chase */}
      <div
        className={`absolute px-5 py-3 rounded-full shadow-lg text-lg font-semibold transition-all duration-300 select-none animate-pulse ${moveCount >= maxMoves
          ? 'bg-green-500 text-white cursor-pointer'
          : 'bg-pink-500 hover:bg-pink-600 text-white cursor-pointer'
          }`}
        style={{ top: pos.top, left: pos.left }}
        onClick={onCaught}
        onMouseEnter={moveRandom}
      >
        💖 Bắt em đi!
      </div>

      {/* Hiệu ứng khi hết lượt */}
      {moveCount >= maxMoves && (
        <div className="absolute inset-0 flex items-center justify-center bg-pink-400 bg-opacity-40 pointer-events-none">
          <div className="text-center text-white">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-3xl font-bold mb-2">Đã bắt được!</h3>
            <p className="text-xl">Đang chuẩn bị quà sinh nhật...</p>
          </div>
        </div>
      )}
    </div>
  );
}
