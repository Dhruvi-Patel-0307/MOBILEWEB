$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        speed: 600,
        spaceBetween: 100,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

  
    $.validator.addMethod(
        "phonePattern",
        function (value, element) {
            return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
        },
        "Please enter a valid US phone number (e.g., 123-456-7890)"
    );

    $.validator.addMethod(
        "zipPattern",
        function (value, element) {
            return this.optional(element) || /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/.test(value);
        },
        "Please enter a valid zip code"
    );

    $.validator.addMethod(
        "ccPattern",
        function (value, element) {
            return this.optional(element) || /^\d{10}$/.test(value);
        },
        "Please enter a valid 10-digit credit card number"
    );

    $.validator.addMethod(
        "cvvPattern",
        function (value, element) {
            return this.optional(element) || /^\d{3}$/.test(value);
        },
        "Please enter a valid 3-digit CVV"
    );

    

    
    
    validateForm("#loan", {
       
     
    }, function () {});

    
});
