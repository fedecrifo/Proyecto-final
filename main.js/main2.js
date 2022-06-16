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