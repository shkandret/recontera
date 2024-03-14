import React, { useEffect, useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import styles from "./ParticleCanvas.module.scss";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const isOnScreen = useOnScreen(canvasRef);

  useEffect(() => {
    let frameId;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const RADIO = 200;
    const ANILLOS = 32;
    const COLOR = "#9ddcff";
    const FONDO = "rgba(227, 225, 242, 0.1)";

    function esfera(
      radio = 100,
      anillos = 16,
      centro = [canvas.width / 2, 0, canvas.height / 2],
      ruido = 0
    ) {
      let puntos = [];
      const ancho = (2 * Math.PI) / anillos;
      const alto = Math.PI / anillos;
      for (let i = 0; i < anillos; i++) {
        for (let j = 0; j <= anillos; j++) {
          const x =
            radio * Math.cos(i * ancho) * Math.sin(j * alto) +
            centro[0] * (1 + Math.random() * ruido);
          const y =
            radio * Math.sin(i * ancho) * Math.sin(j * alto) +
            centro[1] * (1 + Math.random() * ruido);
          const z =
            radio * Math.cos(j * alto) +
            centro[2] * (1 + Math.random() * ruido);
          puntos.push([x, y, z]);
        }
      }

      return puntos;
    }

    function dibujarPuntos(esfera, color = "white", fondo = "transparent") {
      for (let i = 0; i < esfera.length; i++) {
        let color_aux = color;

        if (esfera[i][1] < 0) {
          color_aux = fondo;
        } else {
          color_aux = color;
        }

        ctx.beginPath();
        ctx.arc(esfera[i][0], esfera[i][2], 2, 0, 2 * Math.PI);
        ctx.fillStyle = color_aux;
        ctx.fill();
      }
    }

    function dibujarLineas(
      esfera,
      color = "white",
      fondo = "transparent",
      anillos = 16
    ) {
      for (let i = 0; i < esfera.length; i++) {
        let color_aux = color;

        if (esfera[i][1] < 0) {
          color_aux = fondo;
        } else {
          color_aux = color;
        }

        if (i % (anillos + 1) !== anillos) {
          ctx.beginPath();
          ctx.moveTo(esfera[i][0], esfera[i][2]);
          ctx.lineTo(esfera[i + 1][0], esfera[i + 1][2]);
          ctx.strokeStyle = color_aux;
          ctx.stroke();
        }
        if (i < esfera.length - anillos - 1) {
          ctx.beginPath();
          ctx.moveTo(esfera[i][0], esfera[i][2]);
          ctx.lineTo(esfera[i + anillos + 1][0], esfera[i + anillos + 1][2]);
          ctx.strokeStyle = color_aux;
          ctx.stroke();
        }

        if (i > esfera.length - anillos - 2) {
          ctx.beginPath();
          ctx.moveTo(esfera[i][0], esfera[i][2]);
          ctx.lineTo(
            esfera[i - esfera.length + anillos + 1][0],
            esfera[i - esfera.length + anillos + 1][2]
          );
          ctx.strokeStyle = color_aux;
          ctx.stroke();
        }
      }
    }

    function rotarX(
      esfera,
      angulo,
      centro = [canvas.width / 2, 0, canvas.height / 2]
    ) {
      for (let i = 0; i < esfera.length; i++) {
        const y = esfera[i][1];
        const z = esfera[i][2];
        esfera[i][1] =
          Math.cos(angulo) * (y - centro[1]) -
          Math.sin(angulo) * (z - centro[2]) +
          centro[1];
        esfera[i][2] =
          Math.sin(angulo) * (y - centro[1]) +
          Math.cos(angulo) * (z - centro[2]) +
          centro[2];
      }
    }

    function rotarY(
      esfera,
      angulo,
      centro = [canvas.width / 2, 0, canvas.height / 2]
    ) {
      for (let i = 0; i < esfera.length; i++) {
        const x = esfera[i][0];
        const z = esfera[i][2];
        esfera[i][0] =
          Math.cos(angulo) * (x - centro[0]) +
          Math.sin(angulo) * (z - centro[2]) +
          centro[0];
        esfera[i][2] =
          -Math.sin(angulo) * (x - centro[0]) +
          Math.cos(angulo) * (z - centro[2]) +
          centro[2];
      }
    }

    function rotarZ(
      esfera,
      angulo,
      centro = [canvas.width / 2, 0, canvas.height / 2]
    ) {
      for (let i = 0; i < esfera.length; i++) {
        const x = esfera[i][0];
        const y = esfera[i][1];
        esfera[i][0] =
          Math.cos(angulo) * (x - centro[0]) -
          Math.sin(angulo) * (y - centro[1]) +
          centro[0];
        esfera[i][1] =
          Math.sin(angulo) * (x - centro[0]) +
          Math.cos(angulo) * (y - centro[1]) +
          centro[1];
      }
    }

    function animarRotacion(e1) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotarZ(e1, -0.005);
      dibujarLineas(e1, COLOR, FONDO, ANILLOS);
      dibujarPuntos(e1, COLOR, FONDO);
      frameId = requestAnimationFrame(() => animarRotacion(e1));
    }

    let e1;

    if (isOnScreen) {
      canvas.width = 500;
      canvas.height = 450;

      e1 = esfera(RADIO, ANILLOS);
      rotarX(e1, Math.PI / 8);
      rotarY(e1, Math.PI / 16);
      rotarZ(e1, Math.PI / 4);

      animarRotacion(e1);
    } else {
      cancelAnimationFrame(frameId);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isOnScreen]);

  return (
    <canvas className={styles["canvas"]} id="canvas" ref={canvasRef}>
      Ваш браузер не поддерживает элемент canvas.
    </canvas>
  );
};

export default ParticleCanvas;
