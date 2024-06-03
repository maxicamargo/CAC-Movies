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

    var expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!expRegEmail.test(formulario.email.value)){
        //alert("Este campo debe ser completado");
        document.getElementById("errorEmail").innerText="Ingrese su correo electronico";
        formulario.email.focus();
        return false;
    };

    if(formulario.password.value.length == 0){
        //alert("Este campo debe ser completado");
        document.getElementById("errorPassword").innerText="Ingrese su contraseña";
        formulario.password.focus();
        return false;
    }
    

};