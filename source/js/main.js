document.addEventListener('DOMContentLoaded', function() {
    
    //Кнопка «Навверх»
    let btnUp = document.querySelector('.btn-up__arrow');

    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

 
    // REVIEWS SLIDER START

    let reviewsButtonNext = document.querySelector('.reviews__right .slider__controls-right');
    let reviewsButtonPrev = document.querySelector('.reviews__right .slider__controls-left');

    $('.reviews__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.reviews__right .slider__controls-counter').text(i + '/' + slick.slideCount);
    });

    $('.reviews__slider').slick({
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        swipe: false
    });

    reviewsButtonNext.addEventListener('click', function() {
        $('.reviews__slider').slick('slickNext');
    });

    reviewsButtonPrev.addEventListener('click', function() {
        $('.reviews__slider').slick('slickPrev');
    });

    // REVIEWS SLIDER END


    // MASK FOR INPUT PHONE START

    let requestInputPhone = document.getElementById('phone');

    let maskOptions = {
        mask: '+{7} 000 000-00-00'
    };
    const mask = IMask(requestInputPhone, maskOptions);
    requestInputPhone.addEventListener('focus', function() {
        mask.value = '+7 ';
    });

    // MASK FOR INPUT PHONE END

    // FIXED HEADER AND NAV SWITCHER START

    let sectionAboutPos = $('#about').offset().top - 1;
    let sectionServicesPos = $('#services').offset().top - 1;
    let sectionProjectsPos = $('#projects').offset().top - 1;
    let sectionAchievementsPos = $('#achievements').offset().top - 1;
    let request_Form = $('#request_form').offset().top - 1;
    let header = document.querySelector('.header');
    let headerNavLinkAbout = document.getElementById('nav-about');
    let headerNavLinkServices = document.getElementById('nav-services');
    let headerNavLinkProjects = document.getElementById('nav-projects');
    let headerNavLinkAchievements = document.getElementById('nav-achievements');
    let headerNavLinkRequest = document.getElementById('nav-request');
    const headerNavLinks = [headerNavLinkAbout, headerNavLinkServices, headerNavLinkProjects, 
        headerNavLinkAchievements, headerNavLinkRequest];   

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= sectionAboutPos) {
            if (!header.classList.contains('fix')) {
                header.classList.add('fix');
            }
            
        } else {
            if (header.classList.contains('fix')) {
                header.classList.remove('fix');
            }
        }

        if (window.pageYOffset >= 0) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            } 
        }

        if (window.pageYOffset >= sectionAboutPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkAbout.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionServicesPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkServices.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionProjectsPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkProjects.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionAchievementsPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkAchievements.classList.add('active'); 
        }

        if (window.pageYOffset >= request_Form) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkRequest.classList.add('active'); 
        }
        
    });

    // FIXED HEADER NAV SWITCHER END

    // FORM SUBMIT, VALIDATION START

    let requestForm = document.querySelector('.request__form');
    let requestFormInputFio = document.getElementById('fio');
    let requestFormInputCompanyName = document.getElementById('company-name');
    let requestFormInputEmail = document.getElementById('email');
    let requestFormInputPhone = document.getElementById('phone'); 
    let requestFormContactMethods = document.querySelector('.request__form-contact-methods');
    let requestFormCheckBoxes = document.querySelectorAll('.request__form-checkbox');
    let requestFormInputs = [requestFormInputFio, requestFormInputCompanyName, requestFormInputEmail, requestFormInputPhone];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let requestFormHaveErrors = false;

    // VALIDATION
    function formErrorsCheck() {
        
        //fio
        if (requestFormInputFio.value == '' || requestFormInputFio.value.length < 6) {
            requestFormInputFio.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        
        //company-name
        if (requestFormInputCompanyName.value == '' || requestFormInputCompanyName.value.length < 3) {
            requestFormInputCompanyName.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        
        //email
        if (!emailRegex.test(requestFormInputEmail.value)) {
            requestFormInputEmail.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
      
        //phone
        if (requestFormInputPhone.value == '' || requestFormInputPhone.value.length < 16) {
            requestFormInputPhone.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //CheckBoxes
        if (requestFormCheckBoxes[0].checked == false && requestFormCheckBoxes[1].checked == false 
            && requestFormCheckBoxes[2].checked == false) {
                requestFormContactMethods.classList.add('error');

                if (requestFormHaveErrors == false) {
                    requestFormHaveErrors = true;
                }
            }
    }

    // INPUT, HIDDEN ERROR CLASS
    let haveSex = false;
    let protectionField = document.getElementById('protection-field');

    function haveSexChecking() {
        if (haveSex) protectionField.value = 'sex';
    }

    function formErrorsFixedCheck() {
        for (let input of requestFormInputs) {
            if (input.classList.contains('error')) {
                break;
            } else {
                if (requestFormHaveErrors) requestFormHaveErrors = false;
            }
        }
    }

    for (let checkbox of requestFormCheckBoxes) {
        checkbox.addEventListener('change', function() {
            if (requestFormContactMethods.classList.contains('error')) {
                requestFormContactMethods.classList.remove('error');
            }
            formErrorsFixedCheck();
        });
    }

    requestFormInputFio.addEventListener('input', function() {
        if (requestFormInputFio.value.length >= 6 && requestFormInputFio.classList.contains('error')) {
            requestFormInputFio.classList.remove('error');
        }
        formErrorsFixedCheck();
    });
    
    requestFormInputCompanyName.addEventListener('input', function() {
        if (requestFormInputCompanyName.value.length >= 3 && requestFormInputCompanyName.classList.contains('error')) {
            requestFormInputCompanyName.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputEmail.addEventListener('input', function() {
        if (emailRegex.test(requestFormInputEmail.value) && requestFormInputEmail.classList.contains('error')) {
            requestFormInputEmail.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputPhone.addEventListener('input', function() {
        if (requestFormInputPhone.value.length == 16 && requestFormInputPhone.classList.contains('error')) {
            requestFormInputPhone.classList.remove('error');
        }
        formErrorsFixedCheck();
        if (haveSex == false) haveSex = true;
    });

    // SUBMIT
    let requestFormSendAnimation = document.querySelector('.request__body-send-animation');
    let requestBody = document.querySelector('.request__body');


    requestForm.addEventListener('submit', function(event) {
        event.preventDefault();
        formErrorsCheck();
        haveSexChecking();

        if (requestFormHaveErrors == false && protectionField.value == 'sex') {
            let form_data = $(this).serialize();
            $.ajax({
                type: "GET", 
                url: "/",
                //dataType: "json",
                data: form_data,
                success: function() {
                    requestFormSendAnimation.classList.add('visible');
                    setTimeout(function() {
                        requestFormSendAnimation.classList.remove('visible');
                        requestBody.classList.add('hidden');
                        let successBlock = document.getElementById('request_success');
                        successBlock.scrollIntoView();
                    }, 1500);
                }
            });
        } 
    });
    
    // FORM SUBMIT, VALIDATION END

    
    



});