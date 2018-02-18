const switchToPortfolio = function(prev){
    $('body').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );
    $('.dotOverlay').css({
        'height':'100vh',
        'width':'100vh',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'margin-top': '-50vh',
        'margin-left': '-50vh',
        'background':'rgba(241,133,0,1)',
        'background-size':'100%',
        'animation':'diamond 1.2s ease-in-out'
    });
    setTimeout(function(){
        $(prev).removeClass('show');
        $(prev).addClass('hide');
        $('#portfolio_page').removeClass('hide');
        $('#portfolio_page').addClass('show');
    },600);
    setTimeout(function(){
        $('.dotOverlay').addClass('hide');
    },1185);
}

const switchToSkills = function(prev){
    $('body').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );
    $('.dotOverlay').css({
        'height':'100vh',
        'width':'100vh',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'margin-top': '-50vh',
        'margin-left': '-50vh',
        'background':'rgba(248,77,103,1)',
        'background-size':'100%',
        'animation':'diamond 1.2s ease-in-out'
    });
    setTimeout(function(){
        $(prev).removeClass('show');
        $(prev).addClass('hide');
        $('#skills_page').removeClass('hide');
        $('#skills_page').addClass('show');
    },600);
    setTimeout(function(){
        $('.dotOverlay').addClass('hide');
    },1185);
}

const switchToContact = function(prev){
    $('body').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );
    $('.dotOverlay').css({
        'height':'100vh',
        'width':'100vh',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'margin-top': '-50vh',
        'margin-left': '-50vh',
        'background':'rgba(91, 118, 3, 1)',
        'background-size':'100%',
        'animation':'diamond 1.2s ease-in-out'
    });
    setTimeout(function(){
        $(prev).removeClass('show');
        $(prev).addClass('hide');
        $('#contact_page').removeClass('hide');
        $('#contact_page').addClass('show');
    },600);
    setTimeout(function(){
        $('.dotOverlay').addClass('hide');
    },1185);
}

const switchToAbout = function(prev){
    $('body').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );
    $('.dotOverlay').css({
        'height':'100vh',
        'width':'100vh',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'margin-top': '-50vh',
        'margin-left': '-50vh',
        'background':'yellow',
        'background-size':'100%',
        'animation':'diamond 1.2s ease-in-out'
    });
    setTimeout(function(){
        $(prev).removeClass('show');
        $(prev).addClass('hide');
        $('#about_page').removeClass('hide');
        $('#about_page').addClass('show');
    },600);
    setTimeout(function(){
        $('.dotOverlay').addClass('hide');
    },1185);
}

const switchToHome = function(prev){
    $('body').append(
        "<div class='dotOverlay'>"+
        "</div>"
    );
    $('.dotOverlay').css({
        'height':'100vh',
        'width':'100vh',
        'position':'absolute',
        'top':'50%',
        'left':'50%',
        'margin-top': '-50vh',
        'margin-left': '-50vh',
        'background':'white',
        'background-size':'100%',
        'animation':'diamond 1.2s ease-in-out'
    });
    setTimeout(function(){
        $(prev).removeClass('show');
        $(prev).addClass('hide');
        $('#main_page').removeClass('hide');
        $('#main_page').addClass('show');
    },600);
    setTimeout(function(){
        $('.dotOverlay').addClass('hide');
    },1185);
}

$().ready(function(){
    $('#menuPortfolio').on("click",function(){
        switchToPortfolio('#main_page');
    })

    $('.portfolio_btn').on("click",function(e){
        let section = $( e.target ).closest( "section" )[0].id;
        switchToPortfolio(`#${section}`);

        $('.portfolio_btn').addClass('portfolio-active');
        $('.portfolio_btn span').addClass('btn-title-active');
        $('.skills_btn').removeClass('skills-active');
        $('.skills_btn span').removeClass('btn-title-active');
        $('.about_btn').removeClass('about-active');
        $('.about_btn span').removeClass('btn-title-active');
        $('.contact_btn').removeClass('contact-active');
        $('.contact_btn span').removeClass('btn-title-active');

    })

    $('#menuSkills').on("click",function(){
        switchToSkills('#main_page');

        $('.skills_btn').addClass('skills-active');

        $('.skills_btn span').addClass('btn-title-active');
    })

    $('.skills_btn').on("click",function(e){
        let section = $( e.target ).closest( "section" )[0].id;        
        switchToSkills(`#${section}`);

        $('.skills_btn').addClass('skills-active');
        $('.skills_btn span').addClass('btn-title-active');
        $('.portfolio_btn').removeClass('portfolio-active');
        $('.portfolio_btn span').removeClass('btn-title-active');
        $('.about_btn').removeClass('about-active');
        $('.about_btn span').removeClass('btn-title-active');
        $('.contact_btn').removeClass('contact-active');
        $('.contact_btn span').removeClass('btn-title-active');

    })

    $('#menuContact').on("click",function(){
        switchToContact('#main_page');

        $('.contact_btn').addClass('contact-active');
        $('.contact_btn span').addClass('btn-title-active');
    })

    $('.contact_btn').on("click",function(e){
        let section = $( e.target ).closest( "section" )[0].id;                
        switchToContact(`#${section}`);

        $('.contact_btn').addClass('contact-active');
        $('.contact_btn span').addClass('btn-title-active');
        $('.skills_btn').removeClass('skills-active');
        $('.skills_btn span').removeClass('btn-title-active');
        $('.about_btn').removeClass('about-active');
        $('.about_btn span').removeClass('btn-title-active');
        $('.portfolio_btn').removeClass('portfolio-active');
        $('.portfolio_btn span').removeClass('btn-title-active');

    })

    $('#menuAbout').on("click",function(){
        switchToAbout('#main_page');
        $('.about_btn').addClass('about-active');
        $('.about_btn span').addClass('btn-title-active');
    });

    $('.about_btn').on("click",function(e){
        let section = $( e.target ).closest( "section" )[0].id;                
        switchToAbout(`#${section}`);

        $('.about_btn').addClass('about-active');
        $('.about_btn span').addClass('btn-title-active');
        $('.skills_btn').removeClass('skills-active');
        $('.skills_btn span').removeClass('btn-title-active');
        $('.contact_btn').removeClass('contact-active');
        $('.contact_btn span').removeClass('btn-title-active');
        $('.portfolio_btn').removeClass('portfolio-active');
        $('.portfolio_btn span').removeClass('btn-title-active');

    })

    $('.home_btn').on("click",function(e){
        let section = $( e.target ).closest( "section" )[0].id;
        switchToHome(`#${section}`);

        $('.skills_btn').removeClass('skills-active');
        $('.skills_btn span').removeClass('btn-title-active');
        $('.contact_btn').removeClass('contact-active');
        $('.contact_btn span').removeClass('btn-title-active');
        $('.portfolio_btn').removeClass('portfolio-active');
        $('.portfolio_btn span').removeClass('btn-title-active');
        $('.about_btn').removeClass('about-active');
        $('.about_btn span').removeClass('btn-title-active');
    })

    //Cube transition
    $('#skills_page').ready(function(){

        setTimeout(function(){
            $('.progress-html').animate({width:'60%'},"slower");
            $('.progress-css').animate({width:'60%'},"slower");
            $('.progress-js').animate({width:'50%'},"slow");
            $('.progress-jquery').animate({width:'55%'},"slow");
            $('.progress-nodejs').animate({width:'45%'},"slower");
            $('.progress-angular').animate({width:'30%'},"slower");
            $('.progress-ionic').animate({width:'25%'},"slow");
        },700);
    })

    $('#about_page').ready(function(){
        
    })
});