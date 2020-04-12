function validaUsuario() {

    let validaUsuario = $("#idUsuario").val();
    let validaPassword = $("#idPassword").val();

    if (validaUsuario == "" && validaPassword == "") {

        alert("Ingresa un Usuario y Contraseña");
        return;
    }

    if (validaUsuario == "") {
        alert("Ingresa tu Usuario")
        return;
    }
    if (validaPassword == "") {
        alert("Ingresa tu Contraseña")
        return;
    }
    if (validaUsuario != "root") {
        alert(`Usuario "${validaUsuario}" incorrecto`)
        return;
    }
    if (validaPassword != "admin123") {
        alert(`Contraseña "${validaPassword}" incorrecto`)
        return;
    }
    document.frmDatos.submit();
}





function validaEmail(inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailFormat)) {
        document.frmDatosAlta.text1();
        return true;
    } else {
        alert("Registra un correo valido");
        document.frmDatosAlta.text1.focus();
        return false;
    }
}


function altaUsuario() {

    let validaAltaNombre = $("#idAltaNombre").val();
    let validaAltaUsuario = $("#idAltaUsuario").val();
    let validaAltaPassword = $("#idAltaPassword").val();
    let validaAltaEmail = $("#idAltaEmail").val();
    /*         let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; */


    if (validaAltaEmail == "") {
        alert("Registra un correo valido")
        return;
    }

    if (validaAltaNombre == "") {
        alert("Ingresa un Nombre")
        return;
    }


    if (validaAltaUsuario == "") {
        alert("Crea un Usuario")
        return;
    }

    if (validaAltaPassword == "") {
        alert("Crea una Contraseña")
        return;
    } else {
        alert(`${validaAltaUsuario} ha sido creado con exito!!!`)
    }
}