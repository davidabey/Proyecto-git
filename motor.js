$(document).ready(function(){
 
    $("#fb1").click(function (){
        $("#redes").css("flex-direction","row");
    })
    $("#fb2").click(function (){
        $("#redes").css("flex-direction","column");
    })
    $("#fb3").click(function (){
        $("#redes").css("justify-content","flex-start");
    })
    $("#fb4").click(function (){
        $("#redes").css("justify-content","flex-end");
    })
    $("#fb5").click(function (){
        if($("#a1").css("order")==1){
            $("#a1").css("order","3");
            $("#a2").css("order","4");
            $("#a3").css("order","5");
            $("#a4").css("order","1");
            $("#a5").css("order","2");
        }
        else{
            $("#a1").css("order","1");
            $("#a2").css("order","2");
            $("#a3").css("order","3");
            $("#a4").css("order","4");
            $("#a5").css("order","5");
        }
    })
    
    $("#fb6").click(function (){
        if($("#redes a").css("flex-grow")==1){
            $("#redes a").css("flex-grow","0");
        }
        else{
            $("#redes a").css("flex-grow","1");
        }
    })
    //boton para borrar el comentario
    $("#b2").click(function(){
        var confirmar= confirm("Se borrara todo el comentario");
        if(confirmar==true){
            $("#nombrec").val("")
            $("#tituloc").val("")
            $("#textoc").val("")
            $("#Id_art").val("")
        }
    })

    //boton para actualizar los comentarios
    $("#b3").click(function(){
        $("#coment").load(" #comentarios");
        $("#resultado").html("Comentarios actualizados");
        // movemos la vista actual a la caja anadir
        location.href="#anadir"
    })

    
    
});