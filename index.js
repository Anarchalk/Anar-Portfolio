
function showHomepage() {
    $('.container > .cwrap').children().hide();
    $(".welcomeHero").fadeIn();
    $("#holbogd").children().show();
}
showHomepage();

function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }
  
 function closeNav() {
   document.getElementById("navbar").style.width = "0%";
  }

function showAboutMe() {
    $(document).on('click', '#de1', function () {
        $('.container > .cwrap').children().hide();
        $(".bioBox").fadeIn();
        console.log("clicked");
        $("#holbogd").children().show();
        if($(document).width() <= 767) {
            closeNav()
        };
    });
}
showAboutMe();



function showPortfolio() {
    $(document).on('click', '#de2', function () {
        $('.container > .cwrap').children().hide();
        $(".portBox").fadeIn();
        $("#holbogd").children().show();
        if($(document).width() <= 767) {
            closeNav()
        }
    });
    
}
 showPortfolio();


function showContact() {
    $(document).on('click', '#de3', function () {
        $('.cwrap').children().fadeOut();
        $("#holbogd").children().hide();
        $(".connect").fadeIn();
        if($(document).width() <= 767) {
            closeNav()
        }
    });
}
showContact();


function backToHome () {
    $(document).on('click', '.me', function () {
        $('.container > .cwrap').children().hide();
        $(".welcomeHero").fadeIn();
        $("#holbogd").children().show();
    })
}
backToHome();