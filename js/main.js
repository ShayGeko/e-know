
const courseCardAddMobileCoef = 0.79968,
      courseCardPortraitCoef = 3,
      courseCardLandscapeCoef = 0.667;



var blackscreen;
var video;
var t1,t2;
var firstPage;
var orient;
function firstPageLoaded(){
    firstPageReady = true;
    alert("ready");
}
function setHeight(id, pCoef, lCoef, t = 0){
    let w = $('#' + id).width();
    if(w == 0) {
            w = $(window).width();
            if(id === "course-card-add-mobile")
                w*=0.94;
    }
    if(orient === 'portrait'){
        $('#' + id).height(w * pCoef);
    }
    else{
        $('#' + id).height(w * lCoef);
    }
}
function checkOrientation(){
    if($(window).height() > $(window).width())
        orient = 'portrait';
    else orient =  'landscape';
}
$(document).ready(function(){
    checkOrientation();
    documentReady = true;
    $('#first-page-background').on("load", function(){
        firstPageReady = true;
    }).each(function() {
        if(this.complete) $(this).trigger('load');
    });

    if($(window).width() < 450){

        $('#second-page-content-mobile-1').height($(window).width() * 2);
        let secondPageMobile = document.getElementById('second-page-mobile');
        secondPageMobile.style.gridTemplateRows =  $("#second-page-content-mobile-1").height() - 20 + "px", 900 + 'px';
        $('#second-page-mobile').height( $('#second-page-content-mobile-1').height() + 880);
    }
    window.addEventListener("load", function(){
        setHeight("course-card-add-mobile", courseCardAddMobileCoef, courseCardAddMobileCoef);
    });

    window.addEventListener("orientationchange", function(){
        checkOrientation();

        if($(window).width() < 450){

            $('#second-page-content-mobile-1').height($(window).width() * 2);
            let secondPageMobile = document.getElementById('second-page-mobile');
            secondPageMobile.style.gridTemplateRows =  $("#second-page-content-mobile-1").height() - 20 + "px", 900 + 'px';
            $('#second-page-mobile').height( $('#second-page-content-mobile-1').height() + 880);
        }
        else{
            $('#second-page-mobile').removeAttr('style');
            $('#second-page-content-mobile-1').removeAttr('style');
        }
        setHeight("course-card", courseCardPortraitCoef, courseCardLandscapeCoef);
        setHeight("course-card-add-mobile", courseCardAddMobileCoef, courseCardAddMobileCoef);
    });
    setHeight("course-card", courseCardPortraitCoef, courseCardLandscapeCoef);
    t1 = document.getElementsByClassName('toggle-1');
    t2 = document.getElementsByClassName('toggle-2');
    blackscreen = document.getElementById("course-card-scene")
    let cardCloseBtn = document.getElementById("course-card-close-btn");
    let body = document.getElementsByTagName("body")[0];
    for(var i = 0; i < 6; ++i){
        let a = document.getElementsByClassName("third-page-button")[i];
        let b = document.getElementsByClassName("lesson_a")[i];
        a.addEventListener("click", function() {
            blackscreen.style.display = "grid";
            let p = this.childNodes[0];
            let courseCardHeaderText = document.getElementById("course-card-header-text");
            let courseCardHeaderTextMobile = document.getElementById("course-card-header-text-mobile");
            courseCardHeaderText.innerText = p.innerText;
            courseCardHeaderTextMobile.innerText = p.innerText;
            $('#timetable-left-line').height($('#course-card-timetable-text-wrap-mobile').height());
        });
        b.addEventListener("click", function() {
            blackscreen.style.display = "grid";
            let courseCardHeaderText = document.getElementById("course-card-header-text");
            courseCardHeaderText.innerText =b.innerText;
            blackscreen.style.paddingRight = blackscreen.offsetWidth - blackscreen.clientWidth + 'px';
            $('#timetable-left-line').height($('#course-card-timetable-text-wrap-mobile').height());

        })
    }
    cardCloseBtn.addEventListener("click", function(){
        blackscreen.style.display = "none";
    })
    let register = document.getElementById("fourth-page-register").childNodes[0];
    let NavOpenForm = document.getElementById('open-form');
    let frame = document.getElementById("fourth-page-form");
    let frameEmail = document.getElementById("fourth-page-form-email");
    let header = document.getElementsByTagName("header")[0];
    let page5 = document.getElementById("fifth-page");

    register.addEventListener("click",function(){
        setVisible(frameEmail);
        header.style.display = "none";
    })


    let registerCloseBtn = document.getElementById("frame-close-btn");
    let registerCloseBtnEmail = document.getElementById("frame-close-btn-email");
    let page5CloseBtn = document.getElementById("page-five-close-btn");
    registerCloseBtn.addEventListener("click", function(){
        frame.style.display ='none';
        header.style.display = 'grid';
    })
    registerCloseBtnEmail.addEventListener("click", function(){
        frameEmail.style.display ='none';
        header.style.display = 'grid';
    })

    page5CloseBtn.addEventListener("click", function(){
        page5.style.display ='none';
        header.style.display = 'grid';
    })
    let menuBtn = document.getElementById("line-btn");
    let nav = document.getElementsByTagName("nav")[0];
    let navHidden = true;
    menuBtn.addEventListener("click", function(){
        if(navHidden){
            nav.style.display = "grid";
            navHidden = false;
        }
        else {nav.style.display = "none";navHidden = true;}
    })
    $("#first-page-video").height($("#first-page-video").width()*0.5625);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'instant'
            });
        });
    });
});
var prevWidth;
$(window).resize(function(){
    checkOrientation();
    $("#first-page-video").height($("#first-page-video").width()*0.5625);
    if($(window).width() > 750
        && $(window).width() >  $(window).height()
            && $(window).width > prevWidth) {

                 $('nav').css('display', "grid");
                 $('nav').css('position', "relative");
    }

    prevWidth = $(window).width();


    if($(window).width() < 450){

        $('#second-page-content-mobile-1').height($(window).width() * 2);
        let secondPageMobile = document.getElementById('second-page-mobile');
        secondPageMobile.style.gridTemplateRows =  $("#second-page-content-mobile-1").height() - 20 + "px", 900 + 'px';
        $('#second-page-mobile').height( $('#second-page-content-mobile-1').height() + 880);
    }
    else{
        $('#second-page-mobile').removeAttr('style');
        $('#second-page-content-mobile-1').removeAttr('style');
    }
    setHeight("course-card", courseCardPortraitCoef, courseCardLandscapeCoef);
    setHeight("course-card-add-mobile", courseCardAddMobileCoef, courseCardAddMobileCoef);

});
function setVisible(object){
    object.style.display = "block";
}
function open_course(a){
    blackscreen.style.display = "grid";
    let courseCardHeaderText = document.getElementById("course-card-header-text");
    courseCardHeaderText.innerText = a.innerText;
    blackscreen.style.paddingRight = blackscreen.offsetWidth - blackscreen.clientWidth + 'px';
}
function open_form(){

    let thirdPageCard = document.getElementById("course-card-scene");
    let frame = document.getElementById("fourth-page-form");
    setVisible(frame);

    thirdPageCard.style.display = "none";
    let header = document.getElementsByTagName("header")[0];
    header.style.display = "none";
}
function open_form_email(){
    let thirdPageCard = document.getElementById("course-card-scene");
    let frame = document.getElementById("fourth-page-form-email");
    setVisible(frame);

    thirdPageCard.style.display = "none";
    let header = document.getElementsByTagName("header")[0];
    header.style.display = "none";
}
function open_five(toggle){
    let page5 = document.getElementById("fifth-page");
    page5.style.display = "block";
    let header = document.getElementsByTagName('header')[0];
    header.style.display = "none";
    page5.style.paddingRight = page5.offsetWidth - page5.clientWidth + 'px';
    if(toggle == 1)
        toggle1();
    else toggle2();

}

