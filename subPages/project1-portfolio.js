$(document).ready(function(){
    
    setTimeout(function(){
        $('hr').animate({
        width:'100px'
        })
    },1000);


    $('.navList').each(function(){
        $(this).hover(function(){
            $(this).css("border-bottom","2px solid rgb(255,229,204)");
        },function(){
            $(this).css("border-bottom","0px solid rgb(255,229,204)");
        });
    });


    $('#orangeArrow').hover(function(){
        $(this).css()
    });

    $('#orangeArrow').click(function(){
        window.location.href = '../project1-main.html';
    })

    $('.goAbout').click(function(){
        window.location.href = './project1-about.html';
    });

    $('.goSkills').click(function(){
        window.location.href = './project1-skills.html';
    });

    $('.goContact').click(function(){
        window.location.href = './project1-contact.html';
    })
});