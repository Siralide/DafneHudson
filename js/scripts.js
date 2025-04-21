// Efecto de carga suave
$(document).ready(function() {
    $('body').addClass('fade-in');
    
    // Activar tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Validación de formulario (si se añade en el futuro)
    $('form').submit(function(e) {
        e.preventDefault();
        // Validación personalizada aquí
        this.submit();
    });
    
    // Scroll suave para enlaces internos
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
    
    // Cambiar navbar al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('navbar-scroll');
        } else {
            $('.navbar').removeClass('navbar-scroll');
        }
    });
    
    // Mostrar/ocultar secciones de informes médicos
    $('.report-section h5').click(function() {
        $(this).next().slideToggle();
    });
    
    // Efecto de máquina de escribir para citas
    const typeWriter = (element, text, i = 0) => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(element, text, i), 50);
        }
    };
    
    const quotes = document.querySelectorAll('.typewriter');
    if (quotes.length > 0) {
        quotes.forEach(quote => {
            const text = quote.getAttribute('data-text');
            quote.innerHTML = '';
            typeWriter(quote, text);
        });
    }
});