const result = document.querySelector("#result");
const dos = document.querySelector("#result2");
const tres = document.querySelector("#humedad");
const cuatro = document.querySelector("#viento");
const cinco = document.querySelector("#probLluvia");
const seis = document.querySelector("#maxLunes");
const siete = document.querySelector("#minLunes");
const ocho = document.querySelector("#maxMartes");
const nueve = document.querySelector("#minMartes");
const diez = document.querySelector("#maxMiercoles");
const once = document.querySelector("#minMiercoles");
const doce = document.querySelector("#maxJueves");
const trece = document.querySelector("#minJueves");
const catorce = document.querySelector("#maxViernes");
const quince = document.querySelector("#minViernes");
const diezyseis = document.querySelector("#maxSabado");
const diezysiete = document.querySelector("#minSabado");
//VARIABLES DE LAS TEMPERATURAS MAXIMAS Y MINIMAS DEL DIA ACTUAL Y DE LOS PROXIMOS 6

const icon0 = document.querySelector("#fotoProbLLuvia0");
const icon1 = document.querySelector("#fotoProbLLuvia1");
const icon2 = document.querySelector("#fotoProbLLuvia2");
const icon3 = document.querySelector("#fotoProbLLuvia3");
const icon4 = document.querySelector("#fotoProbLLuvia4");
const icon5 = document.querySelector("#fotoProbLLuvia5");
const icon6 = document.querySelector("#fotoProbLLuvia6");
//vARIABLES PARA CAMBIAR LOS ICONOS DE LA APP EN FUNCION DE LA PROBABILIDAD DE LLUVIA OBTENIDA EN LA API

const dias = [
    'DOMINGO',
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SABADO',
  ];

const d1 = document.querySelector("#diaDeSemana0");
const d2 = document.querySelector("#diaDeSemanaMAS1");
const d3 = document.querySelector("#diaDeSemanaMAS2");
const d4 = document.querySelector("#diaDeSemanaMAS3");
const d5 = document.querySelector("#diaDeSemanaMAS4");
const d6 = document.querySelector("#diaDeSemanaMAS5");
const d7 = document.querySelector("#diaDeSemanaMAS6");
//ARRAY QUE CONTIENE LOS DIAS DE LA SEMANA Y VARIABLES PARA HACER LA ROTACION DE DIAS AUTOMATICAMENTE.

const t1 = document.querySelector("#texto0");
const t2 = document.querySelector("#texto1");
const t3 = document.querySelector("#texto2");
const t4 = document.querySelector("#texto3");
const t5 = document.querySelector("#texto4");
const t6 = document.querySelector("#texto5");
const t7 = document.querySelector("#texto6");
//VARIABLES PARA CAMBIAR EL TEXTO DE LOS DIVS EN FUNCION DE LA PROBABILIDAD DE LLUVIA