//spawn toggle1 elements and hide toggle2 elements
function toggle1(){
    for(let i = 0; i < t1.length; ++i){
        t1[i].style.display = 'block';
    }
    for(let i = 0; i < t2.length; ++i){
        t2[i].style.display = 'none';
    }
    if($(window).width() < 600)
        $('#fifth-page-content').height($('#t1').height() + $('#fifth-page-img').height() + 45);
    else
        $('#fifth-page-content').height($('#t1').height());
}

//spawn toggle2 elements and hide toggle1 elements
function toggle2(){
    for(var i = 0; i < t2.length; i++){
        t2[i].style.display = 'block';
    }
    for(let i = 0; i < t1.length; ++i){
        t1[i].style.display = 'none';
    }
    if($(window).width() < 600)
     $('#fifth-page-content').height($('#t2').height()  + $('#fifth-page-img').height() + 45);
    else
        $('#fifth-page-content').height($('#t2').height());
}
function tt(){
    setHeight("course-card-add-mobile", courseCardAddMobileCoef, courseCardAddMobileCoef, $('#course-card-add-background-mobile').width());
    let grid = document.getElementById("course-card-add-mobile");
    grid.style.display = "grid";
    grid.style.gridTemplateRows = "grid-template-rows:repeat(25, 4%)";
}

