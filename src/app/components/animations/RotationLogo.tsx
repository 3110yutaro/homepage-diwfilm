"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface RotationLogoProps {
  onAnimationComplete: () => void;
}

export const RotationLogo = ({ onAnimationComplete }: RotationLogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // アニメーション開始（即時）
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    // フェードアウト開始
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1200);

    // 非表示にして、親コンポーネントに完了を通知
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      onAnimationComplete();
    }, 1700);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onAnimationComplete]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-background ${isFadingOut ? 'animate-fade-out' : ''}`}
    >
      <div className={isAnimating ? 'animate-pop-and-spin' : 'opacity-0'}>
        <Image
          src="/assets/rotation_animation_logo.png"
          alt="DIW Film Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
