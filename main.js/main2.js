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
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>80){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if (!expresion.test(correo)){
        alert("El correo no es válido");
        return false;
    }
    else if (telefono.length>15){
        alert("El telefono es muy largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("Ha ingresado un  número de teléfono no válido");
        return false;
    }

}
