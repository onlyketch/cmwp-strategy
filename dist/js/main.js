document.addEventListener('DOMContentLoaded', function() {

    // ACCORDION START

    let accordionClickHandler = document.querySelectorAll('.vectors__item-handler');
    let accordionItems = document.querySelectorAll('.vectors__item');

    for (let i = 0; i < accordionClickHandler.length; i++) {
        accordionClickHandler[i].addEventListener('click', function() {
            accordionItems[i].classList.toggle('open');
        })
    }

    // ACCORDION END


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
        swipe: false
    });

    reviewsButtonNext.addEventListener('click', function() {
        $('.reviews__slider').slick('slickNext');
    });

    reviewsButtonPrev.addEventListener('click', function() {
        $('.reviews__slider').slick('slickPrev');
    });

    // REVIEWS SLIDER END

    // WHY SLIDER START

    let whyButtonNext = document.querySelector('.why__gallery .slider__controls-right');
    let whyButtonPrev = document.querySelector('.why__gallery .slider__controls-left');

    $('.why__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.why__gallery .slider__controls-counter').text(i + '/' + slick.slideCount);
    });

    $('.why__slider').slick({
        arrows: false,
        draggable: false,
        swipe: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    whyButtonNext.addEventListener('click', function() {
        $('.why__slider').slick('slickNext');
    });

    whyButtonPrev.addEventListener('click', function() {
        $('.why__slider').slick('slickPrev');
    });

    // WHY SLIDER END

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

    let sectionAboutPos = $('.about').offset().top - 1;
    let sectionVectorsPos = $('.vectors').offset().top - 1;
    let sectionClientsPos = $('.clients').offset().top - 1;
    let sectionReviewsPos = $('.reviews').offset().top - 1;
    let sectionInternshipPos = $('.internship').offset().top - 1;
    let sectionWhyPos = $('.why').offset().top - 1;
    let header = document.querySelector('.header');
    let headerNavLinkAbout = document.getElementById('nav-about');
    let headerNavLinkVectors = document.getElementById('nav-vectors');
    let headerNavLinkClients = document.getElementById('nav-clients');
    let headerNavLinkReviews = document.getElementById('nav-reviews');
    let headerNavLinkInternship = document.getElementById('nav-internship');
    let headerNavLinkWhy = document.getElementById('nav-why');
    const headerNavLinks = [headerNavLinkAbout, headerNavLinkVectors, headerNavLinkClients, headerNavLinkReviews,
                            headerNavLinkInternship, headerNavLinkWhy];   

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

        if (window.pageYOffset >= sectionVectorsPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkVectors.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionClientsPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkClients.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionReviewsPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkReviews.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionInternshipPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkInternship.classList.add('active'); 
        }

        if (window.pageYOffset >= sectionWhyPos) {
            for (let link of headerNavLinks) {
                if (link.classList.contains('active')) link.classList.remove('active');
            }
            headerNavLinkWhy.classList.add('active'); 
        }
        
    });

    // FIXED HEADER NAV SWITCHER END

    // FORM SUBMIT, VALIDATION START

    let requestForm = document.querySelector('.request__form');
    let requestFormInputFio = document.getElementById('fio');
    let requestFormInputUniversity = document.getElementById('university');
    let requestFormInputCourse = document.getElementById('course');
    let requestFormInputDirection = document.getElementById('direction');
    let requestFormInputYear = document.getElementById('year');
    let requestFormInputWhen = document.getElementById('when');
    let requestFormInputVector = document.getElementById('vector');
    let requestFormInputPhone = document.getElementById('phone');
    let requestFormCheckBox = document.getElementById('agreement-checkbox');
    let requestFormInputs = [requestFormInputFio, requestFormInputUniversity, requestFormInputCourse, requestFormInputDirection,
                            requestFormInputYear, requestFormInputWhen, requestFormInputVector, requestFormInputPhone, requestFormCheckBox];

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
        //university
        if (requestFormInputUniversity.value == '' || requestFormInputUniversity.value.length < 3) {
            requestFormInputUniversity.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //course
        if (requestFormInputCourse.value == '') {
            requestFormInputCourse.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //direction
        if (requestFormInputDirection.value == '' || requestFormInputDirection.value.length < 6) {
            requestFormInputDirection.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //year
        if (requestFormInputYear.value == '' || requestFormInputYear.value.length < 4) {
            requestFormInputYear.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //when
        if (requestFormInputWhen.value == '' || requestFormInputWhen.value.length < 3) {
            requestFormInputWhen.classList.add('error');
            
            if (requestFormHaveErrors == false) {
                requestFormHaveErrors = true;
            }
        }
        //vector
        if (requestFormInputVector.value == '' || requestFormInputVector.value.length < 3) {
            requestFormInputVector.classList.add('error');
            
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
        //CheckBox
        if (requestFormCheckBox.checked == false) {
            requestFormCheckBox.classList.add('error');

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

    requestFormCheckBox.addEventListener('change', function() {
        if (requestFormCheckBox.classList.contains('error')) {
            requestFormCheckBox.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputFio.addEventListener('input', function() {
        if (requestFormInputFio.value.length >= 6 && requestFormInputFio.classList.contains('error')) {
            requestFormInputFio.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputUniversity.addEventListener('input', function() {
        if (requestFormInputUniversity.value.length >= 3 && requestFormInputUniversity.classList.contains('error')) {
            requestFormInputUniversity.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputCourse.addEventListener('input', function() {
        if (requestFormInputCourse.value.length > 0 && requestFormInputCourse.classList.contains('error')) {
            requestFormInputCourse.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputDirection.addEventListener('input', function() {
        if (requestFormInputDirection.value.length >= 6 && requestFormInputDirection.classList.contains('error')) {
            requestFormInputDirection.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputYear.addEventListener('input', function(event) {
        event.target.value = event.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
        if (requestFormInputYear.value.length >= 4 && requestFormInputYear.classList.contains('error')) {
            requestFormInputYear.classList.remove('error');
        }
        formErrorsFixedCheck();
        if (haveSex == false) haveSex = true;
    });

    requestFormInputWhen.addEventListener('input', function() {
        if (requestFormInputWhen.value.length >= 3 && requestFormInputWhen.classList.contains('error')) {
            requestFormInputWhen.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputVector.addEventListener('input', function() {
        if (requestFormInputVector.value.length >= 3 && requestFormInputVector.classList.contains('error')) {
            requestFormInputVector.classList.remove('error');
        }
        formErrorsFixedCheck();
    });

    requestFormInputPhone.addEventListener('input', function() {
        if (requestFormInputPhone.value.length == 16 && requestFormInputPhone.classList.contains('error')) {
            requestFormInputPhone.classList.remove('error');
        }
        formErrorsFixedCheck();
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
                type: "POST", 
                url: "/form/",
                dataType: "json",
                data: form_data,
                success: function() {
                    requestFormSendAnimation.classList.add('visible');
                    setTimeout(function() {
                        requestFormSendAnimation.classList.remove('visible');
                        requestBody.classList.add('hidden');
                    }, 1500);
                }
            });
        }
    });
    
    // FORM SUBMIT, VALIDATION END

    
    



});