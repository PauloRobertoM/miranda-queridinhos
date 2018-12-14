(function($, window) {
	$('#owl-ofertas').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('#owl-produtos').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.ancora').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#ancora-form').offset().top
        }, 2000);
    });

    // jQuery(document).ready(function(){
    //     jQuery('#pesquisa').click(function(){
    //         jQuery.ajax({
    //             success: function(data) {
    //                 var produto = jQuery('.prod').val();

    //                 console.log(produto)
    //             }
    //         });
    //         return false;
    //     });
    // });

    $("#cpf").mask("999.999.999-99");
    $("#telefone").mask("(99) 99999-9999");

    $(document).ready(function() {
        $(".formulario button").click(function() {
            if($("#termo").is(":checked")) {
            } else {
                alert("Aceite o termo");
                return false;
            }
        });
    });
})(jQuery, window);