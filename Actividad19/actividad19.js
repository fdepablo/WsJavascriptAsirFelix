function concatenar(){
    let nombre = inputNombre.value
    let apellido1 = inputPrimerApellido.value
    let apellido2 = inputSegundoApellido.value
    let cadena = nombre + " " + apellido1 + " " + apellido2
    inputResultado.value = cadena
    console.log(cadena)
    //inputResultado.value = inputNombre.value + " " + inputPrimerApellido.value 
    //        + " " + inputSegundoApellido.value
}