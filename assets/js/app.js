$(document).ready(function() {
    $('#hacer').click(function (){
        $('#tarjetero').append(
            '<div id="tarjeta" class="tarjeta"><h1 id="tituloNoticia">titulo</h1><img id="imgTarjeta" src="assets/img/sun.png" alt=""><p id="textCard">Lorem, ipsum dolor sit amet consectetur adipisicing elit.porro.</p></div>'
            )
        });//functionClick
    $('#deshacer').click(function (){
        $('#tarjeta').remove('#tarjeta');
    });
    $('#aparecer').click(function (){
        $('.texto2').show();
    });
    $('#desaparecer').click(function (){
        $('.texto2').hide();
    });
    $('#ambos').click(function (){
        $('.texto2').toggle();
    });
    $('#aparecer2').click(function (){
        $('.img2').slideDown(1000);
    });
    $('#desaparecer2').click(function (){
        $('.img2').slideUp(500);
    });
    $('#ambos2').click(function (){
        $('.img2').slideToggle(500);
    });

    $('#aparecer3').click(function (){
        $('.imgCraneo').fadeIn(1000);
    });
    $('#desaparecer3').click(function (){
        $('.imgCraneo').fadeOut(500);
    });
    $('#ambos3').click(function (){
        $('.imgCraneo').addClass('fondo');
    });

    $('#before').click(function (){
        $('#textoPrincipal').before('<h1>Texto aplicado con before</h1>');
    })
    $('#after').click(function (){
        $('#textoPrincipal').after('<h2>Texto aplicado con after</h2>')
    })

    $('#html').click(function (){
        $('#textHtml').html('<h1>HolaMundo</h1>')
    })

    $('#attr').click(function (){
        var x = "el atributo id del boton es: " +  $('#html').attr('id');
        $('#textHtml').html(x);
    })

    $('#val').click(function ( ){
        var z = "el primer valor es: " + $('#textoPrincipal').val();
        $('#textVal').text(z);
        //val solo funciona para los formularios
    });
});//Principal
    