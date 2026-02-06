import React from 'react';
import shimmerWaveSvg from '../../../assets/shimmer-wave.svg';

interface ShimmerWaveProps {
  className?: string;
}

export default function ShimmerWave({ className = '' }: ShimmerWaveProps) {
  return (
    <>
      <style>{`
        @keyframes subtleWave {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-3px) translateX(2px);
          }
          50% {
            transform: translateY(0) translateX(0);
          }
          75% {
            transform: translateY(3px) translateX(-2px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        .shimmer-wave-animated {
          animation: subtleWave 6s ease-in-out infinite;
          opacity: 0.4;
        }
      `}</style>
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
        <img
          src={shimmerWaveSvg}
          alt=""
          className="w-full h-full object-contain shimmer-wave-animated"
        />
      </div>
    </>
  );
}
