(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Pega todos os formulários que queremos aplicar estilos de validação Bootstrap personalizados
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop e evita o envio
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();