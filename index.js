
const button = document.querySelector("#boton");
const result = document.querySelector("#result")

button.addEventListener("click",()=>{
    const response =  fetch("https://www.el-tiempo.net/api/json/v1/provincias/28/municipios/28079/weather")
    .then(response=> response.json())
    .then(data=>{
        result.innerHTML = 'nombre '+data.prediccion.dia.forEach(element => {

            console.log(element.temperatura);
        });
        
    })
})
