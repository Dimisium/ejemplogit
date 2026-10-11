const raiz = document.documentElement;
const botonTema = document.getElementById("tema");

function aplicarTema(tema) {
  raiz.dataset.tema = tema;
  botonTema.textContent = tema === "oscuro" ? "☀️" : "🌙";
}

function temaGuardado() {
  try {
    return localStorage.getItem("tema");
  } catch {
    return null;
  }
}

const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(temaGuardado() || (prefiereOscuro ? "oscuro" : "claro"));

botonTema.addEventListener("click", () => {
  const nuevo = raiz.dataset.tema === "oscuro" ? "claro" : "oscuro";
  aplicarTema(nuevo);
  try {
    localStorage.setItem("tema", nuevo);
  } catch {
    // sin almacenamiento disponible: el tema solo dura esta visita
  }
});

document.getElementById("anio").textContent = new Date().getFullYear();

const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = formulario.nombre.value.trim();
  aviso.textContent = `¡Gracias, ${nombre}! Tu mensaje se ha registrado.`;
  formulario.reset();
});
