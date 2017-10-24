$(document).ready(function(){
    

    setTimeout(function(){
        $('hr').animate({width:'100px'})},1000);

    
    $('.navListGreen').each(function(){
        $(this).hover(function(){
            $(this).css("border-bottom","2px solid white");
        },function(){
            $(this).css("border-bottom","0px solid white");
        });
    });

    $('.form-control').each(function(){
        $(this).focus(function(){
            $(this).css('border-bottom','2px solid rgb(0,138,0)');
        });

        $(this).blur(function(){
            $(this).css('border-bottom','1px solid gray');
        });
    });

    $('#messageSubmit').click(function(){
        var name = $('#nameInput').val();
        var email = $('#emailInput').val();
        var message = $('#messageInput').val();
        
        if (((/^\s*$/).test(name) == false) && (email.match(/[@]/))&&((/^\s*$/).test(message) == false)){
            $('#thankYou').append(
                `<p>Hi ${name}!<br>Thank you for your message. We will reply you within a few days</p>`
            );
            $('.quickContact').find('input[type=text],textarea').val('');
        } else {
            $('#errorMessage').css({"color":"red"});
            $('#errorMessage').append(
                `<p>Opps. We are missing some information. Please check again</p>`
            );
        }
    });/* message Submit Cilck */

    $('#greenArrow').click(function(){
        window.location.href = '../project1-main.html';
    });

    $('.goPortfolio').click(function(){
        window.location.href = './project1-portfolio.html';
    });

    $('.goSkills').click(function(){
        window.location.href = './project1-skills.html';
    });

    $('.goAbout').click(function(){
        window.location.href = './project1-about.html';
    });
});