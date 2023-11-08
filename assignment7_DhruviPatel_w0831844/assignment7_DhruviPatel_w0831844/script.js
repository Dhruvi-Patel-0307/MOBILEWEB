$(function() {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      allowTouchMove: false
    });
  
    // Custom validation methods
    jQuery.validator.addMethod("phonePattern", function(value, element) {
      return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
    }, "Please enter a valid phone number (e.g., 123-456-7890)");
  
    jQuery.validator.addMethod("ccPattern", function(value, element) {
      return this.optional(element) || /^\d{16}$/.test(value);
    }, "Please enter a valid 16-digit credit card number");
  
    jQuery.validator.addMethod("cvvPattern", function(value, element) {
      return this.optional(element) || /^\d{3}$/.test(value);
    }, "Please enter a valid 3-digit CVV");
  
    // Validate personalInfoForm
    $('#personalInfoForm').validate({
      rules: {
        name: "required",
        dob: "required",
        gender: "required"
      },
      messages: {
        name: "Please enter your name",
        dob: "Please enter your date of birth",
        gender: "Please select your gender"
      }
    });
  
    // Validate contactInfoForm
    $('#contactInfoForm').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phonePattern: true
        },
        address: "required"
      },
      messages: {
        email: "Please enter a valid email address",
        phone: "Please enter a valid phone number in the format: 123-456-7890",
        address: "Please enter your address"
      }
    });
  
    // Validate paymentInfoForm
    $('#paymentInfoForm').validate({
      rules: {
        ccNumber: {
          required: true,
          ccPattern: true
        },
        expDate: "required",
        cvv: {
          required: true,
          cvvPattern: true
        }
      },
      messages: {
        ccNumber: "Please enter a valid credit card number",
        expDate: "Please enter the card's expiration date",
        cvv: "Please enter a valid CVV"
      }
    });
  
   
    window.slideNext = function() {
      var form = $('.swiper-slide').eq(swiper.activeIndex).find('form');
      if (form.valid()) {
        swiper.slideNext();
      }
    }
  
   
    window.slidePrev = function() {
      swiper.slidePrev();
    }
  

    window.submitForm = function() {
      var form = $('.swiper-slide').eq(swiper.activeIndex).find('form');
      if (form.valid()) {
       
        alert('Form submitted!');
      }
    }
  });
  