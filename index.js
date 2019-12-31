
function showHomepage() {
    $('.container > .cwrap').children().hide();
    $(".welcomeHero").fadeIn();
}
showHomepage();


function showAboutMe() {
    $(document).on('click', '.de1', function () {
        $('.container > .cwrap').children().hide();
        $(".bioBox").fadeIn();
        console.log("clicked");

    });
}
showAboutMe();


function showPortfolio() {
    $(document).on('click', '.de2', function () {
        $('.container > .cwrap').children().hide();
        $(".portBox").fadeIn();
    });
}
 showPortfolio();


function showContact() {
    $(document).on('click', '.de3', function () {
        $('.cwrap').children().fadeOut();
        $(".copyText").fadeIn();
    });
}
showContact();


function backToHome () {
    $(document).on('click', '.me', function () {
        $('.container > .cwrap').children().hide();
        $(".welcomeHero").fadeIn();
    })
}
backToHome();




