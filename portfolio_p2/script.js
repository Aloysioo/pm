for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("active");
    }

    const botoes = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }

    document.getElementById(nomeMateria).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Abre a página de detalhes de cada ano
function abrirDetalhes(id) {
    document.getElementById(id).style.display = "block";
}

// Fecha a página de detalhes
function fecharDetalhes(id) {
    document.getElementById(id).style.display = "none";
}

// Troca entre Matemática, Português, etc.
function abrirMateria(evt, nomeMateria) {
    const conteudos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("active");
    }
    const botoes = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("active");
    }
    document.getElementById(nomeMateria).classList.add("active");
    evt.currentTarget.classList.add("active");
}  