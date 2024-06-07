document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();

    if(validar(this)){
        this.submit();
    }

});

function limpiarError(){
    var errores = document.getElementsByClassName("error");
    for(let i=0; i<errores.length;i++){
        errores[i].innerHTML = "";
    };
};


function validar(formulario){

    limpiarError();    

    if(formulario.nombre.value.length == 0){
        document.getElementById("errorNombre").innerText="Ingrese su nombre";
        formulario.nombre.focus();
        return false;
    }

    if(formulario.apellido.value.length == 0){
        document.getElementById("errorApellido").innerText="Ingrese su apellido";
        formulario.apellido.focus();
        return false;
    }


    var expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!expRegEmail.test(formulario.email.value)){
        document.getElementById("errorEmail").innerText="Ingrese su correo electronico";
        formulario.email.focus();
        return false;
    };

    var expRegPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if(!expRegPassword.test(formulario.password.value)){
        document.getElementById("errorPassword").innerText="Ingrese una contraseña valida";
        formulario.password.focus();
        return false;
    };

    if(formulario.passwordConfirmacion.value != formulario.password.value){
        document.getElementById("errorPasswordConfirmacion").innerText="Las contraseñas no son iguales";
        formulario.passwordConfirmacion.focus();
        return false;
    }
    
    if(formulario.date.value == 0){
        document.getElementById("errorDate").innerText="Debe seleccionar su fecha de nacimiento";
        formulario.date.focus();
        return false;
    }

    if(formulario.pais.value == ""){
        document.getElementById("errorPais").innerText = "Debe seleccionar un pais";
        formulario.pais.focus();
        return false;
    }

    if(!formulario.terminos.checked){
        document.getElementById("errorTerminos").innerText = "Debe aceptar los terminos";
        formulario.terminos.focus();
        return false;
    }

    alert("Formulario enviado correctamente")
    return true;
};