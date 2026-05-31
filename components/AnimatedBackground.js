"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    let animationId;

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;

        this.radius = Math.random() * 2 + 3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= width) {
          this.vx *= -1;
        }

        if (this.y <= 0 || this.y >= height) {
          this.vy *= -1;
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius * 3,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = "rgba(255,153,0,0.08)";
        ctx.stroke();
      }
    }

    const nodes = [];

    for (let i = 0; i < 35; i++) {
      nodes.push(new Node());
    }

    class Packet {
      constructor() {
        this.reset();
      }

      reset() {
        this.from =
          nodes[Math.floor(Math.random() * nodes.length)];

        this.to =
          nodes[Math.floor(Math.random() * nodes.length)];

        this.progress = 0;

        this.speed =
          0.003 + Math.random() * 0.003;
      }

      update() {
        this.progress += this.speed;

        if (this.progress >= 1) {
          this.reset();
        }
      }

      draw() {
        const x =
          this.from.x +
          (this.to.x - this.from.x) *
            this.progress;

        const y =
          this.from.y +
          (this.to.y - this.from.y) *
            this.progress;

        ctx.beginPath();

        ctx.arc(x, y, 2.5, 0, Math.PI * 2);

        ctx.fillStyle = "#ff9900";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ff9900";

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    const packets = [];

    for (let i = 0; i < 15; i++) {
      packets.push(new Packet());
    }

    function drawGrid() {
      ctx.strokeStyle =
        "rgba(255,255,255,0.025)";

      ctx.lineWidth = 1;

      const gap = 80;

      for (let x = 0; x < width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (
          let j = i + 1;
          j < nodes.length;
          j++
        ) {
          const dx =
            nodes[i].x - nodes[j].x;

          const dy =
            nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 220) {
            ctx.beginPath();

            ctx.moveTo(
              nodes[i].x,
              nodes[i].y
            );

            ctx.lineTo(
              nodes[j].x,
              nodes[j].y
            );

            ctx.strokeStyle = `rgba(
              255,
              255,
              255,
              ${0.12 - distance / 2500}
            )`;

            ctx.stroke();
          }
        }
      }
    }

    function drawMouseGlow() {
      const gradient =
        ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          300
        );

      gradient.addColorStop(
        0,
        "rgba(255,153,0,0.08)"
      );

      gradient.addColorStop(
        1,
        "rgba(255,153,0,0)"
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        mouse.x,
        mouse.y,
        300,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const bg =
        ctx.createLinearGradient(
          0,
          0,
          width,
          height
        );

      bg.addColorStop(0, "#000000");
      bg.addColorStop(1, "#050505");

      ctx.fillStyle = bg;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      drawGrid();
      drawMouseGlow();
      drawConnections();

      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      packets.forEach((packet) => {
        packet.update();
        packet.draw();
      });

      animationId =
        requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}