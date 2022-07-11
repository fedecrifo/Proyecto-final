//Almacenamiento en el localstorage

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

// validacion de formulario y utilizando libreria sweetAlert2

function validar(){
    
    const nombre = document.getElementById("inputName").value;
    const apellidos = document.getElementById("inputLastName").value;
    const correo = document.getElementById("inputEmail").value;
    const telefono = document.getElementById("inputPhoneNumber").value;
    const expresion = /\w+@\w+\.+[a-z]/;


    if (nombre === "" || apellidos === "" || correo === "" || telefono === ""){
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

//usando api para guardar datos de formulario y enviarlo tambien a mi email 

const form = document.getElementById("my-form");
    
async function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
