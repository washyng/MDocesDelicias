// Funções de segurança
function sanitizeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function validateInput(input) {
    // Remove caracteres potencialmente perigosos
    return input.replace(/[<>'"]/g, '');
}

// Objeto global de segurança
window.Security = {
    sanitize: sanitizeHTML,
    validate: validateInput
};