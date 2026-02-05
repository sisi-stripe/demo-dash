import React from 'react';
import shimmerWaveSvg from '../../../assets/shimmer-wave.svg';

interface ShimmerWaveProps {
  className?: string;
}

export default function ShimmerWave({ className = '' }: ShimmerWaveProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <img
        src={shimmerWaveSvg}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
}
