const botao_modo = document.getElementById("checkbox_input");

// Adiciona o evento de mudança no checkbox
botao_modo.addEventListener("change", () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("modo_escuro", "true"); // Salva como string
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        localStorage.setItem("modo_escuro", "false");
    }
});

// Verifica o estado salvo no localStorage e ajusta o tema ao carregar a página
if (localStorage.getItem("modo_escuro") === "true") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    botao_modo.checked = true; // Marca o checkbox
} else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    botao_modo.checked = false; // Desmarca o checkbox
}
