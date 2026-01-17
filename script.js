document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    const usuario = document.getElementById('user').value;
    const contrasena = document.getElementById('pass').value;
    const mensaje = document.getElementById('mensaje');

    // CONFIGURA AQUÍ TU ACCESO
    if (usuario === "Zeus" && contrasena === "Rayo2024") {
        mensaje.style.color = "#d4af37";
        mensaje.textContent = "Ascendiendo al Olimpo...";
        
        // Redirige al panel de la forja después de 1 segundo
        setTimeout(() => {
            window.location.href = "checker.html"; 
        }, 1200);
        
    } else {
        mensaje.style.color = "#ff4444";
        mensaje.textContent = "Credenciales indignas. Los dioses te rechazan.";
    }
});