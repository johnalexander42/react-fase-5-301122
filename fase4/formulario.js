function procesarRespuestas(){
    let total = 5;
    var puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["c", "a", "b"];

    let flag = false;

    for(let i = 1; i <= total; i++){
        if(myForm["r" + i].value == null ||
            myForm["r", + i].value == '')
            {
                alert("Responder por favor las preguntas");

                flag = true;
            
                return false;
            }else{
                /*
                if(myForm["r"+i].value == respuestasCorrectas[i - 1]){
                    puntos++;
                }*/
                flag = true;

            }


    }


    if(flag){
        if($('#correcta1').is(':checked')){
            puntos++;
        }

        if($('#correcta2').is(':checked')){
            puntos++;
        }

        if($('#correcta3').is(':checked')){
            puntos++;
        }

        if($('#correcta4').is(':checked')){
            puntos++;
        }

        if($('#correcta5').is(':checked')){
            puntos++;
        }

    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Obtuviste " + puntos + " puntos de " + total + ' posibles ';

    $("html, body").animate({scrollTop: $("#resultado").offset().top}, 3000);

    return false;


    

}