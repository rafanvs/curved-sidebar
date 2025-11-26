// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll(".menu-item");

// Adiciona o evento de clique em cada um
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove a classe 'active' de todos os itens
    menuItems.forEach((i) => i.classList.remove("active"));

    // Adiciona a classe 'active' só no item clicado
    this.classList.add("active");
  });
});

// OPCIONAL: deixar o primeiro item ativo por padrão quando a página carregar
// (útil se você quiser que já tenha um item marcado ao abrir a página)
document.addEventListener("DOMContentLoaded", () => {
  // Exemplo: marca o "Trends" como ativo por padrão
  const defaultActive = document.querySelector(".menu-item");
  if (defaultActive) defaultActive.classList.add("active");

  // Ou, se quiser marcar de acordo com a URL atual (recomendado em projetos reais):
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  menuItems.forEach((item) => {
    const text = item.textContent.trim().toLowerCase();
    if (currentPath.includes(text)) {
      item.classList.add("active");
    }
  });
});