const response =  fetch("https://www.el-tiempo.net/api/json/v1/provincias/28/municipios/28079/weather")
    .then(response=> response.json())
    .then(data=>{
        result.innerHTML = data.prediccion.dia[0].temperatura.maxima +'º';
        dos.innerHTML = '/ ' +data.prediccion.dia[0].temperatura.minima +'º';
        tres.innerHTML = data?.prediccion?.dia[0]?.humedad_relativa?.minima+' %';
        cuatro.innerHTML = data?.prediccion?.dia[0]?.viento[0]?.velocidad+' km/h';
        cinco.innerHTML = data?.prediccion?.dia[0]?.prob_precipitacion[0]+' %';
        seis.innerHTML = data?.prediccion?.dia[1]?.temperatura.maxima +'º';
        siete.innerHTML = '/ ' +data?.prediccion?.dia[1]?.temperatura.minima +'º';
        ocho.innerHTML = data.prediccion.dia[2].temperatura.maxima +'º';
        nueve.innerHTML = '/ ' +data.prediccion.dia[2].temperatura.minima +'º';
        diez.innerHTML = data.prediccion.dia[3].temperatura.maxima +'º';
        once.innerHTML = '/ ' +data.prediccion.dia[3].temperatura.minima +'º';
        doce.innerHTML = data.prediccion.dia[4].temperatura.maxima +'º';
        trece.innerHTML = '/ ' +data.prediccion.dia[4].temperatura.minima +'º';
        catorce.innerHTML = data.prediccion.dia[5].temperatura.maxima +'º';
        quince.innerHTML = '/ ' +data.prediccion.dia[5].temperatura.minima +'º';
        diezyseis.innerHTML = data.prediccion.dia[6].temperatura.maxima +'º';
        diezysiete.innerHTML = '/ ' +data.prediccion.dia[6].temperatura.minima +'º';
    
        var probLluvia = data?.prediccion?.dia[0]?.prob_precipitacion[5];
        var probLluvia1 = data?.prediccion?.dia[1]?.prob_precipitacion[5];
        var probLluvia2 = data?.prediccion?.dia[2]?.prob_precipitacion[0];
        var probLluvia3 = data?.prediccion?.dia[3]?.prob_precipitacion[0];
        var probLluvia4 = data?.prediccion?.dia[4]?.prob_precipitacion[0];
        var probLluvia5 = data?.prediccion?.dia[5]?.prob_precipitacion[0];
        var probLluvia6 = data?.prediccion?.dia[6]?.prob_precipitacion[0];
    //A TRAVES DEL FETCH OBTENEMOS LOS DATOS NECESARIOS DE LA API (elTiempo.net)

        window.onload = cambiarIconos(probLluvia,0);
        window.onload = cambiarIconos(probLluvia1,1);
        window.onload = cambiarIconos(probLluvia2,2);
        window.onload = cambiarIconos(probLluvia3,3);
        window.onload = cambiarIconos(probLluvia4,4);
        window.onload = cambiarIconos(probLluvia5,5);
        window.onload = cambiarIconos(probLluvia6,6);
    //USANDO EL WINDOW.ONLOAD CARGAMOS EN EL HTML EL RESULTADO DE LA FUNCION cambiarIconos PASANDOLE COMO PARAMETRO LA PROBABILIDAD DE LLUVIA CORRESPONDIENTE Y EL NUMERO ENTERO QUE NOS SERVIRÁ OARA REFERENCIAR EL ID DEL HTML.
    
    function cambiarIconos(probLluvia,i){
        var pac;
        if(probLluvia<=35){
            pac = "imagenes/icons8-sky-50.png";
            document.getElementById('fotoProbLLuvia'+i).src = pac;
            document.getElementById('texto'+i).innerHTML = `<a>Despejado</a>`;
        }
        if( 35<=probLluvia && probLluvia<=85){
            pac = "imagenes/icons8-lluvia-50.png";
            document.getElementById('fotoProbLLuvia'+i).src = pac;
            document.getElementById('texto'+i).innerHTML = `<a>Lluvia</a>`;
        }
        else if(probLluvia>85){
            pac = "imagenes/icons8-tormenta-50.png";
            document.getElementById('fotoProbLLuvia'+i).src = pac;
            document.getElementById('texto'+i).innerHTML = `<a>Tormenta</a>`;
        }   
    }
     //sEGUN LA PROBABILIDAD DE LLUVIA PASADA POR PARAMETRO CAMBIARA EL SRC DE LA IMAGEN QUE SE MOSTRARÁ EN EL HTML ADEMAS DEL TEXTO ASOCIADO.  
})//AQUI FINALIZA EL fetch

window.onload = cambiarSolLuna();
function cambiarSolLuna(){
    var pic;
    ahora=new Date();
    hora=ahora.getHours();
        if (hora<=5 || hora>=21){
            pic="imagenes/luna.png"
        }else{
            pic="imagenes/580b585b2edbce24c47b2714.png" 
        }
    document.getElementById('diaNoche').src=pic;
}
//ESTA FUNCION CAMBIARA EL ICONO DEL SOL/LUNA EN CONSECUENCIA DE LA HORA DEL DIA
    
function calcular(dia){
    if (dia==0){
    dia=0
    }else if(dia==1){ 
        dia=1;
    }else if(dia==2){ 
        dia=2;
    }else if(dia==3){ 
        dia=3;
    }else if(dia==4){ 
        dia=4;
    }else if(dia==5){ 
        dia=5;
    }else if(dia==6){ 
        dia=6;
        contador=0;
    }else if(dia>6){
        dia=((dia-7))    
    }   
return dia;
}
//CON ESTA FUNCION CALCULAMOS EL DIA QUE SE DEBE UTILIZAR PARA CAMBIAR EL DIA DE LA SEMANA EN LA FUNCION cambiarDia()

cambiarDia();
function cambiarDia(){
    ahora=new Date();
    let dia=ahora.getDay();
    dia++;
    d1.innerHTML = dias[ calcular(dia)];
    d2.innerHTML = dias[ calcular(dia+1)];
    d3.innerHTML = dias[ calcular(dia+2)];
    d4.innerHTML = dias[ calcular(dia+3)];
    d5.innerHTML = dias[ calcular(dia+4)];
    d6.innerHTML = dias[ calcular(dia+5)];
}
//ESTA FUNCION CAMBIA EL DIA DE LA SEMANA EN FUNCION DEL CALCULO HECHO EN LA FUNCION calcular(dia)
 