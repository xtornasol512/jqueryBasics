var words = [];
$(document).ready(function() {
    
    $("#uno").click(function() {
      leerArchivo("json/cancion1.json", 1)
      
    });
    $("#dos").click(function() {
      leerArchivo("json/cancion2.json", 2)
    });
    $("#tres").click(function() {
      leerArchivo("json/cancion3.json", 3)
    });
});
function averiguar(cancionNum){
    if (cancionNum == 1){

        if ($("#palabra1").val() == words[0]){
            $("#palabra1").removeClass("error");
            alert( "Respuesta correcta :D " );

        }
        else{
            alert( "Error en respuesta :S " );
            $("#palabra1").addClass("error");
        }

    }
    else if (cancionNum == 2){
        
       $( "input" ).each(function( index, element ) {
            // element == this
            if( $(element).val() == words[index])
                $(element).addClass("correcta");
            else
                $(element).addClass("error");

        });

    }
    else if (cancionNum == 3){
        
        $("#palabra2").addClass("error");
    alert( "Haz escogido la cancion 3" );

    }
    else 
        alert( "Recarga de nuevo porfavor" );

}
function leerArchivo(nombreArchivo, numCancion){
    $.getJSON( nombreArchivo , function( data ) {
      words = [];
      $.each(data.cancion, function(indice, nombre){
        console.log(' >', indice + '.' + nombre);
        words[indice] = nombre;
      });
      
    })
    //es necesario usar el metodo .done para que analize cuando termine de crear el arreglo
    //sino luego salen errores aunque sea verdadero
    .done(function() {
        averiguar(numCancion);
    });
}
