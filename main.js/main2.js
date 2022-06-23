function viewsArrayInput(){
    let arrayInput=new Array();
    let inputsValues=document.getElementsByClassName('datoInput'),
    namesValues=[].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);
    });
    arrayInput.forEach(function(inputsValuesData){
        console.log("EL DATO ES:"+ inputsValuesData);
    });
    localStorage.setItem("inputValues", JSON.stringify(arrayInput));
    console.log(JSON.parse(localStorage.getItem("inputValues")));
}

function validar(){
    //validar nombre
    const nombre = document.getElementById("inputName").value;
    const apellidos = document.getElementById("inputLastName").value;
    const correo = document.getElementById("inputEmail").value;
    const pass = document.getElementById("inputPassword").value;
    const telefono = document.getElementById("inputPhoneNumber").value;
    const expresion = /\w+@\w+\.+[a-z]/;


    if (nombre === "" || apellidos === "" || correo === "" || pass === "" || telefono === ""){
        swal("Todos los campos deben ser completados", "", "error");
        return false;
    }
    else if (nombre.length>30){
        swal("El nombre es muy largo", "", "error");
        return false;
    }
    else if (apellidos.length>80){
        swal("Los apellidos son muy largos", "", "error");
        return false;
    }
    else if (correo.length>100){
        swal("El correo es muy largo", "", "error");
        return false;
    }
    else if (!expresion.test(correo)){
        swal("El correo no es válido", "", "error");
        return false;
    }
    else if (telefono.length>15){
        swal("El telefono es muy largo", "", "error");
        return false;
    }
    else if (isNaN(telefono)){
        swal("Ha ingresado un  número de teléfono no válido", "", "error");
        return false;
    }

}
