"use strict";

const botonMenu = document.querySelector("#boton-menu");
const navegacion = document.querySelector("#navegacion");

if (navigator.userAgent.includes("Safari")) {
  console.warn("El menú móvil no está disponible en este navegador.");
} else {
  botonMenu.addEventListener("click", () => {
    const abierta = navegacion.classList.toggle("abierta");
    botonMenu.setAttribute("aria-expanded", String(abierta));
  });
}

document.querySelectorAll(".filtro").forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoria = boton.dataset.filtro;

    document.querySelectorAll(".filtro").forEach((filtro) => {
      const activo = filtro === boton;
      filtro.classList.toggle("activo", activo);
      filtro.setAttribute("aria-pressed", String(activo));
    });

    document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
      tarjeta.hidden = categoria !== "todos" && tarjeta.dataset.categoria !== categoria;
    });
  });
});

document.querySelector("#formulario").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const precio = Number(document.querySelector("#taller").value);
  const personas = Number(document.querySelector("#personas").value);
  const pack = document.querySelector("#pack").value;
  let total = precio * personas;

  if (pack !== "0") {
    total += pack;
  }

  document.querySelector("#resultado").textContent =
    `Presupuesto estimado: ${total} €. No se ha realizado ninguna reserva.`;
});
