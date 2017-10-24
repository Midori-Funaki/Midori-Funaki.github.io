$(document).ready(function(){
    $('hr').css("border-color","rgb(232,64,170)");

    setTimeout(function(){
        $('hr').animate({width:'100px'})},1000);


    $('.progress-html').animate({width:'25%'},"slower");
    $('.progress-css').animate({width:'15%'},"slower");
    $('.progress-js').animate({width:'10%'},"slow");
    $('.progress-jquery').animate({width:'5%'},"slow");
    
    $('.navListPink').each(function(){
        $(this).hover(function(){
            $(this).css("border-bottom","2px solid rgb(255,229,204)");
        },function(){
            $(this).css("border-bottom","0px solid rgb(255,229,204)");
        });
    });

    $('#pinkArrow').click(function(){
        window.location.href = '../index.html';
    })

    $('.goPortfolio').click(function(){
        window.location.href = './project1-portfolio.html';
    });

    $('.goPortfolio').click(function(){
        window.location.href = './project1-portfolio.html';
    });

    $('.goContact').click(function(){
        window.location.href = './project1-contact.html';
    })
});