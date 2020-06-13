
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

//   $(document).ready(function(){
//     $(".de").on(function(){
//       $("#navbar").toggle();
//     });
//   });

function showAboutMe() {
    $(document).on('click', '#de1', function () {
        $('.container > .cwrap').children().hide();
       
        $(".bioBox").fadeIn();
        console.log("clicked");
        $("#holbogd").children().show();

    });
}
showAboutMe();


function showPortfolio() {
    $(document).on('click', '#de2', function () {
        $('.container > .cwrap').children().hide();
        // $('#navbar').hide();
        $(".portBox").fadeIn();
        $("#holbogd").children().show();
    });
}
 showPortfolio();


function showContact() {
    $(document).on('click', '#de3', function () {
        $('.cwrap').children().fadeOut();
        // $('#navbar').hide();
        $("#holbogd").children().hide();
        $(".connect").fadeIn();
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




