function validarLuhn(numero) {
    let suma = 0;
    let alternar = false;
    // Limpia espacios o caracteres raros
    let n_limpio = numero.split('|')[0].replace(/\D/g, ''); 

    for (let i = n_limpio.length - 1; i >= 0; i--) {
        let d = parseInt(n_limpio[i], 10);
        if (alternar) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        suma += d;
        alternar = !alternar;
    }
    return (suma % 10 === 0);
}

function forjar() {
    const lista = document.getElementById('listaDatos').value.split('\n');
    const divValidas = document.getElementById('validas');
    const divInvalidas = document.getElementById('invalidas');

    lista.forEach(linea => {
        if(linea.trim() === "") return;
        
        let p = document.createElement('p');
        p.style.fontSize = "0.8rem";
        p.style.margin = "5px 0";

        if (validarLuhn(linea)) {
            p.innerHTML = `<span style="color: #ffd700">⚡</span> ${linea}`;
            divValidas.appendChild(p);
        } else {
            p.innerHTML = `<span style="color: #ff4444">🌑</span> ${linea}`;
            divInvalidas.appendChild(p);
        }
    });
}