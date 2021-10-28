function esNumero(letra) {
    return letra >= "0" && letra <= "9";
}
function esMayuscula(letra) {
    return letra >= "A" && letra <= "Z";
}
function esMinuscula(letra) {
    return letra >= "a" && letra <= "z";
}
function esLetra(letra) {
    return (esMinuscula(letra) || esMayuscula(letra))
}
function validar() {
    let objUsuario = document.getElementById("usuario");  
    let usuario = objUsuario.value;   
    if (usuario.length < 8) {
        alert("Usuario: minimo 8 caracteres");
    }
    let objClave = document.getElementById("clave");
    let clave = objClave.value;
    if (clave.length < 8) {
        alert("clave minimo 8 caracteres");
    }
    if (!clave.split("").some(e => esMayuscula(e)))  {
        alert('La contraseña debe tener al menos una mayuscula');
    }
    if (!clave.split('').some(e => esNumero(e)))  {
        alert('La contraseña debe tener al menos un numero');
    }
    let ContieneSignoEspecial = false
    let i = 0
    while (i < clave.length && ContieneSignoEspecial=== false) {
        if (! (esNumero(clave[i]) || esLetra(clave[i])  ) ) {
            ContieneSignoEspecial = true;
        }
        i++
    }
    if(ContieneSignoEspecial===false) {
        alert("La contraseña debe contener un signo especial")
    }
}