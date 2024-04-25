document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sort').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo); 

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio + 1);
        
        

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
