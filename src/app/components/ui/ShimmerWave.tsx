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
      canvas.height = rect.height * 0.8; // Reduce height by 20%
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Particle configuration
    const particles: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      delayX: number;
      delayY: number;
    }> = [];

    // Create particle grid (20x20)
    const cols = 20;
    const rows = 20;
    const spacingX = canvas.width / cols;
    const spacingY = canvas.height / rows;
    const xDelayFactor = 0.3;
    const yDelayFactor = 0.2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: i * spacingX + spacingX / 2,
          y: j * spacingY + spacingY / 2,
          baseX: i * spacingX + spacingX / 2,
          baseY: j * spacingY + spacingY / 2,
          size: 2.4,
          delayX: i * xDelayFactor,
          delayY: j * yDelayFactor,
        });
      }
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const animationDuration = 24; // 24 seconds for full cycle
      const totalRotations = 4; // 1440 degrees = 4 full rotations
      const orbitRadius = Math.min(spacingX, spacingY) * 0.4;

      particles.forEach((particle) => {
        // Calculate delay based on X and Y position
        const delay = particle.delayX + particle.delayY;

        // Calculate rotation angle with delay (negative delay as in CSS)
        const angle = ((time / animationDuration) * Math.PI * 2 * totalRotations - delay) % (Math.PI * 2 * totalRotations);

        // Calculate circular position around base point
        const offsetX = Math.cos(angle) * orbitRadius;
        const offsetY = Math.sin(angle) * orbitRadius;

        const x = particle.baseX + offsetX;
        const y = particle.baseY + offsetY;

        // Shimmer effect (opacity variation)
        const shimmer = 0.5 + Math.sin(time * 2) * 0.2;

        // Draw particle in blurple (#9A9AFE)
        ctx.fillStyle = `rgba(154, 154, 254, ${shimmer})`;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
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
