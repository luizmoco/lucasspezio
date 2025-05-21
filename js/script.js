document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
    form.reset();
  });
});
