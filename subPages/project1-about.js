$(document).ready(function(){

    setTimeout(function(){
        $('hr').animate({width:'100px'})},1000);

    
    $('.navListYellow').each(function(){
        $(this).hover(function(){
            $(this).css("border-bottom","2px solid rgb(189,183,107)");
        },function(){
            $(this).css("border-bottom","0px solid rgb(189,183,107)");
        });
    });

    $('#yellowArrow').click(function(){
        window.location.href = '../index.html';
    });

    $('.goPortfolio').click(function(){
        window.location.href = './project1-portfolio.html';
    });

    $('.goSkills').click(function(){
        window.location.href = './project1-skills.html';
    });

    $('.goContact').click(function(){
        window.location.href = './project1-contact.html';
    });
});