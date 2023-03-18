$(document).ready(function() {
    $('#cimg').slick({
        autoplay:true
    })
    $('.hamburger').click(function(){
       $('nav').slideToggle(); 
    })
    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules:{
            
                nome:{
                    required: true
                },
                email:{
                    required: true,
                    email: true
                },
                telefone:{
                    required:true,
                }
               

            
           
        },
        messages:{
            nome:'ensira seu nome',
            telefone:'ensira seu telefone',
            email:'seu email é inválido',
    
        },
        
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        $('html').animate({
            scrollTop: destino.offset().top
        })
    })
    });