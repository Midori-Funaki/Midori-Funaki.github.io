$('#menuPortfolio').on("click",function(){
    $('.relativeFrame').append(
        "<div class='slideOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='blackOverlay'>"+
        "</div>"
    );

    $('.slideOverlay').css({
        'width':'200%',
        'height':'61%',
        'position':'absolute',
        'top':'-140%',/*Adjusting Part*/
        'left':'-50%',
        'background':'rgb(63,198,195)',
        'transform':'rotate(30deg)'
    });

    $('.dotOverlay').css({
        'width':'200%',
        'height':'80%',
        'position':'absolute',
        'top':'-150%',/*Adjusting Part*/
        'left':'-50%',
        'background-image':"url('./images/dotOrange.jpg')",
        'background-size':'100%',
        'transform':'rotate(30deg)'
    });

    $('.blackOverlay').css({
        'width':'200%',
        'height':'100%',
        'position':'absolute',
        'top':'-170%',/*Adjusting Part*/
        'left':'-50%',
        'background':'black',
        'transform':'rotate(30deg)'
    });

    setTimeout(function(){
        window.location.href = './subPages/project1-portfolio.html'
    },2800);

    $('.slideOverlay').animate({
        'top':'200%',
    },4000);

    $('.dotOverlay').delay(280).animate({
        'top':'200%',
    },4200);

    $('.blackOverlay').delay(1000).animate({
        'top':'200%',
    },3850);
})


$('#menuSkills').on("click",function(){
    $('.relativeFrame').append(
        "<div class='slideOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='blackOverlay'>"+
        "</div>"
    );

    $('.slideOverlay').css({
        'width':'200%',
        'height':'61%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-60%',
        'background':'rgb(63,198,195)',
        'transform':'rotate(-30deg)'
    });

    $('.dotOverlay').css({
        'width':'200%',
        'height':'80%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-60%',
        'background-image':"url('./images/dotPink.jpg')",
        'background-size':'100%',
        'transform':'rotate(-30deg)'
    });

    $('.blackOverlay').css({
        'width':'200%',
        'height':'100%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-60%',
        'background':'black',
        'transform':'rotate(-30deg)'
    });

    setTimeout(function(){
        window.location.href = './subPages/project1-skills.html'
    },2800);

    $('.slideOverlay').animate({
        'top':'-140%',
    },4000);

    $('.dotOverlay').delay(260).animate({
        'top':'-150%',
        'left':'-100%'
    },4500);

    $('.blackOverlay').delay(1000).animate({
        'top':'-170%',
    },3800);
})

$('#menuContact').on("click",function(){
    $('.relativeFrame').append(
        "<div class='slideOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='blackOverlay'>"+
        "</div>"
    );

    $('.slideOverlay').css({
        'width':'200%',
        'height':'62%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-50%',
        'background':'rgb(63,198,195)',
        'transform':'rotate(30deg)'
    });

    $('.dotOverlay').css({
        'width':'200%',
        'height':'80%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-100%',
        'background-image':"url('./images/dotGreen.jpg')",
        'background-size':'100%',
        'transform':'rotate(30deg)'
    });

    $('.blackOverlay').css({
        'width':'200%',
        'height':'100%',
        'position':'absolute',
        'top':'200%',/*Adjusting Part*/
        'left':'-50%',
        'background':'black',
        'transform':'rotate(30deg)'
    });

    setTimeout(function(){
        window.location.href = './subPages/project1-contact.html'
    },2800);

    $('.slideOverlay').animate({
        'top':'-140%',
    },4000);

    $('.dotOverlay').delay(280).animate({
        'top':'-150%',
        'left':'0'
    },4200);

    $('.blackOverlay').delay(1000).animate({
        'top':'-170%',
    },3850);
})

$('#menuAbout').on("click",function(){
    $('.relativeFrame').append(
        "<div class='slideOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );

    $('.relativeFrame').append(
        "<div class='blackOverlay'>"+
        "</div>"
    );

    $('.slideOverlay').css({
        'width':'200%',
        'height':'61%',
        'position':'absolute',
        'top':'-140%',/*Adjusting Part*/
        'left':'-60%',
        'background':'rgb(63,198,195)',
        'transform':'rotate(-30deg)'
    });

    $('.dotOverlay').css({
        'width':'200%',
        'height':'80%',
        'position':'absolute',
        'top':'-150%',/*Adjusting Part*/
        'left':'-60%',
        'background-image':"url('./images/dotYellow.jpg')",
        'background-size':'100%',
        'transform':'rotate(-30deg)'
    });

    $('.blackOverlay').css({
        'width':'200%',
        'height':'140%',
        'position':'absolute',
        'top':'-220%',/*Adjusting Part*/
        'left':'-60%',
        'background':'black',
        'transform':'rotate(-30deg)'
    });

    setTimeout(function(){
        window.location.href = './subPages/project1-about.html'
    },2800);

    $('.slideOverlay').animate({
        'top':'200%'
    },4000);

    $('.dotOverlay').delay(260).animate({
        'top':'200%'
    },4500);

    $('.blackOverlay').delay(1000).animate({
        'top':'200%'
    },3800);
})