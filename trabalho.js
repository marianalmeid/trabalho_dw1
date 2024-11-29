const siteTheme = getElementbyId("tema");
const body = document.body;


siteTheme.addEventListener("on click", () => {
    body.classList.toggle("claro");
    body.classList.toggle("escuro");
});