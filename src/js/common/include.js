function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(async (element) => {
        const file = element.getAttribute('data-include');
        const response = await fetch(file);

        if (response.ok) {
            const content = await response.text();
            element.innerHTML = content
        } else {
            element.innerHTML = "Erro ao carregar o arquivo.";
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);