// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll(".menu-item");
const allItemCurves = document.querySelectorAll(".item-curve");

// Função para atualizar as bordas dos elementos adjacentes
function updateAdjacentCurves(activeItem) {
  // Remove todas as classes de borda de todos os item-curve
  allItemCurves.forEach((curve) => {
    curve.classList.remove("border-bottom-right-radius", "border-top-right-radius");
  });

  // Se não houver item ativo, não faz nada
  if (!activeItem) return;

  // Encontra o elemento item-curve anterior (irmão anterior ou o anterior na lista)
  let previousCurve = null;
  let current = activeItem.previousElementSibling;
  
  while (current) {
    if (current.classList.contains("item-curve")) {
      previousCurve = current;
      break;
    }
    current = current.previousElementSibling;
  }

  // Encontra o elemento item-curve posterior (irmão posterior)
  let nextCurve = null;
  current = activeItem.nextElementSibling;
  
  while (current) {
    if (current.classList.contains("item-curve")) {
      nextCurve = current;
      break;
    }
    current = current.nextElementSibling;
  }

  // Adiciona as classes apropriadas
  if (previousCurve) {
    previousCurve.classList.add("border-bottom-right-radius");
  }
  if (nextCurve) {
    nextCurve.classList.add("border-top-right-radius");
  }
}

// Adiciona o evento de clique em cada um
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove a classe 'active' de todos os itens
    menuItems.forEach((i) => i.classList.remove("active"));

    // Adiciona a classe 'active' só no item clicado
    this.classList.add("active");

    // Atualiza as bordas dos elementos adjacentes
    updateAdjacentCurves(this);
  });
});

// OPCIONAL: deixar o primeiro item ativo por padrão quando a página carregar
// (útil se você quiser que já tenha um item marcado ao abrir a página)
document.addEventListener("DOMContentLoaded", () => {
  // Exemplo: marca o "Trends" como ativo por padrão
  const defaultActive = document.querySelector(".menu-item");
  if (defaultActive) {
    defaultActive.classList.add("active");
    updateAdjacentCurves(defaultActive);
  }

  // Ou, se quiser marcar de acordo com a URL atual (recomendado em projetos reais):
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  menuItems.forEach((item) => {
    const text = item.textContent.trim().toLowerCase();
    if (currentPath.includes(text)) {
      item.classList.add("active");
      updateAdjacentCurves(item);
    }
  });
});
