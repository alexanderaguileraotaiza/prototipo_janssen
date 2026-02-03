// Vista previa del logo
const inputLogo = document.getElementById("logo");
const preview = document.getElementById("previewLogo");

if (inputLogo && preview) {
  inputLogo.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validación simple de tamaño (2MB)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("La imagen supera 2MB. Sube una más liviana.");
      inputLogo.value = "";
      return;
    }

    // Validación simple de tipo
    if (!file.type.startsWith("image/")) {
      alert("El archivo no es una imagen.");
      inputLogo.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    preview.src = url;
  });
}

// Botón cancelar: limpia formulario y restaura preview
const btnCancelar = document.getElementById("btnCancelar");
const formPerfil = document.getElementById("formPerfil");

if (btnCancelar && formPerfil && preview) {
  btnCancelar.addEventListener("click", () => {
    formPerfil.reset();
    preview.src = "../assets/img/JanssenMAQ.png";
  });
}

// Botón cambiar contraseña (prototipo)
const btnPassword = document.getElementById("btnPassword");
if (btnPassword) {
  btnPassword.addEventListener("click", () => {
    alert("Aquí puedes abrir un modal o ir a una pantalla de cambio de contraseña.");
  });
}

// Submit (prototipo)
if (formPerfil) {
  formPerfil.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Perfil guardado (prototipo). Luego lo conectas a base de datos o API.");
  });
}