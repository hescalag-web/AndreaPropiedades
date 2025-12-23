document.addEventListener("DOMContentLoaded", () => {
  const filterComuna = document.getElementById("filterComuna");
  const filterPrecio = document.getElementById("filterPrecio");
  const cards = document.querySelectorAll(".card");

  function filtrar() {
    const comuna = filterComuna.value;
    const precio = filterPrecio.value;

    cards.forEach(card => {
      const cardComuna = card.dataset.comuna;
      const cardPrecio = parseInt(card.dataset.precio);

      let visible = true;

      if (comuna && cardComuna !== comuna) {
        visible = false;
      }

      if (precio === "bajo" && cardPrecio > 5000) {
        visible = false;
      }

      if (precio === "alto" && cardPrecio <= 5000) {
        visible = false;
      }

      card.style.display = visible ? "block" : "none";
    });
  }

  filterComuna.addEventListener("change", filtrar);
  filterPrecio.addEventListener("change", filtrar);
});
