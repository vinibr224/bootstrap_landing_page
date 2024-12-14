const botao_modo = document.getElementById("checkbox_input");

// evento de mudança no checkbox
botao_modo.addEventListener("change", () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "light") {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("modo_escuro", "true"); // salva como string
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        localStorage.setItem("modo_escuro", "false");
    }
});

// verifica o localStorage e ajusta o tema
if (localStorage.getItem("modo_escuro") === "true") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    botao_modo.checked = true; // marca o checkbox
} else {
    document.documentElement.setAttribute("data-bs-theme", "light");
    botao_modo.checked = false; // desmarca o checkbox
}