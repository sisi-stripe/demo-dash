import React, { useEffect, useRef } from 'react';

interface ShimmerWaveProps {
  className?: string;
}

export default function ShimmerWave({ className = '' }: ShimmerWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Particle configuration
    const particles: Array<{
      x: number;
      y: number;
      baseY: number;
      size: number;
      speed: number;
      offset: number;
    }> = [];

    // Create particle grid (25x25)
    const cols = 25;
    const rows = 25;
    const spacingX = canvas.width / cols;
    const spacingY = canvas.height / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * spacingX + spacingX / 2,
          y: j * spacingY + spacingY / 2,
          baseY: j * spacingY + spacingY / 2,
          size: 3,
          speed: 0.4,
          offset: 0,
        });
      }
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      particles.forEach((particle) => {
        // Wave motion
        const waveY = Math.sin(time * particle.speed + particle.offset + particle.x * 0.01) * 3;
        const waveX = Math.cos(time * particle.speed + particle.offset + particle.y * 0.01) * 2;

        // Scale wave that moves across the canvas from left to right
        const waveSpeed = 50;
        const waveProgress = (time * waveSpeed) % (canvas.width + canvas.width * 0.5);
        const distanceFromWave = Math.abs(particle.x - waveProgress);
        const waveWidth = canvas.width * 0.2;
        const scaleAmount = distanceFromWave < waveWidth
          ? (1 - distanceFromWave / waveWidth)
          : 0;
        const scale = 1 + scaleAmount * 3;

        // Interpolate color from purple to red based on scale
        // Purple: #9A9AFE (154, 154, 254) -> Red: #FF0000 (255, 0, 0)
        const r = Math.round(154 + scaleAmount * (255 - 154));
        const g = Math.round(154 - scaleAmount * 154);
        const b = Math.round(254 - scaleAmount * 254);

        // Shimmer effect (opacity variation)
        const shimmer = 0.3 + Math.sin(time * 2 + particle.offset) * 0.15;

        // Draw particle with scale and color transition
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${shimmer})`;
        ctx.beginPath();
        ctx.arc(
          particle.x + waveX,
          particle.baseY + waveY,
          particle.size * scale,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.4, transform: 'skewY(-12deg)' }}
      />
    </div>
  );
}
