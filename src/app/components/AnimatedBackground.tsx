"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NUM_POINTS = 40;
const CONNECTION_DISTANCE = 150;
const POINT_SPEED = 0.5;

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initPoints = () => {
      pointsRef.current = Array.from({ length: NUM_POINTS }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * POINT_SPEED,
        vy: (Math.random() - 0.5) * POINT_SPEED,
      }));
    };

    const drawPoints = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Keep points in bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      // Draw connections
      ctx.beginPath();
      pointsRef.current.forEach((point, i) => {
        pointsRef.current.slice(i + 1).forEach((otherPoint) => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.2;
            // Use gradient colors for connections
            const gradient = ctx.createLinearGradient(
              point.x,
              point.y,
              otherPoint.x,
              otherPoint.y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`); // Blue
            gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`); // Cyan
            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      // Draw points with different colors
      pointsRef.current.forEach((point, index) => {
        ctx.beginPath();
        // Alternate between blue and cyan for points
        const color =
          index % 2 === 0
            ? "rgba(59, 130, 246, 0.4)" // Blue
            : "rgba(6, 182, 212, 0.4)"; // Cyan
        ctx.fillStyle = color;
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(drawPoints);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    initPoints();
    drawPoints();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
